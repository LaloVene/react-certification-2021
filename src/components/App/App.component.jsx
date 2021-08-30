import React, {useReducer, useEffect, useRef} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import NotFound from '../../pages/NotFound';
import styled, {css, ThemeProvider } from 'styled-components';
import GlobalContext from "../../utils/state/GlobalContext";
import GlobalReducer, {initialState} from "../../utils/state/GlobalReducer";
import { useVideos } from '../../utils/hooks/useVideos';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import HomeView from '../../pages/HomeView';
import Video from '../../pages/Video';
import Login from '../../pages/Login';
import Favorites from '../../pages/Favorites';
import FavoriteVideo from '../../pages/FavoriteVideo';
import Private from '../../pages/Private';

const Layout = styled.div`
  display: flex;
  background: ${props => props.theme.secondaryBackgroundColor};
`;
const Main = styled.div`
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  background-color: ${(props) => props.theme.primaryBackgroundColor};
  min-height: 100vh;
  overflow: hidden;

  @media (min-width: 1068px) {
    min-height: 85.5vh;
    border-radius: 1rem;
    margin: 4rem 4rem 4rem 0;
    margin-left: 15rem;
    ${(props) =>
      !props.sideBar &&
      css`
        margin: 4rem;
      `}
  }
`;

function App() {

  const [{ isLoading, isError, data }, changeUrl] = useVideos();
  const [ state, dispatch ] = useReducer(GlobalReducer, initialState);
  const { currentTheme } = state;
  const menuRef = useRef()

  useEffect(() => {
    const newThemeKey = JSON.parse(localStorage.getItem('theme')) || 'light';
    const newFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const newUserData = JSON.parse(sessionStorage.getItem('userData')) || {};
    dispatch({ type: 'LOAD_FROM_STORAGE', theme: newThemeKey, favorites: newFavorites });
    dispatch({ type: 'LOAD_FROM_SESSION_STORAGE', userData: newUserData });
  }, [dispatch]);

  // HIDE SIDEBAR IF SCREEN SMALL AND CLICK OUTSIDE
  useEffect(() => {
    let sideBarHandler = (event) => {
      if (window.innerWidth < 1068 && menuRef.current.contains(event.target)) {
        dispatch({ type: 'HIDE_SIDEBAR' });
      }
    }
    document.addEventListener('mousedown', sideBarHandler);
    return () => {
      document.removeEventListener('mousedown', sideBarHandler);
    }
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalContext.Provider value={{ state, dispatch }}>
          <ThemeProvider theme={currentTheme}>
            <Layout ref={menuRef}>
              <SideBar />
              <Main sideBar={state.sideBar}>
                <Header changeUrl={changeUrl} />
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <HomeView
                        videos={data}
                        isLoading={isLoading}
                        isError={isError}
                        changeUrl={changeUrl}
                        location={props.location}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/watch/:id"
                    render={(props) => (
                      <Video
                        videos={data}
                        isLoading={isLoading}
                        isError={isError}
                        changeUrl={changeUrl}
                        {...props}
                      />
                    )}
                  />
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Private exact path="/favorites">
                    <Favorites />
                  </Private>
                  <Private exact path="/fav-video/:id">
                    <FavoriteVideo
                      videos={data}
                      isLoading={isLoading}
                      isError={isError}
                      changeUrl={changeUrl}
                    />
                  </Private>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </Main>
            </Layout>
          </ThemeProvider>
        </GlobalContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

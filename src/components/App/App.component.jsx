import React, {useReducer, useEffect} from 'react';
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

const Layout = styled.div`
  display: flex;
  background: ${props => props.theme.secondaryBackgroundColor};
`;
const Main = styled.div`
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  background-color: ${props => props.theme.primaryBackgroundColor};
  /* min-height: 85.5vh; */
  
  @media (min-width: 1068px) {
    border-radius: 1rem;
    margin: 4rem 4rem 4rem 0;
    ${props => !props.sideBar && css`
      margin: 4rem;
  `}  
  }
`;

function App() {

  const [{ isLoading, isError, data }, changeUrl] = useVideos();
  const [ state, dispatch ] = useReducer(GlobalReducer, initialState);
  const { currentTheme } = state;

  useEffect(() => {
    dispatch({ type: 'LOAD_FROM_STORAGE' });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalContext.Provider value={{state, dispatch}}>
          <ThemeProvider theme={currentTheme}>
            <Layout>
              <SideBar />
              <Main sideBar={state.sideBar}>
                <Header changeUrl={changeUrl} />
                <Switch>
                  <Route
                    exact path="/"
                    render={(props) =>
                      <HomeView
                        videos={data}
                        isLoading={isLoading}
                        isError={isError}
                        changeUrl={changeUrl}
                        location={props.location}/>} />
                  <Route
                    exact path="/watch/:id"
                    render={(props) =>
                      <Video
                        videos={data}
                        isLoading={isLoading}
                        isError={isError}
                        changeUrl={changeUrl}
                        {...props}/>} />
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

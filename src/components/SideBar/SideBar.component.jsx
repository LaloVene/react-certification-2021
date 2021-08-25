import React, { useContext } from 'react';
import styled from 'styled-components';
import UserDetails from '../UserDetails/UserDetails.component';
import SideBarOption from '../SideBarOption/SideBarOption.component';
import GlobalContext from '../../utils/state/GlobalContext';
import { useHistory } from 'react-router-dom';

// ICONS
import { RiUser3Fill, RiUserSharedFill, RiUserAddFill } from 'react-icons/ri';
import { TiStarFullOutline } from 'react-icons/ti';
import { IoSettingsSharp, IoMoon, IoSunnySharp } from 'react-icons/io5';

const Container = styled.div`
  width: 20rem;
  padding: 2rem;
  @media (max-width: 1068px) {
    /* display: none; */
  }
`;
const Options = styled.div`
  margin: 3rem 0;
`;
const Separator = styled.div`
  margin: 0.8rem 0;
  margin-left: 2rem;
  color: red;
  font-size: 1rem;
`;

function SideBar() {
  const { state, dispatch } = useContext(GlobalContext);
  const history = useHistory();

  const toggleDarkTheme = () => {
    const actionType = state.currentTheme.id === 'dark' ? 'LIGHT_THEME' : 'DARK_THEME';
    const theme = state.currentTheme.id === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', JSON.stringify(theme));
    dispatch({ type: actionType });
  };
  const goToLogin = () => {
    history.push({
      pathname: '/login',
      search: ``,
    });
  };
  const logOut = () => {
    sessionStorage.removeItem('userData');
    dispatch({ type: 'LOGOUT' });
  };

  const NoLoggedOptions = [
    {
      id: 1,
      name: 'Login',
      icon: RiUserAddFill,
      onClick: goToLogin,
    },
  ];

  const LoggedOptions = [
    {
      id: 1,
      name: 'Profile',
      icon: RiUser3Fill,
    },
    {
      id: 2,
      name: 'Favorites',
      icon: TiStarFullOutline,
    },
    {
      id: 3,
      name: 'Logout',
      icon: RiUserSharedFill,
      onClick: logOut,
    },
  ];

  const Settings = [
    {
      id: 1,
      name: state.currentTheme.id === 'dark' ? 'Dark Theme' : 'Light Theme',
      icon: state.currentTheme.id === 'dark' ? IoMoon : IoSunnySharp,
      onClick: toggleDarkTheme,
    },
    {
      id: 2,
      name: 'Settings',
      icon: IoSettingsSharp,
      onClick: () => {},
    },
  ];

  return (
    <>
      {state?.sideBar && (
        <Container>
          <UserDetails />
          <Options data-testid="options">
            {!state?.userData?.id && (
              <>
                {NoLoggedOptions.map((option) => (
                  <SideBarOption
                    key={option.id}
                    icon={option.icon}
                    onClick={option.onClick}
                  >
                    {option.name}
                  </SideBarOption>
                ))}
                <Separator>•</Separator>
              </>
            )}

            {state?.userData?.id && (
              <>
                {LoggedOptions.map((option) => (
                  <SideBarOption
                    key={option.id}
                    icon={option.icon}
                    onClick={option.onClick}
                  >
                    {option.name}
                  </SideBarOption>
                ))}
                <Separator>•</Separator>
              </>
            )}

            {Settings.map((option) => (
              <SideBarOption key={option.id} icon={option.icon} onClick={option.onClick}>
                {option.name}
              </SideBarOption>
            ))}
          </Options>
        </Container>
      )}
    </>
  );
}

export default SideBar;

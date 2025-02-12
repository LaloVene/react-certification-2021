import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import GlobalContext from '../../utils/state/GlobalContext';

function Private({ children, ...rest }) {
  const { state } = useContext(GlobalContext);
  return (
    <Route
      {...rest}
      render={() => (state.userData.id ? children : <Redirect to="/login" />)}
    />
  );
}

export default Private;

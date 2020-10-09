import React from 'react';
import Containers from '../containers/Containers';
import Login from './Login/Login';
import Maps from './Maps/Maps';

const Index = () => {
  return (
    <>
      {/* <h1>Bienvenido al sistema de gestion de incidencias</h1> */}
      <Maps />
      {/* <h1>Login{process.env.REACT_APP_NAME}</h1> */}
      {/* <Login /> */}
    </>
  );
};

export default Index;

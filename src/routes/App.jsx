import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../assets/styles/containers/App.scss';
import Layout from '../containers/Layout';
import Error404 from '../pages/Error404';
import { UserContexts } from '../utils/UserContexts';
import Maps from '../components/Maps/Maps';
import CovidMap from '../components/CovidMap/CovidMap';

const App = () => {
  return (
    <UserContexts.Provider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Maps />} />
            <Route path="/general" element={<Maps />} />
            <Route path="/covid" element={<CovidMap />} />
            {/* <Route path="*" element={<Error404 />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </UserContexts.Provider>
  );
};

export default App;
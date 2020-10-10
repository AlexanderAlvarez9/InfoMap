import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={Maps} />
            <Route exact path="/general" component={Maps} />
            <Route exact path="/covid" component={CovidMap} />
            {/* <Route component={Error404} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </UserContexts.Provider>
  );
};

export default App;

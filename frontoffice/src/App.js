import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';
import { LoginPage, LogoutButton } from '@semapps/auth-provider';

import authProvider from './config/authProvider';
import dataProvider from './config/dataProvider';
import i18nProvider from './config/i18nProvider';
import * as resources from './resources';

import HomePage from './pages/HomePage/HomePage';
import Layout from './layout/Layout';
import theme from './config/theme';
import customRoutes from './customRoutes';

const history = createBrowserHistory();

const App = () => (
  <Admin
    title="Les Chemins de&nbsp;la&nbsp;Transition"
    history={history}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    loginPage={LoginPage}
    logoutButton={LogoutButton}
    dashboard={HomePage}
    layout={Layout}
    theme={theme}
    customRoutes={customRoutes}
  >
    {Object.entries(resources).map(([key, resource]) => (
      <Resource key={key} name={key} {...resource.config} />
    ))}
  </Admin>
);

export default App;

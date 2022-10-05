import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';
import { LoginPage, LogoutButton } from '@semapps/auth-provider';

import authProvider from './config/authProvider';
import dataProvider from './config/dataProvider';
import i18nProvider from './config/i18nProvider';
import theme from './config/theme';
import Layout from './layout/Layout';
import * as resources from './resources';

const history = createBrowserHistory();

const App = () => (
  <Admin
    title="Backoffice"
    history={history}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    layout={Layout}
    loginPage={LoginPage}
    logoutButton={LogoutButton}
    theme={theme}
  >
    {Object.entries(resources).map(([key, resource]) => (
      <Resource key={key} name={key} {...resource.config} />
    ))}
  </Admin>
);

export default App;

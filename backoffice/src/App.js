import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';
import { Layout, AppBar } from '@semapps/archipelago-layout';
import { LoginPage, LogoutButton, UserMenu } from '@semapps/auth-provider';

import authProvider from './config/authProvider';
import dataProvider from './config/dataProvider';
import i18nProvider from './config/i18nProvider';
import theme from './config/theme';
import * as resources from './resources';

const history = createBrowserHistory();

const AppBarWithUserMenu = (props) => <AppBar userMenu={<UserMenu />} {...props} />;
const LayoutWithUserMenu = (props) => <Layout {...props} appBar={AppBarWithUserMenu} />;

const App = () => (
  <Admin
    title="Backoffice"
    history={history}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    layout={LayoutWithUserMenu}
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

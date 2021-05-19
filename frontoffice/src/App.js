import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';

import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';

import HomePage from "./layout/HomePage";
import Layout from "./layout/Layout";
import theme from "./layout/theme";

const history = createBrowserHistory();

const App = () => (
  <Admin
    title="Les Chemins de la Transition"
    history={history}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    dashboard={HomePage}
    layout={Layout}
    theme={theme}
  >
    {Object.entries(resources).map(([key, resource]) => (
      <Resource key={key} name={key} {...resource.config} />
    ))}
  </Admin>
);

export default App;

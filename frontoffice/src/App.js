import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';

import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import * as resources from './resources';

import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import theme from "./layout/theme";
import customRoutes from './customRoutes';

const history = createBrowserHistory();

const App = () => (
  <Admin
    title="Les Chemins de&nbsp;la&nbsp;Transition"
    history={history}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
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

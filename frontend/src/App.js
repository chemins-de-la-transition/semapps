import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Layout } from '@semapps/archipelago-layout';

import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import theme from './config/theme';
import * as resources from './resources';

const App = () => (
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    layout={Layout}
    theme={theme}
  >
    {Object.entries(resources).map(([key, resource]) => (
      <Resource key={key} name={key} {...resource.config} />
    ))}
  </Admin>
);

export default App;

import React from 'react';
import { Admin, Resource, Link } from 'react-admin';
import { createBrowserHistory } from 'history';
import { SsoLoginPage, LogoutButton } from '@semapps/auth-provider';

import authProvider from './config/authProvider';
import dataProvider from './config/dataProvider';
import i18nProvider from './config/i18nProvider';
import * as resources from './resources';

import HomePage from './pages/HomePage/HomePage';
import Layout from './layout/Layout';
import theme from './config/theme';
import customRoutes from './customRoutes';

const history = createBrowserHistory();
const LoginPageWithText = props => 
<SsoLoginPage 
text={<span>
Bienvenue sur les Chemins de la Transition ! 
Créer un compte sur la plateforme va te permettre de renseigner ton profil : 
Qui tu es, dans quoi tu t'impliques, ce que tu recherches et ce que tu as à offrir. 
Il va également te permettre d'enregistrer tes coups de coeur en favoris (acteurs, lieux, evenements, voyages), 
et de rejoindre la communauté des Chemins de la Transition ! 
En te connectant, tu confirmes adhérer à la <Link to="/Page/charte-des-chemins-de-la-transition/show" target="_blank">Charte des Chemins de la Transition</Link>.
</span>}
{...props} />;

const App = () => (
  <Admin
    title="Les Chemins de&nbsp;la&nbsp;Transition"
    history={history}
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    loginPage={LoginPageWithText}
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

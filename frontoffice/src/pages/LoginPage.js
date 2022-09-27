import React from "react";
import { SsoLoginPage } from "@semapps/auth-provider";
import { Link } from "react-admin";

const LoginPage = props => (
  <SsoLoginPage
    text={
      <span>
        Bienvenue sur les Chemins de la Transition !
        Créer un compte sur la plateforme va te permettre de renseigner ton profil :
        Qui tu es, dans quoi tu t'impliques, ce que tu recherches et ce que tu as à offrir.
        Il va également te permettre d'enregistrer tes coups de coeur en favoris (acteurs, lieux, evenements, voyages),
        et de rejoindre la communauté des Chemins de la Transition !
        En te connectant, tu confirmes adhérer à la <Link to="/Page/charte-des-chemins-de-la-transition/show" target="_blank">Charte des Chemins de la Transition</Link>.
      </span>
    }
    propertiesExist={['followers', 'following', 'inbox', 'outbox']}
    {...props}
  />
);

export default LoginPage;

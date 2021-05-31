import * as React from "react";
import { Container } from '@material-ui/core';
import Events from '../layout/Events.js';

const HomePage = () => (
  <>
    <Container maxWidth="lg">
      Voyager, Essaimer, je sais plus quoi !
    </Container>
    <Container maxWidth="lg">
      Liste des lieux
    </Container>
    <Container maxWidth="lg">
      Objectifs
    </Container>
    <Container maxWidth="lg">
      Parcours
    </Container>
    <Container maxWidth="lg">
      liens vers les types de parcours
    </Container>
    <Events />
  </>
);

export default HomePage;

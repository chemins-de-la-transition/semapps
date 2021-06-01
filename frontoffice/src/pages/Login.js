
import React from "react";
import { Avatar, Button } from '@material-ui/core';
import { LoginPage } from '@semapps/auth-provider';

const CdlTLoginPage = props => (
  <LoginPage
    buttons={[
      <Button startIcon={<Avatar src="/logo192.png" />}>Mon Profil</Button>
    ]}
    {...props}
  />
);

export default CdlTLoginPage;
import React from "react";
import { SsoLoginPage } from "@semapps/auth-provider";
import { useTranslate } from "react-admin";

const LoginPage = props => {
  const translate = useTranslate();
  
  return (
    <SsoLoginPage
      text={
        <span>
          {translate('app.message.login')}
        </span>
      }
      propertiesExist={['followers', 'following', 'inbox', 'outbox']}
      {...props}
    />
  );
};

export default LoginPage;

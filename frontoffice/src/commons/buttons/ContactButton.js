import React, { useState, useEffect } from "react";
import { useGetIdentity, useShowContext, useTranslate } from "react-admin";
import { useHistory } from 'react-router';
import { AuthDialog } from "@semapps/auth-provider";
import ContactDialog from "../../commons/ContactDialog";
import Button from "../Button";
import RegistrationButton from "./RegistrationButton";

const ContactButton = ({ label, mainButton }) => {
  const history = useHistory();
  const { identity } = useGetIdentity();
  const [openContact, setOpenContact] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const { record = {} } = useShowContext();
  const translate = useTranslate();

  useEffect(() => {
    if (mainButton) {
      const query = new URLSearchParams(history.location.search);
      if (query.has('contact') && identity) {
        if (identity.id !== '') {
          history.replace(history.location.pathname);
          setOpenAuth(false);
          setOpenContact(true);
        } else {
          setOpenContact(false);
          setOpenAuth(true);
        }
      }
    }
  }, [mainButton, history, identity, setOpenContact]);

  if (record["cdlt:directRegistration"]) {
    return <RegistrationButton label={translate('app.action.event.register')} mainButton={mainButton} />;
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        typographyVariant="button1"
        onClick={() => {
          if (identity && identity.id !== '') {
            setOpenContact(true);
            setOpenAuth(false);
          } else {
            setOpenAuth(true);
            setOpenContact(false);
          }
        }}
      >
        {label}
      </Button>
      <ContactDialog
        open={openContact}
        name={identity?.webIdData?.['pair:label']}
        onClose={() => setOpenContact(false)}
      />
      <AuthDialog
        open={openAuth}
        onClose={() => setOpenAuth(false)}
        redirect={history.location.pathname + '?contact'}
        message={translate('app.message.errorAuth')}
      />
    </>
  );
};

ContactButton.defaultProps = {
  mainButton: true
};

export default ContactButton;

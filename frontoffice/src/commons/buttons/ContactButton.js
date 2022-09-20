import React, { useState, useEffect } from "react";
import { useGetIdentity, useShowContext } from "react-admin";
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
    return <RegistrationButton label="Je m'inscris" mainButton={mainButton} />;
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
        message="Veuillez vous connecter pour accéder au formulaire de contact"
      />
    </>
  );
};

ContactButton.defaultProps = {
  mainButton: true
};

export default ContactButton;

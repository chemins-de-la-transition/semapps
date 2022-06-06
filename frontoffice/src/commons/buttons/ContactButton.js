import React, { useState } from "react";
import { useShowContext } from "react-admin"; 
import ContactDialog from "../../commons/ContactDialog";
import Button from "../Button";
import RegistrationButton from "./RegistrationButton";

const ContactButton = ({ label }) => {
  const [showDialog, setShowDialog] = useState(false);
  const { record = {} } = useShowContext();

  if (record["cdlt:directRegistration"]) {
    return <RegistrationButton label="Je m'inscris" />;
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        typographyVariant="button1"
        onClick={() => setShowDialog(true)}
      >
        {label}
      </Button>
      <ContactDialog open={showDialog} onClose={() => setShowDialog(false)} />
    </>
  );
};

export default ContactButton;

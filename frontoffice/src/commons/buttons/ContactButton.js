import React, { useState } from 'react';
import ContactDialog from "../../commons/ContactDialog";
import Button from "../Button";

const ContactButton = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <Button variant="contained" color="primary" typographyVariant="button1" onClick={() => setShowDialog(true)}>
        Contacter le lieu
      </Button>
      <ContactDialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
      />
    </>
  );
}

export default ContactButton;

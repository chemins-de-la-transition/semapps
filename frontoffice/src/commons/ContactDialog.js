import React from 'react';
import { useNotify, required, useShowContext } from 'react-admin';
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, TextField, Button } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(() => ({
  title: {
    paddingTop: 20,
    paddingBottom: 8
  },
  actions: {
    padding: 20,
    paddingTop: 10,
    '& button': {
      padding: 10
    }
  },
  addForm: {
    paddingTop: 0
  },
  listForm: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    maxHeight: 210
  }
}));

const FinalFormTextField = ({ input: { name, onChange, value, ...restInput }, meta, ...rest }) => (
  <TextField
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    value={value}
  />
);

const ContactDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const { record } = useShowContext();
  const notify = useNotify();

  const onSubmit = async values => {
    const result = await fetch(process.env.REACT_APP_MIDDLEWARE_URL + '_mailer/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resourceUri: record['@id'] || record.id, ...values })
    });

    if( result.ok ) {
      onClose();
      notify('Votre message a bien été envoyé', 'success');
    } else {
      const json = await result.json();
      notify(json.message, 'error');
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Dialog fullWidth open={open} onClose={onClose}>
            <DialogTitle className={classes.title}>Contacter {record?.['pair:label']}</DialogTitle>
            <DialogContent className={classes.addForm}>
              <Field name="name" component={FinalFormTextField} label="Votre nom" variant="filled" margin="dense" fullWidth validate={required('Champ requis')} />
              <Field name="email" component={FinalFormTextField} label="Votre adresse mail" variant="filled" margin="dense" fullWidth validate={required('Champ requis')} />
              <Field name="content" component={FinalFormTextField} label="Message" variant="filled" margin="dense" fullWidth multiline rows={7} validate={required('Champ requis')} />
            </DialogContent>
            <DialogActions className={classes.actions}>
              <Button variant="text" onClick={onClose}>Fermer</Button>
              <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} onClick={() => form.submit()} disabled={submitting}>Envoyer</Button>
            </DialogActions>
          </Dialog>
        </form>
      )}
    />
  );
};

export default ContactDialog;

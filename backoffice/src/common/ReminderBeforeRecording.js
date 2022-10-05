import React from 'react';
import { Link, linkToRecord, useEditContext } from "react-admin";
import { makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  link: {
    fontWeight: 600,
    "&:hover": {
      textDecoration: 'underline'
    }
  }
}));

const ReminderBeforeRecording = () => {
  
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const { basePath, record } = useEditContext();
  const classes = useStyles();

  return (
  <Alert severity="warning">
    N'oubliez pas de renseigner le&nbsp;
    <Link
      to={linkToRecord(basePath, record?.id) + '/1'}
      onClick={handleClick}
      className={classes.link}
    >
      deuxième onglet
    </Link>
    &nbsp;du formulaire, c'est là qu'on pose les questions les plus intéressantes !
  </Alert>
);}

export default ReminderBeforeRecording;

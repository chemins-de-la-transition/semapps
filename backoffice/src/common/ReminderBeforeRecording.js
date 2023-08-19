import React from 'react';
import { Link, linkToRecord, useEditContext, useTranslate } from "react-admin";
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
  const translate = useTranslate();

  return (
    <Alert severity="warning">
      {translate('app.message.reminderToFill')}&nbsp;
      <Link
        to={linkToRecord(basePath, record?.id) + '/1'}
        onClick={handleClick}
        className={classes.link}
      >
        {translate('app.message.reminderSecondTab')}
      </Link>
      &nbsp;{translate('app.message.reminderEndText')}
    </Alert>
  );
}

export default ReminderBeforeRecording;

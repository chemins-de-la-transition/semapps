import React from 'react';
import { useRecordContext } from 'react-admin';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  p: {
    '&:first-of-type': {
      marginTop: 10,
    },
  }
}));

const ContactField = ({ phone, website, ...rest }) => {
  const classes = useStyles();
  const record = useRecordContext(rest);
  return(
    <ul>
      <li><Typography variant="body2" color="secondary"  className={classes.p}>{record[phone]}</Typography></li>
      {record[website] &&
        <li>
          <a href={record[website]} target="_blank" rel="noopener noreferrer">
            <Typography variant="body2" color="secondary"  className={classes.p}>{record[website]}</Typography>
          </a>
        </li>
      }
    </ul>
  )
};

ContactField.defaultProps = {
  label: 'Contact',
  addLabel: true
};

export default ContactField;

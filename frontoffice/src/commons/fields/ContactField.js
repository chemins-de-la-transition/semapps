import React from 'react';
import { useRecordContext, useTranslate } from 'react-admin';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  p: {
    '&:first-of-type': {
      marginTop: 10,
    },
  }
}));

const ContactField = ({ phone, website, mail, ...rest }) => {
  const classes = useStyles();
  const record = useRecordContext(rest);
  const translate = useTranslate();
  return(
    <ul>
      <li><Typography variant="body2" color="secondary"  className={classes.p}> {translate('app.input.person.phone')} {record[phone]}</Typography></li>
      {record[website] &&
        <li>
          <Typography variant="body2" color="secondary" className={classes.p}>
          {translate('app.input.person.website')} {" "}
            <a href={record[website]} target="_blank" rel="noopener noreferrer">
              {record[website]}
            </a>
          </Typography>
        </li>
      }
      {record[mail] &&
        <li>
          <Typography variant="body2" color="secondary" className={classes.p}>
          {translate('app.input.person.email')} {" "}
            <a href={'mailto:'+record[mail]} target="_blank" rel="noopener noreferrer">
              {record[mail]}
            </a>
          </Typography>
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

import React from 'react';
import Alert from '@material-ui/lab/Alert';
import {TextField, useShowContext, useTranslate} from "react-admin";
import { makeStyles, Box } from "@material-ui/core";
import { ReferenceField } from "@semapps/field-components";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'rgba(212,162,76,0.2)',
  },
  icon: {
    color: theme.palette.primary.main + ' !important',
  },
  message: {
    paddingTop: 10
  }
}));

const EventAlert = () => {
  const classes = useStyles();
  const { record } = useShowContext();
  const translate = useTranslate();

  if( record && ( record['pair:partOf'] || record['cdlt:full'] ) ) {
    if( record['pair:partOf'] && Array.isArray(record['pair:partOf']) ) {
      record['pair:partOf'] = record['pair:partOf'][0];
    }
    return (
      <Box pt={3} pb={1}>
        { record['cdlt:full'] &&
          <Alert severity="warning" classes={classes}>{translate('app.notification.full')}</Alert>
        }
        { record['pair:partOf'] &&
          <Alert severity="warning" classes={classes}>
            {translate('app.notification.partOf')}
            <ReferenceField record={record} reference="Course" source="pair:partOf" link="show">
              <TextField source="pair:label" />
            </ReferenceField>
          </Alert>
        }
      </Box>
    );
  }
  return null;
};

export default EventAlert;
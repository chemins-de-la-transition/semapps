import React from 'react';
import Alert from '@material-ui/lab/Alert';
import {TextField, useShowContext} from "react-admin";
import { makeStyles, Box } from "@material-ui/core";
import { ReferenceField } from "@semapps/semantic-data-provider";

const useStyles = makeStyles(() => ({
  message: {
    paddingTop: 10
  }
}));

const EventAlert = () => {
  const classes = useStyles();
  const { record } = useShowContext();
  if( record && record['pair:partOf'] ) {
    if( Array.isArray(record['pair:partOf']) ) record['pair:partOf'] = record['pair:partOf'][0];
    return (
      <Box pt={3} pb={1}>
        <Alert severity="warning" classes={{ message: classes.message }}>
          Cet événement fait partie du parcours&nbsp;
          <ReferenceField record={record} reference="Course" source="pair:partOf" link="show">
            <TextField source="pair:label" />
          </ReferenceField>
        </Alert>
      </Box>
    );
  } else {
    return null;
  }
};

export default EventAlert;
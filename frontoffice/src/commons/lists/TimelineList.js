import * as React from 'react';
import { useListContext, Link, linkToRecord, TextField, RecordContextProvider, ReferenceField } from 'react-admin';
import { Icon, Box, makeStyles, Typography } from '@material-ui/core';
import RoundIcon from '../../svg/RoundIcon';
import DateToDateField from '../fields/DateToDateField';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/timeline.png)`,
    backgroundPosition: '0 10px',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '54px',
    paddingLeft: 50,
    marginTop: 20,
  },
  event: {
    paddingBottom: 30,
    '&:last-of-type': {
      paddingBottom: 5,
    },
  },
  roundIcon: {
    position: 'absolute',
    top: -5,
    left: -35,
  },
  place: {
    "& strong, & span": {
      fontWeight: 600,
      color: theme.palette.secondary.main
    }
  }
}));

const TimelineList = () => {
  const classes = useStyles();
  const { ids, data, basePath } = useListContext();
  return (
    <Box className={classes.root}>
      {ids.map((id) => {
        if( !data[id] || data[id]['_error'] ) return null;
        return (
          <Box position="relative" className={classes.event}>
            <Icon className={classes.roundIcon} color="secondary">
              <RoundIcon />
            </Icon>
            <RecordContextProvider value={data[id]} key={id}>
              <p>
                <DateToDateField startDate="pair:startDate" endDate="pair:endDate" variant="subtitle1" color="primary" />
              </p>
              <Link to={linkToRecord(basePath, id, 'show')} onClick={(e) => e.stopPropagation()}>
                <Typography variant="body2" color="secondary" paragraph>
                  <strong>{data[id]['pair:label']}</strong>
                </Typography>
              </Link>
              <p>
                <TextField source="pair:comment" variant="body2" />
              </p>
              { data[id]['pair:hostedIn'] &&
                <Typography variant="body2" color="secondary" paragraph>
                  <ReferenceField record={data[id]} source="pair:hostedIn" reference="Place" linkType="show" className={classes.place}>
                    <strong>Lieu: <TextField source="pair:label" /></strong>
                  </ReferenceField>
                </Typography>
              }
              { ! data[id]['pair:hostedIn'] && data[id]['pair:hasLocation'] &&
                <Typography variant="body2" color="secondary" paragraph>
                  <strong>Localisation: {data[id]['pair:hasLocation']['pair:label']}</strong>
                </Typography>
              }
              <p>
                <TextField source="pair:hostedIn.pair:comment" variant="body2" />
              </p>
            </RecordContextProvider>
          </Box>
        )
      })}
    </Box>
  );
};

export default TimelineList;

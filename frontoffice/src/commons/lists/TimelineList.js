import * as React from 'react';
import { useListContext, Link, linkToRecord, TextField, RecordContextProvider } from 'react-admin';
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
}));

const TimelineList = () => {
  const classes = useStyles();
  const { ids, data, basePath } = useListContext();
  return (
    <Box className={classes.root}>
      {ids.map((id) => (
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
            <Link
              to={linkToRecord('/Place', data[id]['pair:hostedIn'].id, 'show')}
              onClick={(e) => e.stopPropagation()}
            >
              <Typography variant="body2" color="secondary" paragraph>
                <strong>Lieu: {data[id]['pair:hostedIn']['pair:label']}</strong>
              </Typography>
            </Link>
            <p>
              <TextField source="pair:hostedIn.pair:comment" variant="body2" />
            </p>
          </RecordContextProvider>
        </Box>
      ))}
    </Box>
  );
};

export default TimelineList;

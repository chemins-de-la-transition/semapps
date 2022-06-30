import * as React from 'react';
import { useListContext, Loading } from 'react-admin';
import { Box, Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position:'relative',
  },
  loading: {
    height: '50vh',
  },
  details: {
    display: 'flex',
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  content: {
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
}));

const ReservationList = ({ CardComponent }) => {
  const classes = useStyles();
  const { ids, data, basePath, loading } = useListContext();
  return loading ? (
    <Loading loadingPrimary="ra.page.loading" loadingSecondary="ra.message.loading" className={classes.loading} />
  ) : (
    ids.map((id) => {
      if( !data[id] ) return null;
      return (
        <Box key={id} className={classes.mainContainer}>
          <Card className={classes.details}>
            <CardContent className={classes.content}>
              <CardComponent record={data[id]} basePath={basePath} />
            </CardContent>
          </Card>
        </Box>
      )
    })
  );
};

ReservationList.defaultProps = {
  link: false,
  hasLike: false,
  external: false
};

export default ReservationList;

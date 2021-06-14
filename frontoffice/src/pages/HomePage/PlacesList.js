import React from 'react';
import { /*useMediaQuery,*/ makeStyles, Typography} from '@material-ui/core';
import FullWidthBox from '../../layout/FullWidthBox';
import LargeContainer from '../../layout/LargeContainer';
import {List, Datagrid, TextField, DateField, BooleanField, useShowController, ShowContextProvider} from 'react-admin';

const useStyles = makeStyles((theme) =>({
  background: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  }
}));

const PlacesList = () => {
  const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));

  // const config = {
  //   basePath: '/Page',
  //   id: process.env.REACT_APP_LOCAL_GROUP_CODS + 'pages/bienvenue',
  //   resource: 'Page'
  // };
  // todo check these paths
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer>
        <Typography variant="h2" style={{marginTop: '60px'}}>
          Les lieux
        </Typography>
        <Typography variant="h3" component="div">
          A visiter
        </Typography>
        <Typography variant="body2" component="div">
          Partez à la découvertes de lieux inspirants et allez à la rencontre de personnes qui ont choisis d’être acteurs de la transition. 
        </Typography>

        {/* <ShowContextProvider value={useShowController(config)}>
          <ListBase {...config}>
              <Datagrid>
                  <TextField source="id" />
                  <TextField source="title" />
                  <DateField source="published_at" />
                  <TextField source="category" />
                  <BooleanField source="commentable" />
              </Datagrid>
          </List>
      </ShowContextProvider> */}
      </LargeContainer>
    </FullWidthBox>
  );
};

export default PlacesList;

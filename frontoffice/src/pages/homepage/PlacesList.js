import React from 'react';
import { /*useMediaQuery,*/ makeStyles, Typography} from '@material-ui/core';
import Fullwidthbox from '../../layout/Fullwidthbox';
import Largecontainer from '../../layout/Largecontainer';
import {List, Datagrid, TextField, DateField, BooleanField, useShowController, ShowContextProvider} from 'react-admin';

const useStyles = makeStyles((theme) =>({
  background: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  }
}));

const PlacesList = ({theme}) => {
  const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));

  // const config = {
  //   basePath: '/Page',
  //   id: process.env.REACT_APP_LOCAL_GROUP_CODS + 'pages/bienvenue',
  //   resource: 'Page'
  // };
  // todo check these paths
  return (
    <Fullwidthbox className={classes.background}>
      <Largecontainer>
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
          <List {...config}>
              <Datagrid>
                  <TextField source="id" />
                  <TextField source="title" />
                  <DateField source="published_at" />
                  <TextField source="category" />
                  <BooleanField source="commentable" />
              </Datagrid>
          </List>
      </ShowContextProvider> */}
      </Largecontainer>
    </Fullwidthbox>
  );
};

export default PlacesList;

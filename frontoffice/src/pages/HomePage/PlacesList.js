import React from 'react';
import { makeStyles, Typography, Card, CardContent, CardHeader, CardMedia, Avatar, Box} from '@material-ui/core';
import  PlaceIcon  from '@material-ui/icons/Place';
import FullWidthBox from '../../layout/FullWidthBox';
import LargeContainer from '../../layout/LargeContainer';
import { ListBase, useListContext , TextField} from 'react-admin';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({ 
  background: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  },
  container: {
    marginTop: '60px',
  },
  header: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  toBottom: {
    alignSelf: 'flex-end',
    flexShrink: '0'
,  },
  stretch: {
    flexGrow: '10',
    minWidth: '40px',
    [theme.breakpoints.down('800')]: {
      minWidth: '10px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  cardContainer: {
    margin: '1em' ,
    display: 'flex',
  },
  cardClass: {
    flexBasis: '25%',
    [theme.breakpoints.down('xs')]: {
      flexBasis: '45%',
      flexShrink: '0',
    },
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  ListBase: {
    overflow: 'hidden',
  },
}));

const PlacesGrid = () => {
  const classes = useStyles();
  const { ids, data /*, basePath*/ } = useListContext();
  return (
    <div className={classes.cardContainer}>
    {ids.map(id =>
        <Card key={id} className={classes.cardClass}>
            <CardHeader
                title={<TextField record={data[id]} source="pair:label" />}
                subheader={<TextField record={data[id]} source="pair:comment" />}
                avatar={<Avatar icon={<PlaceIcon />} />}
            />
            <CardMedia
              className={classes.media}
              image={data[id]["pair:image"]}
              title={data[id]["pair:label"]}
            />
            <CardContent>
                <TextField record={data[id]} source="pair:description" />
            </CardContent>
        </Card>
    )}
    </div>
  );
};

const PlacesList = () => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer className={classes.container}>
        <Box width={1} className={classes.header}>
          <Box>
            <Typography variant="h2">
              Les lieux
            </Typography>
            <Typography variant="h3" component="div">
              A visiter
            </Typography>
            <Typography variant="body2" component="div">
              Partez à la découvertes de lieux inspirants et allez à la rencontre de personnes qui ont choisis d’être acteurs de la transition. 
            </Typography>
          </Box> 

          <Box className={classes.stretch}>
          </Box> 
          <Link
                to='/Place' 
                className={classes.toBottom}
              > 
              <Typography variant="button2">Voir tous les lieux</Typography>
            </Link>
        </Box>

          <ListBase
            resource="Place"
            basePath="/Place"
            perPage={4}
            // filter={{ 'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/en-vedette' }}
            sort={{ field: 'published', order: 'ASC' }}
            className={classes.ListBase}
            >
              <PlacesGrid />
          </ListBase>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default PlacesList;

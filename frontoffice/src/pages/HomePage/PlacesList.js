import React from 'react';
import { makeStyles, Typography, Card, CardContent, CardHeader, CardMedia, Box, CardActionArea} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FullWidthBox from '../../layout/FullWidthBox';
import LargeContainer from '../../layout/LargeContainer';
import { ListBase, useListContext } from 'react-admin';
import { Link } from 'react-router-dom';
import PlaceOutlinedIcon from '@material-ui/icons/PlaceOutlined';

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
  link: {
    alignSelf: 'flex-end',
    flexShrink: '0',
    textDecoration: 'none',
    display: 'flex',
    flewWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexGrow: '10',
    marginLeft: '20px',
    marginTop: '10px',
    '& .MuiTypography-root': {
      color: theme.palette.secondary.main,
    },
  },
  noDecoration: {
    textDecoration: 'none',
  },
  cardTitle: {
    marginTop: '8px',
    marginBottom: '8px',
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
          <CardActionArea>
            <CardMedia
                className={classes.media+' '+classes.noDecoration}
                image={data[id]["pair:image"]}
                title={data[id]["pair:label"]}
                to={'/Place/'+encodeURIComponent(id)+'/show'}
                component={Link}
              />
          </CardActionArea>
          {
            (data[id]["pair:hasTopic"]) 
            ? (
              <CardContent>
                <Typography variant="body2">{data[id]["pair:hasTopic"]}</Typography>
              </CardContent>)
            : ''
          }
          <CardHeader
              to={'/Place/'+encodeURIComponent(id)+'/show'}
              className={classes.noDecoration}
              component={Link}
              title={<Typography className={classes.cardTitle} variant="h4" color="primary">{data[id]["pair:label"]}</Typography>}
              subheader={<PlaceOutlinedIcon color="secondary"></PlaceOutlinedIcon>}
          />
          <CardContent
            to={'/Place/'+encodeURIComponent(id)+'/show'}
            className={classes.noDecoration}
            component={Link}>
              <Typography variant="body2" color="secondary">{data[id]["pair:comment"]}</Typography>
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
          <Link
                to='/Place' 
                className={classes.link}
              > 
              <Typography variant="button2">Voir tous les lieux</Typography>
              <ChevronRightIcon></ChevronRightIcon>
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

import React from 'react';
import { makeStyles, Typography, Card, CardContent, CardHeader, CardMedia, Box, CardActionArea} from '@material-ui/core';
import { useGetOne , Loading} from 'react-admin';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';

const useStyles = makeStyles((theme) =>({ 
  cardTheme: {
    position: 'relative',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .block':{
      marginLeft: '16px',
      marginRight: '16px',
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      height: '28px',
      borderRadius: '20px',
      fontSize: '12px',
      lineHeight: '12px',
      textAlign: 'center',
      position: 'absolute',
      top: '-14px',
      // width: '90%',
      paddingLeft: '10px',
      paddingRight: '10px',
      overflow: 'clip',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiTypography-root':{
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      fontSize: '12px',
      lineHeight: '12px',
      textAlign: 'center',
      textDecoration: 'none',
    }
  },
  headerContainer: {
    paddingTop: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '0',
  },
  noDecoration: {
    textDecoration: 'none',
  },
  comment:{
    paddingTop: '8px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddinBottom: '20px',
    '& .MuiTypography-root':{
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  cardTitle: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  cardClass: {
    flexBasis: '25%',
    marginLeft:'12px',
    marginRight:'12px',
    marginTop: '0' ,
    marginBottom: '0' ,
    '&:first-child':{
      marginLeft:'1px',
    },
    '&:last-child':{
      marginRight:'1px',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '33%',
      flexShrink: '0',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '100%',
      flexShrink: '0',
    },
    display: 'inline-block',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  smallHeigth: {
    maxHeight: '12px',
    overflow: 'clip',
  },
}));

const GetOneThemeLabel = ({id}) => {
  const classes = useStyles();
  const { data, loading, error} = useGetOne('Theme', id);
  if (loading) { return <Loading className={classes.smallHeigth}/>; }
  if (error) { return <p>ERROR</p>; }
  return (
    <span>{data["pair:label"]}</span>
  ) ;
};

const CardBlock = ({id,data,basePath}) => {
  const classes = useStyles();
  let topics = data[id]["pair:hasTopic"];
  if (!Array.isArray(topics)) {
    topics = [topics];
  }
  // shuffle topics
  topics.sort(() => Math.random() - 0.5);
  topics.sort(() => Math.random() - 0.5);
  const firstTopic = topics[0];
  const secondTopic = (topics.length > 1) ? topics[1] : null;
  return (
    <Card key={id} className={classes.cardClass}>
      <CardActionArea>
        <CardMedia
            className={classes.media+' '+classes.noDecoration}
            image={data[id]["pair:image"] ?? process.env.PUBLIC_URL + '/pexels-celine-chamiotponcet-2889792.jpg'}
            // Image : (Free to Use and no attribution required) Céline Chamiot-Poncet @pexels https://www.pexels.com/fr-fr/photo/maison-en-bois-2889792/
            title={data[id]["pair:label"]}
            to={basePath+'/'+encodeURIComponent(id)+'/show'}
            component={Link}
          />
      </CardActionArea>
      {
        (firstTopic) 
        ? (
            (secondTopic)
            ? (
              <CardContent
                className={classes.cardTheme + ' '+classes.noDecoration}
                >
                <Box className={classes.noDecoration+' block'}>
                  <Typography variant="body2" 
                  component={Link}
                  to={'/theme/'+encodeURIComponent(firstTopic)+'/show'}>
                    <GetOneThemeLabel id={firstTopic}></GetOneThemeLabel>
                  </Typography>
                  <Typography variant="body2" 
                  component={Link}
                  to={'/theme/'+encodeURIComponent(secondTopic)+'/show'}>
                    /<GetOneThemeLabel id={secondTopic}></GetOneThemeLabel>
                  </Typography>
                </Box>
              </CardContent>
            )
            :
            <CardContent
              className={classes.cardTheme + ' '+classes.noDecoration}
              component={Link}
              to={'/theme/'+encodeURIComponent(firstTopic)+'/show'}
              >
              <Typography className="block" variant="body2"><GetOneThemeLabel id={firstTopic}></GetOneThemeLabel></Typography>
            </CardContent>
          )
        : ''
      }
      <CardHeader
          to={basePath+'/'+encodeURIComponent(id)+'/show'}
          className={classes.noDecoration+' '+classes.headerContainer}
          component={Link}
          title={<Typography className={classes.cardTitle} variant="h4" color="primary">{data[id]["pair:label"]}</Typography>}
          subheader={<SubHeader data={data} id={id}></SubHeader>}
      />
      <CardContent
        to={basePath+'/'+encodeURIComponent(id)+'/show'}
        className={classes.noDecoration + ' '+ classes.comment}
        component={Link}>
          <Typography variant="body2" color="secondary" component="div">{data[id]["pair:comment"]}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardBlock;

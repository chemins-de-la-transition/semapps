import React from 'react';
import { makeStyles, Typography, Card, CardContent, CardHeader, CardMedia, Box, CardActionArea} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FullWidthBox from '../../layout/FullWidthBox';
import LargeContainer from '../../layout/LargeContainer';
import { ListBase, useListContext,useGetOne , Loading} from 'react-admin';
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
  subHeader: {
    display: 'flex',
    alignItems: 'center',
  },
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
      width: '90%',
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

const SubHeader = ({data,id}) => {
  const classes = useStyles();
  return (
    <Box className={classes.subHeader}>
      <PlaceOutlinedIcon color="secondary"></PlaceOutlinedIcon>
      {
        (data[id]["pair:hasPostalAddress"])
        ? <Typography variant="body2">{data[id]["pair:hasPostalAddress"]["pair:addressZipCode"]}</Typography>
        :''
      }
    </Box>
  );
};

const GetOneThemeLabel = ({id}) => {
  const { data, loading, error} = useGetOne('Theme', id);
  if (loading) { return <Loading />; }
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
                <Box class="block" className={classes.noDecoration}>
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
              <Typography class="block" variant="body2"><GetOneThemeLabel id={firstTopic}></GetOneThemeLabel></Typography>
            </CardContent>
          )
        : ''
      }
      <CardHeader
          to={basePath+'/'+encodeURIComponent(id)+'/show'}
          className={classes.noDecoration}
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

const ItemsGrid = ({nb}) => {
  const classes = useStyles();
  const { ids, data , basePath } = useListContext();
  // shuffle ids
  let shuffledIds = ids;
  shuffledIds.sort(() => Math.random() - 0.5);
  shuffledIds.sort(() => Math.random() - 0.5);
  // keep only nb
  shuffledIds = shuffledIds.slice(0,nb);
  return (
    <div className={classes.cardContainer}>
    {shuffledIds.map(id =>
        <CardBlock
          id={id}
          data={data}
          basePath={basePath}
          ></CardBlock>
    )}
    </div>
  );
};

const BaseList = ({resource,basePath,title,subtitle,headComment,linkText}) => {
  const classes = useStyles();
  return (
    <FullWidthBox className={classes.background}>
      <LargeContainer className={classes.container}>
        <Box width={1} className={classes.header}>
          <Box>
            <Typography variant="h2">
              {title}
            </Typography>
            <Typography variant="h3" component="div">
              {subtitle}
            </Typography>
            <Typography variant="body2" component="div">
             {headComment}
            </Typography>
          </Box> 
          <Link
                to={basePath}
                className={classes.link}
              > 
              <Typography variant="button2">{linkText}</Typography>
              <ChevronRightIcon></ChevronRightIcon>
            </Link>
        </Box>

          <ListBase
            resource={resource}
            basePath={basePath}
            // perPage={4}
            // filter={{ 'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/en-vedette' }}
            // sort={{ field: 'published', order: 'DESC' }}
            className={classes.ListBase}
            >
              <ItemsGrid nb={4}/>
          </ListBase>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default BaseList;

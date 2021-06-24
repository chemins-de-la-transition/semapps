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
  subHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  cardTheme: {
    position: 'relative',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    '& .MuiTypography-root':{
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

const ItemsGrid = () => {
  const classes = useStyles();
  const { ids, data , basePath } = useListContext();
  return (
    <div className={classes.cardContainer}>
    {ids.map(id =>
        <Card key={id} className={classes.cardClass}>
          <CardActionArea>
            <CardMedia
                className={classes.media+' '+classes.noDecoration}
                image={data[id]["pair:image"]}
                title={data[id]["pair:label"]}
                to={basePath+'/'+encodeURIComponent(id)+'/show'}
                component={Link}
              />
          </CardActionArea>
          {
            (data[id]["pair:hasTopic"]) 
            ? (
              <CardContent
                className={classes.cardTheme + ' '+classes.noDecoration}
                component={Link}
                to={'/theme/'+encodeURIComponent(data[id]["pair:hasTopic"])+'/show'}
                >
                <Typography variant="body2">{data[id]["pair:hasTopic"]}</Typography>
              </CardContent>)
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
            perPage={4}
            // filter={{ 'pair:hasStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'status/en-vedette' }}
            sort={{ field: 'published', order: 'DESC' }}
            className={classes.ListBase}
            >
              <ItemsGrid />
          </ListBase>
      </LargeContainer>
    </FullWidthBox>
  );
};

export default BaseList;

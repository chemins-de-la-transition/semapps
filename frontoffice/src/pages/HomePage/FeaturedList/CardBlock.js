import React from 'react';
import { makeStyles, Typography, Card, CardContent, CardHeader, CardMedia, CardActionArea} from '@material-ui/core';
import {  ReferenceField,ReferenceArrayField, TextField} from 'react-admin';
import { Link } from 'react-router-dom';
import SubHeader from './SubHeader';
import ShuffledSingleFieldList from './ShuffledSingleFieldList';

const useStyles = makeStyles((theme) =>({ 
  cardTopics:{
    position: 'relative',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockTopics:{
    position: 'absolute',
    top: '-14px',
  },
  topics:{
    marginLeft: '16px',
    marginRight: '16px',
    background: theme.palette.secondary.main,
    height: '28px',
    display: 'block',
    borderRadius: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
    overflow: 'clip',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  severalTopics:{
    marginTop: '0',
    marginBottom: '0',
    flexWrap: 'none',
    flexShrink: '0',
    '& a:not(:first-child)::before':{
      content: "'/'",
      marginLeft: '2px',
      marginRight: '2px',
      color: theme.palette.secondary.contrastText,
      fontSize: '12px',
      lineHeight: '12px',
      textAlign: 'center',
      textDecoration: 'none',
    },
  },
  textTopics: {
    color: theme.palette.secondary.contrastText,
    fontSize: '12px',
    lineHeight: '12px',
    textAlign: 'center',
    textDecoration: 'none',
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
}));

const CardBlock = ({id,data,basePath}) => {
  const classes = useStyles();
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
        (data[id]["pair:hasTopic"]) ?
        <CardContent
          className={classes.cardTopics + ' '+classes.noDecoration}
          >
          {
            (!Array.isArray(data[id]["pair:hasTopic"]))
            ?
            <ReferenceField source="pair:hasTopic" reference="Theme" record={data[id]} className={classes.blockTopics}>
                <TextField source="pair:label" className={classes.topics+' '+classes.textTopics}/>
            </ReferenceField>
            :
            <ReferenceArrayField
              source="pair:hasTopic"
              reference="Theme"
              record={data[id]}
              className={classes.topics+' '+classes.severalTopics+' '+classes.blockTopics}>
                <ShuffledSingleFieldList nb={2}>
                    <TextField source="pair:label" className={classes.textTopics}/>
                </ShuffledSingleFieldList>
            </ReferenceArrayField>
          }
        </CardContent>
        :''
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

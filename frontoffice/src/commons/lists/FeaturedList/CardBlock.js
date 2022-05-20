import React from 'react';
import { makeStyles, Typography, Card, CardContent, CardHeader, CardMedia, CardActionArea, Chip } from '@material-ui/core';
import { TextField, FunctionField } from 'react-admin';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Link } from 'react-router-dom';
import { linkToFilteredList } from "../../../utils";
import LikeButton from '../../buttons/LikeButton';
import AgricultureAlimentation_PictoCdlT from '../../../icons/AgricultureAlimentation_PictoCdlT.png' ;
import Artisanat_PictoCdlT from '../../../icons/Artisanat_PictoCdlT.png' ;
import Communication_PictoCdlT from '../../../icons/Communication_PictoCdlT.png' ;
import CultureModeVie_PictoCdlT from '../../../icons/CultureModeVie_PictoCdlT.png' ;
import DevTerritorial_PictoCdlT from '../../../icons/DevTerritorial_PictoCdlT.png' ;
import Ecologie_PictoCdlT from '../../../icons/Ecologie_PictoCdlT.png' ;
import Energie_PictoCdlT from '../../../icons/Energie_PictoCdlT.png' ;
import Gouvernance_PictoCdlT from '../../../icons/Gouvernance_PictoCdlT.png' ;
import Habitat_PictoCdlT from '../../../icons/Habitat_PictoCdlT.png' ;
import JusticeSociale_PictoCdlT from '../../../icons/JusticeSociale_PictoCdlT.png' ;
import Mobilite_PictoCdlT from '../../../icons/Mobilite_PictoCdlT.png' ;
import Sante_Bienetre_PictoCdlT from '../../../icons/Sante_Bienetre_PictoCdlT.png' ;
import ScienceTech_PictoCdlT from '../../../icons/ScienceTech_PictoCdlT.png' ;

const useStyles = makeStyles((theme) => ({
  cardTopics: {
    position: 'absolute',
    zIndex: 1,
    paddingLeft: 0,
  },
  categoryLogo: {
    width: 40,
    height: 40,
    background: "white",
    borderRadius: 100,
  },
  likeButton: {
    position: 'absolute',
    zIndex: 1,
    margin: 10,
    right: 0,
    background: 'lightgray',
    borderRadius: 20,
  },
  cardTypes: {
    position: 'relative',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockTypes: {
    position: 'absolute',
    top: '-14px',
  },
  typeChip: {
    backgroundColor: 'unset',
  },
  typeChipLabel: {
    padding: 0,
    '& span': {
      color: 'white',
      fontSize: 12
    }
  },
  types: {
    marginLeft: '16px',
    marginRight: '16px',
    background: theme.palette.secondary.main,
    height: '28px',
    borderRadius: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
    overflow: 'clip',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  severalTypes: {
    marginTop: '0',
    marginBottom: '0',
    flexWrap: 'none',
    flexShrink: '0',
    '& a:not(:first-child)::before': {
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
  textTypes: {
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
  comment: {
    paddingTop: '8px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddinBottom: '20px',
    '& .MuiTypography-root': {
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
    marginLeft: '12px',
    marginRight: '12px',
    marginTop: '0',
    marginBottom: '0',
    '&:first-child': {
      marginLeft: '1px',
    },
    '&:last-child': {
      marginRight: '1px',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '33%',
      flexShrink: '0',
    },
    [theme.breakpoints.down('xs')]: {
      flexBasis: '80%',
      flexShrink: '0',
    },
    display: 'inline-block',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundColor: theme.palette.grey['400']
  },
}));

function ChoosePicture(category, className) {
  const logo = (category==="Agriculture et alimentation") ? AgricultureAlimentation_PictoCdlT
    : (category==="Artisanat, commerce, industrie") ? Artisanat_PictoCdlT
    : (category==="Information, communication et médias") ? Communication_PictoCdlT
    : (category==="Culture et modes de vie") ? CultureModeVie_PictoCdlT
    : (category==="Développement territorial") ? DevTerritorial_PictoCdlT
    : (category==="Ecologie - Environnement") ? Ecologie_PictoCdlT
    : (category==="Énergie") ? Energie_PictoCdlT
    : (category==="Gouvernance et modes d’organisation") ? Gouvernance_PictoCdlT
    : (category==="Habitat & urbanisme") ? Habitat_PictoCdlT
    : (category==="Justice sociale") ? JusticeSociale_PictoCdlT
    : (category==="Mobilités") ? Mobilite_PictoCdlT
    : (category==="Santé et bien-être") ? Sante_Bienetre_PictoCdlT
    : (category==="Sciences et technologies") ? ScienceTech_PictoCdlT
    : null
  
  return (
    logo ? <img src={logo} alt="logo" className={className} title={category}/> : <span>{category}</span>
  );
}

const CardBlock = ({ record, basePath, CardSubHeaderComponent, resource }) => {
  const classes = useStyles();
  return (
    <Card key={record.id} className={classes.cardClass}>
      <div style={{position:'relative'}}>
      {record['pair:hasTopic'] && (
        <CardContent className={classes.cardTopics}>
            <Chip
              style={{background:'none', maxWidth:'180px'}}
              label={
                <ReferenceArrayField source="pair:hasTopic" reference="Theme" record={record}>
                  <SeparatedListField separator=" " link={linkToFilteredList( 'Course', 'pair:hasTopic')}>
                      <FunctionField label="Name" render={record => ChoosePicture(record["pair:label"],classes.categoryLogo)} />
                  </SeparatedListField>
                </ReferenceArrayField>
              }
            />
        </CardContent>
      )}
      <LikeButton record={record} class={classes.likeButton}/> 
      <CardActionArea>
        <CardMedia
          className={classes.media + ' ' + classes.noDecoration}
          image={Array.isArray(record['pair:isDepictedBy']) ? record['pair:isDepictedBy'][0] : record['pair:isDepictedBy']}
          title={record['pair:label']}
          to={basePath + '/' + encodeURIComponent(record.id) + '/show'}
          component={Link}
        />
      </CardActionArea>
      </div>
      {resource==='Place' && record['pair:hasType'] && (
        <CardContent className={classes.cardTypes + ' ' + classes.noDecoration}>
          <div className={classes.types + ' ' + classes.severalTypes + ' ' + classes.blockTypes}>
            <Chip
              classes={{ root: classes.typeChip, label: classes.typeChipLabel }}
              label={
                <ReferenceArrayField
                  source="pair:hasType"
                  reference="Type"
                  record={record}
                >
                  <SeparatedListField 
                    separator=" / " 
                    link={linkToFilteredList('Place', 'pair:hasType')}
                  >
                    <TextField source="pair:label" />
                  </SeparatedListField>
                </ReferenceArrayField>
              }
            />
          </div>
        </CardContent>
      )}
      <CardHeader
        to={basePath + '/' + encodeURIComponent(record.id) + '/show'}
        className={classes.noDecoration + ' ' + classes.headerContainer}
        component={Link}
        title={
          <Typography className={classes.cardTitle} variant="h4" color="primary">
            {record['pair:label']}
          </Typography>
        }
        subheader={CardSubHeaderComponent ? <CardSubHeaderComponent record={record} /> : ''}
      />
      <CardContent
        to={basePath + '/' + encodeURIComponent(record.id) + '/show'}
        className={classes.noDecoration + ' ' + classes.comment}
        component={Link}
      >
        <Typography variant="body2" color="secondary" component="div">
          {record['pair:comment']}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardBlock;

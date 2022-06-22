import React from 'react';
import { makeStyles, Typography, Card, CardContent, CardHeader, CardMedia, CardActionArea, Chip } from '@material-ui/core';
import { ImageField, TextField } from 'react-admin';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Link } from 'react-router-dom';
import { linkToFilteredList } from "../../../utils";
import LikeButton from '../../buttons/LikeButton';

const useStyles = makeStyles((theme) => ({
  sectorCard: {
    position: 'absolute',
    zIndex: 1,
    paddingLeft: 0,
    '& div[class*=MuiChip-root]': {
      background: 'none',
      maxWidth: 180,
      '& span[class*=MuiChip-label]': {
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'row',
        marginTop: -2,
        marginLeft: -2
      }
    }
  },
  sectorImage: {
    width: 40,
    height: 40,
    background: "white",
    borderRadius: 100,
    marginRight: 4,
    '& img': {
      width: '100%',
      margin: 0
    }
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
    '& div[class*=MuiTypography-root]': {
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

const CardBlock = ({ record, basePath, CardSubHeaderComponent, resource }) => {
  const classes = useStyles();
  return (
    <Card key={record.id} className={classes.cardClass}>
      <div style={{position:'relative'}}>
      {record['pair:hasSector'] && (
        <CardContent className={classes.sectorCard}>
            <Chip
              label={
                <ReferenceArrayField source="pair:hasSector" reference="Sector" record={record} perPage={3}>
                  <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasSector')} separator="">
                    <ImageField source="pair:depictedBy" title="pair:label" className={classes.sectorImage} />
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
          image={Array.isArray(record['pair:depictedBy']) ? record['pair:depictedBy'][0] : record['pair:depictedBy']}
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
                    link={linkToFilteredList('LEP', 'pair:hasType')}
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

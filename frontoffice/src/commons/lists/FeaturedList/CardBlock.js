import React from 'react';
import { makeStyles, Typography, Card, CardContent, CardHeader, CardMedia, CardActionArea, Chip } from '@material-ui/core';
import { TextField } from 'react-admin';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  cardTopics: {
    position: 'relative',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockTopics: {
    position: 'absolute',
    top: '-14px',
  },
  topicChip: {
    backgroundColor: 'unset',
  },
  topicChipLabel: {
    padding: 0,
    '& span': {
      color: 'white',
      fontSize: 12
    }
  },
  topics: {
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
  severalTopics: {
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
      flexBasis: '100%',
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

const CardBlock = ({ record, basePath, CardSubHeaderComponent }) => {
  const classes = useStyles();
  return (
    <Card key={record.id} className={classes.cardClass}>
      <CardActionArea>
        <CardMedia
          className={classes.media + ' ' + classes.noDecoration}
          image={Array.isArray(record['pair:isDepictedBy']) ? record['pair:isDepictedBy'][0] : record['pair:isDepictedBy']}
          title={record['pair:label']}
          to={basePath + '/' + encodeURIComponent(record.id) + '/show'}
          component={Link}
        />
      </CardActionArea>
      {record['pair:hasTopic'] && (
        <CardContent className={classes.cardTopics + ' ' + classes.noDecoration}>
          <div className={classes.topics + ' ' + classes.severalTopics + ' ' + classes.blockTopics}>
            <Chip
              classes={{ root: classes.topicChip, label: classes.topicChipLabel }}
              label={
                <ReferenceArrayField
                  source="pair:hasTopic"
                  reference="Theme"
                  record={record}

                >
                  <SeparatedListField separator=" / " link={false}>
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

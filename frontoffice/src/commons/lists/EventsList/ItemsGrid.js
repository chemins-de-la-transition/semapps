import * as React from 'react';
import { makeStyles, Typography, List, ListItem, ListItemText, ListItemAvatar, Box } from '@material-ui/core';
import { DateField, useListContext, TextField, ImageField } from 'react-admin';
import { Link } from 'react-router-dom';
import { ReferenceField } from '@semapps/semantic-data-provider';
import CalendarIcon from '../../../svg/CalendarIcon';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import sortAndFilterOnDate from './SortAndFilterOnDate';

const useStyles = makeStyles((theme) => ({
  eventType: {
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
  },
  eventLabel: {
    fontSize: 30,
    lineHeight: '43px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
  },
  eventPlace: {
    fontSize: 14,
    lineHeight: '20px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
  },
  eventDate: {
    fontSize: 14,
    lineHeight: '20px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
    '& span': {
      fontSize: 14,
      lineHeight: '20px',
      color: theme.palette.primary.contrastText,
      marginBottom: '4px',
      textTransform: 'uppercase',
    },
  },
  divider: {
    position: 'relative',
    '& >a:not(:first-child)': {
      marginTop: '5px',
    },
    '& >a:not(:first-child)::before': {
      marginTop: '2px',
      marginBottom: '2px',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.contrastText,
      height: '1px',
      display: 'block',
      width: '100%',
      content: "' '",
      position: 'absolute',
      top: '-5px',
    },
  },
  imageMaxWidth: {
    width: '110px',
    '& img': {
      width: '110px',
      margin: '0',
    },
  },
  avatarContainer: {
    width: 110,
    height: 110,
    marginRight: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.grey['400'],
    '& img': {
      width: 110,
      height: 110,
      objectFit: 'cover',
      margin: 0
    }
  },
  listItem: {
    paddingLeft: '0',
  },
}));

const ItemsGrid = () => {
  const classes = useStyles();
  let { ids, data } = useListContext();
  ids = sortAndFilterOnDate(ids, data, 4);
  return (
    <List className={classes.list + ' ' + classes.divider}>
      {ids.map((id) => {
        return (
          <ListItem
            className={classes.listItem}
            button={true}
            component={Link}
            to={'/Event/' + encodeURIComponent(id) + '/show'}
            key={id}
          >
            <ListItemAvatar className={classes.avatarContainer}>
              {data[id]['pair:isDepictedBy'] && Array.isArray(data[id]['pair:isDepictedBy']) ? (
                <ImageField source="pair:isDepictedBy.0" record={data[id]} />
              ) : data[id]['pair:isDepictedBy'] && !Array.isArray(data[id]['pair:isDepictedBy']) ? (
                <ImageField source="pair:isDepictedBy" record={data[id]} />
              ): (
                <CalendarIcon fontSize="large" />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  {data[id]['pair:hasType'] && (
                    <ReferenceField source="pair:hasType" reference="Type" record={data[id]} linkType={false}>
                      <TextField
                        source="pair:label"
                        variant="h5"
                        component="div"
                        className={classes.eventType}
                      />
                    </ReferenceField>
                  )}
                  <Typography variant="h4" component="div" className={classes.eventLabel}>
                    {data[id]['pair:label']}
                    &nbsp;
                    <ChevronRightIcon />
                  </Typography>
                  <ReferenceField source="pair:hasLocation" reference="Region" record={data[id]} linkType={false}>
                    <Box className={classes.eventPlace}>
                      <TextField source="pair:label" variant="body1" />
                    </Box>
                  </ReferenceField>
                  <Typography
                    variant="button"
                    component="div"
                    className={classes.eventDate}
                  >
                    <DateField
                      record={data[id]}
                      source="pair:startDate"
                      options={{ year: 'numeric', month: 'long', day: 'numeric' }}
                    />
                  </Typography>
                </>
              }
              disableTypography={true}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ItemsGrid;

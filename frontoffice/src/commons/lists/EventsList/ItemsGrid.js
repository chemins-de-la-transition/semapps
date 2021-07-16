import * as React from 'react';
import { makeStyles, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Box } from '@material-ui/core';
import { DateField, useListContext, ReferenceField, TextField, useRecordContext, ImageField } from 'react-admin';
import { Link } from 'react-router-dom';
import CalendarIcon from '../../../svg/CalendarIcon';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Department from '../../Department';
import sortAndFilterOnDate from './SortAndFilterOnDate';

const useStyles = makeStyles((theme) => ({
  eventType: {
    color: theme.palette.primary.contrastText,
    marginBottom: '8px',
  },
  eventLabel: {
    fontSize: '20px',
    lineHeight: '28px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
    display: 'flex',
    alignItems: 'center',
  },
  eventPlace: {
    fontSize: '16px',
    lineHeight: '20px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
  },
  eventDate: {
    fontSize: '16px',
    lineHeight: '20px',
    color: theme.palette.primary.contrastText,
    marginBottom: '4px',
    ' & span': {
      fontSize: '16px',
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
    width: '110px',
    marginRight: '8px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  noDecoration: {
    textDecoration: 'none',
  },
  listItem: {
    paddingLeft: '0',
  },
}));

const DepartmentField = ({ props }) => {
  const record = useRecordContext(props);
  return <Department postalCode={record['pair:hasPostalAddress']['pair:addressZipCode']} />;
};

const ReferenceImageField = ({ props }) => {
  const classes = useStyles();
  const record = useRecordContext(props);
  return record['pair:isDepictedBy'] ? (
    <ImageField source="pair:isDepictedBy" className={classes.imageMaxWidth} {...props} />
  ) : (
    <Avatar>
      <CalendarIcon />
    </Avatar>
  );
};

const ItemsGrid = ({ nb }) => {
  const classes = useStyles();
  let { ids, data } = useListContext();
  const eventsData = data;
  let sortedIds = sortAndFilterOnDate(ids, eventsData, nb);
  return (
    <List className={classes.list + ' ' + classes.divider}>
      {sortedIds.map((id) => {
        return (
          <ListItem
            className={classes.listItem}
            button={true}
            component={Link}
            to={'/event/' + encodeURIComponent(id) + '/show'}
            key={id}
          >
            <ListItemAvatar className={classes.avatarContainer}>
              {eventsData[id]['pair:isDepictedBy'] ? (
                <ImageField source="pair:isDepictedBy" record={eventsData[id]} />
              ) : eventsData[id]['pair:hostedIn'] ? (
                <ReferenceField source="pair:hostedIn" reference="Place" record={eventsData[id]}>
                  <ReferenceImageField />
                </ReferenceField>
              ) : (
                <CalendarIcon />
              )}
            </ListItemAvatar>
            <ListItemText
              primary={
                eventsData[id]['cdlt:hasEventType'] ? (
                  <ReferenceField source="cdlt:hasEventType" reference="EventType" record={eventsData[id]}>
                    <TextField
                      source="pair:label"
                      variant="h5"
                      className={classes.eventType + ' ' + classes.noDecoration}
                    />
                  </ReferenceField>
                ) : (
                  <Typography variant="h5" className={classes.eventType + ' ' + classes.noDecoration}>
                    Type non défini
                  </Typography>
                )
              }
              secondary={
                <>
                  <Typography variant="h4" className={classes.eventLabel + ' ' + classes.noDecoration}>
                    {eventsData[id]['pair:label']}
                    &nbsp;
                    <ChevronRightIcon />
                  </Typography>
                  <ReferenceField source="pair:hostedIn" reference="Place" record={eventsData[id]}>
                    <Box className={classes.eventPlace}>
                      <TextField source="pair:label" variant="body1" className={classes.noDecoration} />
                      &nbsp;-&nbsp;
                      <DepartmentField />
                    </Box>
                  </ReferenceField>
                  <Typography
                    variant="button"
                    component="div"
                    className={classes.eventDate + ' ' + classes.noDecoration}
                  >
                    <DateField
                      record={eventsData[id]}
                      source="pair:startDate"
                      options={{ year: 'numeric', month: 'long', day: 'numeric' }}
                    />
                  </Typography>
                </>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ItemsGrid;

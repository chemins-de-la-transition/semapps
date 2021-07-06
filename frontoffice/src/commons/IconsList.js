import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Divider, makeStyles } from "@material-ui/core";
import ThemeIcon from "../svg/ThemeIcon";
import CourseIcon from "../svg/CourseIcon";
import CalendarIcon from "../svg/Calendar";
import PlaceIcon from "../svg/PlaceIcon";
import ClockIcon from "../svg/ClockIcon";

const useStyles = makeStyles(theme => ({
  root: props => ({
    display: 'flex',
    flexDirection: props.isVertical ? 'column' : 'row',
    alignItems: props.isVertical ? undefined : 'flex-start',
    padding: 0
  }),
  item: props => ({
    flexGrow: 1,
    padding: props.isVertical ? "8px 0 8px 0" : "0 16px 0 16px",
    '&:first-child': {
      padding: props.isVertical ? "0 0 8px 0" : "0 16px 0 0",
    },
    '&:last-child': {
      padding: props.isVertical ? "8px 0 0 0" : "0 0 0 16px",
    }
  }),
  avatar: {
    minWidth: 40
  },
  icon: {
    fontSize: '1.8rem'
  },
  divider: {
    backgroundColor: 'white'
  },
  secondary: props => ({
    paddingTop: 2,
    fontSize: 14,
    whiteSpace: props.isVertical ? undefined : 'nowrap'
  })
}));

const primaryTypographyProps = {
  variant: 'subtitle2'
};
const secondaryTypographyProps = {
  variant: 'body',
  color: 'white'
};

const IconsList = ({ orientation }) => {
  const isVertical = orientation === 'vertical';
  const classes = useStyles({ isVertical });
  const dividerOrientation = isVertical ? 'horizontal' : 'vertical';

  return (
    <List className={classes.root}>
      <ListItem className={classes.item} p={2}>
        <ListItemAvatar className={classes.avatar}>
          <CourseIcon className={classes.icon} />
        </ListItemAvatar>
        <ListItemText primary="Type de voyage" secondary="Voyage Découverte" primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps={secondaryTypographyProps} classes={{ secondary: classes.secondary }} />
      </ListItem>
      <Divider orientation={dividerOrientation} className={classes.divider} flexItem={!isVertical} />
      <ListItem className={classes.item}>
        <ListItemAvatar className={classes.avatar}>
          <ThemeIcon className={classes.icon} />
        </ListItemAvatar>
        <ListItemText primary="Thématique" secondary="Gouvernance et Mode d'organisation" primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps={secondaryTypographyProps} classes={{ secondary: classes.secondary }} />
      </ListItem>
      <Divider orientation={dividerOrientation} className={classes.divider} flexItem={!isVertical} />
      <ListItem className={classes.item}>
        <ListItemAvatar className={classes.avatar}>
          <PlaceIcon className={classes.icon} />
        </ListItemAvatar>
        <ListItemText primary="Région" secondary="Charente Maritime-17" primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps={secondaryTypographyProps} classes={{ secondary: classes.secondary }} />
      </ListItem>
      <Divider orientation={dividerOrientation} className={classes.divider} flexItem={!isVertical} />
      <ListItem className={classes.item}>
        <ListItemAvatar className={classes.avatar}>
          <CalendarIcon className={classes.icon} />
        </ListItemAvatar>
        <ListItemText primary="Date" secondary="24 octobre 2021" primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps={secondaryTypographyProps} classes={{ secondary: classes.secondary }} />
      </ListItem>
      <Divider orientation={dividerOrientation} className={classes.divider} flexItem={!isVertical} />
      <ListItem className={classes.item}>
        <ListItemAvatar className={classes.avatar}>
          <ClockIcon className={classes.icon} />
        </ListItemAvatar>
        <ListItemText primary="Durée" secondary="1 mois" primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps={secondaryTypographyProps} classes={{ secondary: classes.secondary }} />
      </ListItem>
    </List>
  );
};

IconsList.defaultProps = {
  orientation: 'horizontal'
};

export default IconsList;

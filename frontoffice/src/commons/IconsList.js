import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Divider, makeStyles } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles(theme => ({
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0
  },
  vertical: {
    padding: 0
  },
  item: {
    padding: 8,
    // float: 'left',
    // display: 'block'
  },
  avatar: {
    minWidth: 42
  },
  divider: {
    backgroundColor: 'white'
  },
  secondary: {
    paddingTop: 2,
    fontSize: 14
  }
}));

const primaryTypographyProps = {
  variant: 'subtitle2'
};
const secondaryTypographyProps = {
  variant: 'body',
  color: 'white'
};

const IconsList = ({ orientation }) => {
  const classes = useStyles();
  const isVertical = orientation === 'vertical';
  const dividerOrientation = isVertical ? 'horizontal' : 'vertical';

  return (
    <List className={isVertical ? classes.vertical : classes.horizontal}>
      <ListItem className={classes.item}>
        <ListItemAvatar className={classes.avatar}>
          <RoomIcon fontSize="large" />
        </ListItemAvatar>
        <ListItemText primary="Type de voyage" secondary="Voyage Découverte" primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps={secondaryTypographyProps} classes={{ secondary: classes.secondary }} />
      </ListItem>
      <Divider orientation={dividerOrientation} className={classes.divider} flexItem={!isVertical} />
      <ListItem className={classes.item}>
        <ListItemAvatar className={classes.avatar}>
          <RoomIcon fontSize="large" />
        </ListItemAvatar>
        <ListItemText primary="Type de lieu" secondary="Hébergement / Ferme / Co-working" primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps={secondaryTypographyProps} classes={{ secondary: classes.secondary }} />
      </ListItem>
      <Divider orientation={dividerOrientation} className={classes.divider} flexItem={!isVertical} />
      <ListItem className={classes.item}>
        <ListItemAvatar className={classes.avatar}>
          <RoomIcon fontSize="large" />
        </ListItemAvatar>
        <ListItemText primary="Région" secondary="Charente Maritime-17" primaryTypographyProps={primaryTypographyProps} secondaryTypographyProps={secondaryTypographyProps} classes={{ secondary: classes.secondary }} />
      </ListItem>
    </List>
  );
};

IconsList.defaultProps = {
  orientation: 'horizontal'
};

export default IconsList;

import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Divider, makeStyles } from '@material-ui/core';
import { getFieldLabelTranslationArgs, useShowContext, useTranslate } from 'react-admin';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: props.isVertical ? 'column' : 'row',
    alignItems: props.isVertical ? undefined : 'flex-start',
    padding: 0,
    margin: props.isVertical ? 0 : '0 -16px 0 -16px',
    '&::after': {
      content: `''`,
      flexGrow: 99999
    },
  }),
  item: (props) => ({
    width: 'unset',
    flexGrow: 1,
    padding: props.isVertical ? '8px 0 8px 0' : '0 16px 0 16px',
  }),
  avatar: {
    minWidth: 40,
  },
  icon: {
    fontSize: '1.8rem',
  },
  divider: (props) => ({
    backgroundColor: 'white',
    margin: props.isVertical ? 0 : '4px 0 8px'
  }),
  primary: (props) => ({
    whiteSpace: props.isVertical ? undefined : 'nowrap',
    [theme.breakpoints.down('sm')]: {
      whiteSpace: undefined,
    },
  }),
  secondary: (props) => ({
    paddingTop: 2,
    fontSize: 14,
    color: 'white',
    '& a, & span': {
      color: 'white'
    }
  }),
}));

const IconsList = ({ orientation, children }) => {
  const isVertical = orientation === 'vertical';
  const translate = useTranslate();
  const classes = useStyles({ isVertical });
  const { basePath, loaded, record, resource } = useShowContext();

  if (!loaded || !record) return null;

  const fields = React.Children.toArray(children).filter(
    (field) => field && record && record[field.props.source] && React.isValidElement(field)
  );

  const dividerOrientation = isVertical ? 'horizontal' : 'vertical';

  return (
    <List className={classes.root}>
      {fields.map((field, i) => {
        const label = translate(
          ...getFieldLabelTranslationArgs({
            label: field.props.label,
            resource,
            source: field.props.source,
          })
        );
        const value = React.cloneElement(field, {
          record,
          resource,
          basePath,
        });
        return (
          <React.Fragment key={i}>
            <ListItem className={classes.item} p={2}>
              {field.props.icon && (
                <ListItemAvatar className={classes.avatar}>
                  {React.cloneElement(field.props.icon, {
                    className: classes.icon,
                  })}
                </ListItemAvatar>
              )}
              <ListItemText
                primary={label}
                secondary={value}
                classes={{ primary: classes.primary, secondary: classes.secondary }}
                primaryTypographyProps={{ variant: 'subtitle2' }}
              />
            </ListItem>
            {i < fields.length - 1 && (
              <Divider orientation={dividerOrientation} className={classes.divider} flexItem={!isVertical} />
            )}
          </React.Fragment>
        );
      })}
    </List>
  );
};

IconsList.defaultProps = {
  orientation: 'horizontal',
};

export default IconsList;

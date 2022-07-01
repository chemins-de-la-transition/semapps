import React from 'react';
import { Scrollchor } from 'react-scrollchor';
import { useTranslate, getFieldLabelTranslationArgs, useShowContext } from 'react-admin';
import { makeStyles, AppBar as MuiAppBar, Tabs, Tab, useMediaQuery } from '@material-ui/core';
import FullWidthBox from '../../FullWidthBox';
import LargeContainer from '../../LargeContainer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.grey['300'],
    boxShadow: 'none',
  },
  positionSticky: {
    top: 97,
  },
  tab: {
    minWidth: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
}));

const SubAppBar = ({ fields }) => {
  const classes = useStyles();
  const translate = useTranslate();
  const { resource } = useShowContext();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const appBarHeight = 97;
  const subAppBarHeight = 48;

  return xs ? null : (
    <MuiAppBar position="sticky" classes={{ root: classes.appBar, positionSticky: classes.positionSticky }}>
      <FullWidthBox>
        <LargeContainer>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
          >
            {fields.map((field, i) => {
              if (!field.props.addLabel) return null;
              const label = field.props.title ? field.props.title : translate(
                ...getFieldLabelTranslationArgs({
                  label: field.props.label,
                  resource,
                  source: field.props.source,
                })
              );
              return (
                <Scrollchor
                  key={i}
                  to={field.props.title ? field.props.title : field.props.source}
                  animate={{ offset: -appBarHeight - subAppBarHeight }}
                  className={classes.link}
                >
                  <Tab label={label} className={classes.tab} />
                </Scrollchor>
              );
            })}
          </Tabs>
        </LargeContainer>
      </FullWidthBox>
    </MuiAppBar>
  );
};

export default SubAppBar;

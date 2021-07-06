import React from 'react';
import { Scrollchor } from 'react-scrollchor';
import { useTranslate, getFieldLabelTranslationArgs, useShowContext } from 'react-admin';
import { makeStyles, AppBar as MuiAppBar, Tabs, Tab, useMediaQuery } from '@material-ui/core';
import FullWidthBox from '../../layout/FullWidthBox';
import LargeContainer from '../../layout/LargeContainer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.grey['300'],
    boxShadow: 'none',
  },
  positionSticky: {
    top: 100,
  },
  positionStickyMobile: {
    top: 48,
  },
  tab: {
    minWidth: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const SubAppBar = ({ fields }) => {
  const classes = useStyles();
  const translate = useTranslate();
  const { resource } = useShowContext();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const appBarHeight = xs ? 48 : 100;
  const subAppBarHeight = 48;

  return (
    <MuiAppBar
      position="sticky"
      classes={{ root: classes.appBar, positionSticky: xs ? classes.positionStickyMobile : classes.positionSticky }}
    >
      <FullWidthBox>
        <LargeContainer>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable" /*value={value} onChange={handleChange} aria-label="simple tabs example"*/
          >
            {fields.map((field) => {
              if (!field.props.addLabel) return null;
              const label = translate(
                ...getFieldLabelTranslationArgs({
                  label: field.props.label,
                  resource,
                  source: field.props.source,
                })
              );
              return (
                <Scrollchor
                  to={field.props.source}
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

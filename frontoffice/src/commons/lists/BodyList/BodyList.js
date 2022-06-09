import React from 'react';
import { useTranslate, getFieldLabelTranslationArgs, useShowContext } from 'react-admin';
import { Grid, Hidden, makeStyles } from '@material-ui/core';
import BodyLabel from './BodyLabel';
import FullWidthBox from '../../FullWidthBox';
import LargeContainer from '../../LargeContainer';
import SubAppBar from './SubAppBar';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    '& h6': {
      paddingTop: 8,
      paddingBottom: 8,
      margin: 0
    }
  },
  divider: {
    paddingTop: 5,
    paddingBottom: 20,
    borderTop: '1px lightgrey solid',
  },
}));

const BodyList = ({ children, aside, alert }) => {
  const translate = useTranslate();
  const classes = useStyles();
  const { basePath, loaded, record, resource } = useShowContext();

  if (!loaded) return null;

  const fields = React.Children.toArray(children).filter(
    (field) => field.props.title || (field && record[field.props.source] && React.isValidElement(field))
  );

  return (
    <>
      <SubAppBar fields={fields} />
      <FullWidthBox className={classes.mainContainer}>
        <LargeContainer>
          <Grid container spacing={2}>
            <Grid item md={9} sm={12} xs={12}>
              {alert && React.cloneElement(alert)}
              {fields.map((field) => (
                <div key={field.props.source} id={field.props.source} className={field.props.title ? '' : classes.divider}>
                  {field.props.addLabel && !field.props.title ? (
                    <>
                      <BodyLabel>
                        {translate(
                          ...getFieldLabelTranslationArgs({
                            label: field.props.label,
                            resource,
                            source: field.props.source,
                          })
                        )}
                      </BodyLabel>
                      {React.cloneElement(field, {
                        record,
                        resource,
                        basePath,
                      })}
                    </>
                  ) : typeof field.type === 'string' ? (
                    field
                  ) : (
                    React.cloneElement(field, {
                      record,
                      resource,
                      basePath,
                    })
                  )}
                </div>
              ))}
            </Grid>
            <Hidden smDown>
              <Grid item md={3}>
                {aside}
              </Grid>
            </Hidden>
          </Grid>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default BodyList;

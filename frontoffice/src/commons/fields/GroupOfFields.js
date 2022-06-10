import React from 'react';
import { useTranslate, getFieldLabelTranslationArgs, useShowContext } from 'react-admin';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingTop: 5,
    color: theme.palette.grey40.main,
    '& h6': {
      paddingBottom: 3,
      marginTop: 0
    },
  },
  fieldClass: {
    paddingTop: 5,
    paddingBottom: 20,
  },
  noBorder: {
    marginTop: 8,
    '& h6': {
      border: 'none'
    },
  }
}));

const GroupOfFields = ({ children, source, title, noBorder }) => {
  const translate = useTranslate();
  const classes = useStyles();
  const { basePath, loaded, record, resource } = useShowContext();
  if (!loaded) return null;

  const fields = React.Children.toArray(children).filter(
    (field) => field && record[field.props.source] && React.isValidElement(field)
  );

  return (
    <div className={`${classes.mainContainer} ${noBorder ? classes.noBorder : ''}`}> 
    {(fields.length > 0) && <Typography variant="h6" color="secondary">
        {title}
    </Typography>
    }
    {fields.map((field) => (
    <div key={field.props.source} id={field.props.source} className={classes.fieldClass}>
        {field.props.addLabel ? (
        <>
            <Typography variant="h5" component="div" color="secondary" style={{fontWeight:500}}>
                {translate(
                ...getFieldLabelTranslationArgs({
                    label: field.props.label,
                    resource,
                    source: field.props.source,
                })
                )}
            </Typography>
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
    </div>
  );
};

export default GroupOfFields;

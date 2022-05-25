import React from 'react';
import { useTranslate, getFieldLabelTranslationArgs, useShowContext } from 'react-admin';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  divider: {
    paddingTop: 5,
    paddingBottom: 20,
  },
}));

const GroupOfFields = ({ children, source, title }) => {
  const translate = useTranslate();
  const classes = useStyles();
  const { basePath, loaded, record, resource } = useShowContext();
  if (!loaded) return null;

  const fields = React.Children.toArray(children).filter(
    (field) => field && record[field.props.source] && React.isValidElement(field)
  );

  return (
    <>
    <Typography variant="h6" color="secondary" style={{marginBottom:30}}>
        {title}
    </Typography>
    {fields.map((field) => (
    <div key={field.props.source} id={field.props.source} className={classes.divider}>
        {field.props.addLabel ? (
        <>
            <Typography variant="h5" color="secondary" style={{fontWeight:500}}>
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
    </>
  );
};

export default GroupOfFields;

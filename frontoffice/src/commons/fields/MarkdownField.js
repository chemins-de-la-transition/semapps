import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { MarkdownField as SemAppsMarkdownField } from '@semapps/markdown-components';
import BodyLabel from "../lists/BodyList/BodyLabel";

const useStyles = makeStyles(theme => ({
  p: {
    '&:first-of-type': {
      marginTop: 10
    }
  },
  h2: {
    marginTop: 15,
    marginBottom: 7
  }
}));

const MarkdownField = (props) => {
  const classes = useStyles();
  return (
    <SemAppsMarkdownField
      overrides={{
        p: props => <Typography variant="body2" color="secondary" {...props} className={classes.p} />,
        h1: BodyLabel,
        h2: props => <Typography variant="subtitle1" color="primary"  paragraph {...props} className={classes.h2} />,
        li: props => <li><Typography variant="body2" color="secondary" {...props} className={classes.p} /></li>,
      }}
      {...props}
    />
  );
}

MarkdownField.defaultProps = {
  addLabel: true
};

export default MarkdownField;
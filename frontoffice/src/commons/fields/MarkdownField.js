import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { MarkdownField as SemAppsMarkdownField } from '@semapps/markdown-components';

const useStyles = makeStyles((theme) => ({
  p: {
    // Make visible all return lines
    // See https://github.com/remarkjs/react-markdown/issues/273#issuecomment-683754992
    whiteSpace: 'pre-wrap',
    '&:first-of-type': {
      marginTop: 20,
    },
    marginBottom: 10
  },
  li: {
    marginBottom: 10
  },
  h: {
    marginTop: 15,
    marginBottom: 5,
  },
}));

const MarkdownField = (props) => {
  const classes = useStyles();
  return (
    <SemAppsMarkdownField
      overrides={{
        a: { props: { target: '_blank', rel: 'nofollow noopener' }},
        p: (props) => <Typography variant="body2" color="secondary" {...props} className={classes.p} />,
        code: (props) => <Typography variant="body2" color="secondary" {...props} className={classes.p} />,
        span: (props) => <Typography variant="body2" color="secondary" {...props} className={classes.p} />,
        h1: (props) => <Typography variant="subtitle1" color="primary" paragraph {...props} className={classes.h} />,
        h2: (props) => <Typography variant="subtitle2" color="secondary" paragraph {...props} className={classes.h} />,
        li: (props) => (
          <li>
            <Typography variant="body2" color="secondary" {...props} className={classes.li} />
          </li>
        ),
      }}
      forceBlock
      className={classes.root}
      {...props}
    />
  );
};

MarkdownField.defaultProps = {
  addLabel: true,
};

export default MarkdownField;

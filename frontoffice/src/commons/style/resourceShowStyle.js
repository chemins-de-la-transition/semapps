import { makeStyles } from '@material-ui/core';

const resourceShowStyle = makeStyles((theme) => ({
  mainContainer: {
    /* MarkdownField */
    '& p[class*=makeStyles-p]': {
      margin: 0,
      color: theme.palette.grey40.main
    },
    '& p[class*=makeStyles-li]': {
      color: theme.palette.grey40.main
    }
  },
  singleFieldList: {
    marginBottom: 48 
  },
  textBody: {
    marginTop: 8,
    marginBottom: 16
  },
  urlField: {
    display: 'block',
    marginTop: 8,
    marginBottom: 16,
    '&:hover': {
      color: theme.palette.theme_2.main
    }
  },
  cardsList: {
    color: 'red',
    '& div[class*=makeStyles-description] span': {
      margin: 0,
      color: theme.palette.secondary.main
    }
  },
  chipField: {
    fontWeight: 'bold',
    maxWidth: "-webkit-fill-available",
  }
}));

export default resourceShowStyle;
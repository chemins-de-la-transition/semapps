import React from 'react';
import { useGetList, Loading } from 'react-admin';
import { makeStyles, Typography, Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  errorContainer: {
    '& .MuiAlert-message': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  subTitle: {
    marginTop: -5
  },
  partnersList: {
    listStyle: 'none',
    padding: 0,
    marginTop: 20,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& li': {
      '& a': {
        '& img': {
          maxHeight: 120,
          padding: 20
        },
        '&[href]:hover': {
          opacity: .8
        }
      }
    }
  }
}));

const Partners = () => {
  const { data, ids, loading, error } = useGetList(
    'Organization',
    { page: 1, perPage: 99 },
    null,
    { 'pair:partnerOf': process.env.REACT_APP_MIDDLEWARE_URL + 'organizations/les-chemins-de-la-transition' }
  );

  const classes = useStyles();
  return (
    <FullWidthBox className={classes.mainBox}>
      <LargeContainer className={classes.container}>
        { loading &&
          <Loading />
        }
        { ! loading && error &&
          <Alert severity="error" className={classes.errorContainer}>Un problème est survenu</Alert>
        }
        { ! loading && ! error &&
          <Box>
            <Typography variant="h2">Avec le soutien de</Typography>
            <Typography variant="h3" component="div" className={classes.subTitle}>nos partenaires</Typography>
            <ul className={classes.partnersList}>
              {ids.map(id => {
                if ( data[id] && data[id]['pair:label'] && data[id]['pair:depictedBy'] ) {
                  const label = data[id]['pair:label'];
                  const imgSrc = data[id]['pair:depictedBy'];
                  const homePage = data[id]['pair:homePage'];
                  return (
                    <li key={id}>
                      <a href={homePage} target="_blank" rel="noopener noreferrer">
                        <img src={imgSrc} alt={label}/>
                      </a>
                    </li>
                  )
                } else {
                  return null;
                }
              })}
            </ul>
          </Box>
        }
      </LargeContainer>
    </FullWidthBox>
  );
};

export default Partners;



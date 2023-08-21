import React from 'react';
import { useGetList } from 'react-admin';
import { makeStyles, Typography, Box, LinearProgress } from '@material-ui/core';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import genEurope from '../../icons/gen-europe.png';
import ecolise from '../../icons/ecolise.png';
import loes from '../../icons/loes.png';
import iscte from '../../icons/iscte.png';
import genInternational from '../../icons/genInternational.png';
import { useTranslate } from 'react-admin';

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
    marginTop: 5
  },
  logo: {
    height: 100,
    padding: 20,
  },
  partnersList: {
    listStyle: 'none',
    padding: 0,
    marginTop: 30,
    marginBottom: 40,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '& li': {
      '& a': {
        '& img': {
          maxHeight: 80,
          padding: 20
        },
        '&[href]:hover': {
          opacity: .8
        }
      }
    }
  }
}));

// TODO: put this in the semantic data ?
const partnersWeight = {
  'Assemblée Virtuelle': 3,
  'MES Occitanie': 2
};

const Partners = () => {
  const translate = useTranslate();
  const { data, ids, loading, error } = useGetList(
    'Organization',
    { page: 1, perPage: 99 },
    null,
    { 'pair:hasStatus':process.env.REACT_APP_MIDDLEWARE_URL + 'status/partenaire'}
  );

  // Reorder partners by weight
  ids.sort((a, b) => (partnersWeight[data[b]?.['pair:label']] || 0) - (partnersWeight[data[a]?.['pair:label']] || 0));

  const classes = useStyles();
  return (
    <FullWidthBox className={classes.mainBox}>
      <LargeContainer className={classes.container}>
        <Box>
          <Typography variant="h2">{translate('app.message.partners.withTheSupport')}</Typography>
          <Typography variant="h3" component="div" className={classes.subTitle}>{translate('app.message.partners.financialPartners')}</Typography>
          <ul className={classes.partnersList}>
            <a href={'https://gen-europe.org/'} target="_blank" rel="noopener noreferrer">
              <img className={classes.logo} src={genEurope} alt={"logo gen-europe"}/>
            </a>
            <a href={'https://www.ecolise.eu/about-ecolise/'} target="_blank" rel="noopener noreferrer">
              <img className={classes.logo} src={ecolise} alt={"logo ECOLISE"}/>
            </a>
            <a href={'https://okosamfund.dk/'} target="_blank" rel="noopener noreferrer">
              <img className={classes.logo} src={loes} alt={"logo loes"}/>
            </a>
            <a href={'https://www.iscte-iul.pt/'} target="_blank" rel="noopener noreferrer">
              <img className={classes.logo} src={iscte} alt={"iscte"}/>
            </a>
            <a href={'https://ecovillage.org/'} target="_blank" rel="noopener noreferrer">
              <img className={classes.logo} src={genInternational} alt={"genInternational"}/>
            </a>
          </ul>
        </Box>
        {loading && <LinearProgress />}
        {!loading && !error &&
          <Box>
            <Typography variant="h3" component="div" className={classes.subTitle}>{translate('app.message.partners.businessPartners')}</Typography>
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



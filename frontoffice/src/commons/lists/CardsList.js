import * as React from 'react';
import { useListContext, Loading, linkToRecord, Link } from 'react-admin';
import { Box, Card, CardMedia, CardContent, makeStyles } from '@material-ui/core';
import LikeButton from "../buttons/LikeButton";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    position:'relative',
  },
  likeButtonContainer: {
    position:'absolute',
    top: '2rem',
    right: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      right: '2rem'
    },
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  loading: {
    height: '50vh',
  },
  details: {
    display: 'flex',
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  image: {
    width: 180,
    minWidth: 180,
    minHeight: 145,
    backgroundColor: theme.palette.grey['300'],
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  content: {
    // flex: '1 0 auto',
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
}));

const CardsList = ({ CardComponent, link, hasLike, external }) => {
  const classes = useStyles();
  const { ids, data, basePath, loading } = useListContext();
  return loading ? (
    <Loading loadingPrimary="ra.page.loading" loadingSecondary="ra.message.loading" className={classes.loading} />
  ) : (
    ids.map((id) => {
      if( !data[id] ) return null;
      const image = data[id]?.['pair:isDepictedBy'];
      const card =
        <Card className={classes.details}>
          {data[id]?.['pair:isDepictedBy'] && (
            <CardMedia className={classes.image} image={Array.isArray(image) ? image[0] : image} />
          )}
          <CardContent className={classes.content}>
            <CardComponent record={data[id]} basePath={basePath} />
          </CardContent>
        </Card>;

      return (
        <Box key={id} className={classes.mainContainer}>
          {hasLike &&
            <Box className={classes.likeButtonContainer}>
              <LikeButton record={data[id]} />
            </Box>
          }
          {external ?
            <a href={typeof link === 'function' ? link(data[id]) : linkToRecord(basePath, id, link)} target="_blank" rel="noopener noreferrer" className={classes.linkContainer}>
              {card}
            </a>
            :
            <Link to={typeof link === 'function' ? link(data[id]) : linkToRecord(basePath, id, link)} className={classes.linkContainer}>
              {card}
            </Link>
          }
        </Box>
      )
    })
  );
};

CardsList.defaultProps = {
  link: 'show',
  hasLike: false,
  external: false
};

export default CardsList;

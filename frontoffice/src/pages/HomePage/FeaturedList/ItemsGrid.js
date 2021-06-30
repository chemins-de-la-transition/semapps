import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useListContext } from 'react-admin';
import CardBlock from './CardBlock';

const useStyles = makeStyles((theme) =>({ 
  cardContainer: {
    margin: '0' ,
    paddingTop: '32px',
    marginBottom: '60px',
    display: 'flex',
    position:'relative',
  },
}));


const ItemsGrid = ({nb}) => {
  const classes = useStyles();
  const { ids, data , basePath } = useListContext();
  // shuffle ids
  let shuffledIds = ids;
  shuffledIds.sort(() => Math.random() - 0.5);
  shuffledIds.sort(() => Math.random() - 0.5);
  // keep only nb
  shuffledIds = shuffledIds.slice(0,nb);
  return (
    <div className={classes.cardContainer}>
    {shuffledIds.map(id =>
        <CardBlock
          id={id}
          key={id}
          data={data}
          basePath={basePath}
          ></CardBlock>
    )}
    </div>
  );
};

export default ItemsGrid;

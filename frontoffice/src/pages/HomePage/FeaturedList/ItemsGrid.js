import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useListContext } from 'react-admin';
import CardBlock from './CardBlock';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: '0',
    paddingTop: '32px',
    marginBottom: '60px',
    display: 'flex',
    position: 'relative',
  },
}));

const ItemsGrid = ({ CardSubHeaderComponent }) => {
  const classes = useStyles();
  const { ids, data, basePath } = useListContext();
  return (
    <div className={classes.cardContainer}>
      {ids.map((id) => (
        <CardBlock
          key={id}
          record={data[id]}
          basePath={basePath}
          CardSubHeaderComponent={CardSubHeaderComponent}
        />
      ))}
    </div>
  );
};

export default ItemsGrid;

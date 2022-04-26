import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import { useListContext } from 'react-admin';
import CardBlock from './CardBlock';
import { sortBySimilarity } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: '0',
    paddingTop: '32px',
    marginBottom: '60px',
    display: 'flex',
    position: 'relative',
  },
}));

const ItemsGrid = ({ similarRecord, CardSubHeaderComponent }) => {
  const classes = useStyles();
  const { ids, data, basePath, resource } = useListContext();

  const sortedIds = useMemo(() => {
    if( !similarRecord ) return ids;
    return ids
      .filter(id => data[id] && id !== similarRecord.id )
      .sort(sortBySimilarity(data, similarRecord, 'pair:hasTopic'))
      .sort(sortBySimilarity(data, similarRecord, 'pair:hasLocation'))
      .slice(0, 4);
  }, [ids, data, similarRecord]);

  return (
    <div className={classes.cardContainer}>
      {sortedIds.map((id) => (
        <CardBlock
          key={id}
          record={data[id]}
          basePath={basePath}
          CardSubHeaderComponent={CardSubHeaderComponent}
          resource={resource}
        />
      ))}
    </div>
  );
};

export default ItemsGrid;

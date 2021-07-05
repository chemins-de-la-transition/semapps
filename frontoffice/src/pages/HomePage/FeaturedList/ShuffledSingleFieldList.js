import React from 'react';
import { SingleFieldList, useListContext } from 'react-admin';

const ShuffledSingleFieldList = ({ children, nb, ...props }) => {
  const { ids } = useListContext(props);
  let newIds = ids;
  newIds.sort(() => Math.random() - 0.5);
  newIds.sort(() => Math.random() - 0.5);
  if (nb && nb > 0) {
    newIds.splice(nb);
  }
  return (
    <SingleFieldList ids={newIds} {...props}>
      {children}
    </SingleFieldList>
  );
};

export default ShuffledSingleFieldList;

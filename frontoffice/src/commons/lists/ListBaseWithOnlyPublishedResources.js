import * as React from 'react';
import { ListBase  } from 'react-admin';
import { PUBLISHED_STATUS } from '../../config/constants';

const ListBaseWithOnlyPublishedResources = ({filter, ...props}) => {
  const publicationFilter = {'cdlt:hasPublicationStatus': PUBLISHED_STATUS};
  return (
    <ListBase
      filter = {{ ...filter, ...publicationFilter }}
      {...props}
    />
  );
};

export default ListBaseWithOnlyPublishedResources;

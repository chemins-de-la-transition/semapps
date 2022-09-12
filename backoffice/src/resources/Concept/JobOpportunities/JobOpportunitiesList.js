import React from 'react';
import { SimpleList } from '@semapps/archipelago-layout';
import { ListWithPermissions } from '@semapps/auth-provider';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const JobOpportunitiesList = (props) => (
  <ListWithPermissions {...props}>
    <SimpleList
      primaryText={(record) => record['pair:label']} leftAvatar={() => <LocalOfferIcon />} linkType="edit" 
    />
  </ListWithPermissions>
);

export default JobOpportunitiesList;

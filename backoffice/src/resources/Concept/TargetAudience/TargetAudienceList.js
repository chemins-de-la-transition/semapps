import React from 'react';
import { SimpleList } from '@semapps/archipelago-layout';
import { ListWithPermissions } from '@semapps/auth-provider';
import VisibilityIcon from '@material-ui/icons/Visibility';

const TargetAudienceList = (props) => (
  <ListWithPermissions {...props}>
    <SimpleList
      primaryText={(record) => record['pair:label']} leftAvatar={() => <VisibilityIcon />} linkType="edit" 
    />
  </ListWithPermissions>
);

export default TargetAudienceList;

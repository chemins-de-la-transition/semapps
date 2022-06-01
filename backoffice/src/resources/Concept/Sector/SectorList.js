import React from 'react';
import { SimpleList } from '@semapps/archipelago-layout';
import { ListWithPermissions } from '@semapps/auth-provider';
import StyleIcon from '@material-ui/icons/Style';

import { Avatar } from '@material-ui/core';

const SectorList = (props) => (
  <ListWithPermissions {...props}>
    <SimpleList primaryText={(record) => record['pair:label']} 

leftIcon={(record) => (
              <Avatar src={record['pair:depictedBy']} alt={record['pair:label']}>
                <StyleIcon />
              </Avatar>
            )}
             />
  </ListWithPermissions>
);

export default SectorList;

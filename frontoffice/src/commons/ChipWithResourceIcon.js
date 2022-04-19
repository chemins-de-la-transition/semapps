import React from 'react';
import { ChipField, useResourceDefinition } from 'react-admin';

const ChipWithResourceIcon = ( { source, defaultIcon, ...props} ) => {
  const resourceIcons = {
    'cdlt:Course':  useResourceDefinition({resource: 'Course'}).icon,
    'pair:Event':  useResourceDefinition({resource: 'Event'}).icon,
    'pair:organization':  useResourceDefinition({resource: 'Organization'}).icon,
    'pair:Person':  useResourceDefinition({resource: 'Person'}).icon,
    'pair:Place':  useResourceDefinition({resource: 'Place'}).icon,
  }
  const { record } = props;
  if (record?.type) {
    if (resourceIcons[record.type]) {
      return <ChipField source="pair:label" icon={resourceIcons[record.type].type.render()}/>
    }
  }
  if (defaultIcon) {
    return <ChipField source="pair:label" icon={defaultIcon}/>
  }
  return <ChipField source="pair:label"/>
}

export default ChipWithResourceIcon;
import React from 'react';
import { Show } from 'react-admin';
import { RedirectByType } from '@semapps/archipelago-layout';

const SubjectRedirect = props => (
  <Show {...props}>
    <RedirectByType
      typesMap={{
        Person: 'pair:Person',
        Organization: 'pair:Organization',
        Event: 'pair:Event',
        Session: 'cdlt:Session',
        Path: 'cdlt:Path',
        Skill: 'pair:Skill',
        Place: 'pair:Place'
      }}
    />
  </Show>
);

export default {
  config: {
    show: SubjectRedirect
  },
  dataModel: {
    types: ['pair:Organization', 'pair:Person', 'pair:Event', 'cdlt:Session', 'cdlt:Path', 'pair:Skill', 'pair:Place']
  }
};

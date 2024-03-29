import React from 'react';
import { Show } from 'react-admin';
import RedirectByType from "../common/RedirectByType";

const SubjectRedirect = (props) => (
  <Show {...props}>
    <RedirectByType
      typesMap={{
        Person: 'pair:Person',
        Organization: 'pair:Organization',
        Event: 'pair:Event',
        Course: 'cdlt:Course',
        Path: 'cdlt:Path',
        Skill: 'pair:Skill',
        Place: 'pair:Place',
      }}
    />
  </Show>
);

export default {
  config: {
    show: SubjectRedirect,
  },
  dataModel: {
    types: ['pair:Organization', 'pair:Person', 'pair:Event', 'cdlt:Course', 'cdlt:Path', 'pair:Skill', 'pair:Place'],
  },
};

import React from 'react';
import { Create } from '@semapps/archipelago-layout';
import { LexiconImportForm, fetchESCO } from "@semapps/interop-components";

const SkillCreate = (props) => (
  <Create {...props}>
    <LexiconImportForm
      fetchLexicon={fetchESCO}
      selectData={data => ({
        'pair:label': data.label,
        'http://www.w3.org/ns/prov#wasDerivedFrom': data.uri,
      })}
      redirect="show"
    />
  </Create>
);

export default SkillCreate;

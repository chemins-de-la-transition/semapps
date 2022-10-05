import React from 'react';
import { LexiconImportForm, fetchESCO } from "@semapps/interop-components";
import Create from "../../../layout/create/Create";

const SkillCreate = (props) => (
  <Create {...props}>
    <LexiconImportForm
      fetchLexicon={fetchESCO('https://esco.commondata.one')}
      selectData={data => ({
        'pair:label': data.label,
        'http://www.w3.org/ns/prov#wasDerivedFrom': data.uri,
      })}
      redirect="show"
    />
  </Create>
);

export default SkillCreate;

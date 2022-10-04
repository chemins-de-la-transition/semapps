import React from 'react';
import { LexiconImportForm, fetchWikidata } from "@semapps/interop-components";
import Create from "../../../layout/create/Create";

const TopicCreate = (props) => (
  <Create {...props}>
    <LexiconImportForm
      fetchLexicon={fetchWikidata()}
      selectData={data => ({
        'pair:label': data.label,
        'pair:comment': data.summary,
        'http://www.w3.org/ns/prov#wasDerivedFrom': data.uri,
      })}
      redirect="show"
    />
  </Create>
);

export default TopicCreate;

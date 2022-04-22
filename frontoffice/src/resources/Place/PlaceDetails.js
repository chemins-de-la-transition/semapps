import React from 'react';
import {TextField } from 'react-admin';
import {  ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../utils";
import IconsList from '../../commons/lists/IconsList';
import ThemeIcon from '../../svg/ThemeIcon';
import CourseIcon from '../../svg/CourseIcon';
import PlaceIcon from '../../svg/PlaceIcon';
import TypeIcon from '../../svg/TypeIcon';
import ActorIcon from '../../svg/ActorIcon';

const PlaceDetails = (props) => (
  <IconsList {...props}>
    <ReferenceArrayField source="cdlt:hasCourseType" reference="Type" icon={<CourseIcon />}>
      <SeparatedListField link={linkToFilteredList('Place', 'cdlt:hasCourseType')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField source="pair:hasType" reference="Type" icon={<TypeIcon />}>
      <SeparatedListField link={linkToFilteredList('Place', 'pair:hasType')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Theme" source="pair:hasTopic" icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList('Place', 'pair:hasTopic')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceField label="Région" reference="Region" source="pair:hasLocation" icon={<PlaceIcon />} link={linkToFilteredList('Place', 'pair:hasLocation')}>
      <TextField source="pair:label" />
    </ReferenceField>
    <ReferenceField label="Hôte" reference="Person" source="cdlt:proposedBy" icon={<ActorIcon/>} link="show" >
      <TextField source="pair:label" />
    </ReferenceField>
  </IconsList>
);

export default PlaceDetails;

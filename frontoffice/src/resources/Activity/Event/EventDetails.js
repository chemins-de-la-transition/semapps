import React from 'react';
import { DateField, TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../../utils";
import IconsList from '../../../commons/lists/IconsList';
import ThemeIcon from '../../../svg/ThemeIcon';
import CourseIcon from '../../../svg/CourseIcon';
import CalendarIcon from '../../../svg/CalendarIcon';
import PlaceIcon from '../../../svg/PlaceIcon';
import DurationField from '../../../commons/fields/DurationField';
import DurationIcon from '../../../svg/DurationIcon';
import ActorIcon from '../../../svg/ActorIcon';
import TypeIcon from '../../../svg/TypeIcon' ;

const EventDetails = (props) => (
  <IconsList {...props}>
    <ReferenceArrayField reference="Path" source="cdlt:eventOn" icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:eventOn')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Theme" source="pair:hasSector" perPage={2} icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList( 'LEP', 'pair:hasSector')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Finality" source="pair:hasFinality" icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasFinality')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceField label="Région" reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')} separator=" / ">
      <TextField source="pair:label" />
    </ReferenceField>
    <ReferenceArrayField source="cdlt:hasCourseType" reference="Type" icon={<CourseIcon />}>
      <SeparatedListField link={linkToFilteredList( 'LEP', 'cdlt:hasCourseType')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField source="pair:hasType" reference="Type" icon={<TypeIcon />}>
      <SeparatedListField link={linkToFilteredList( 'Event', 'pair:hasType')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <DateField
      showTime
      label="Date"
      source="pair:startDate"
      options={{ year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }}
      icon={<CalendarIcon />}
    />
    <DurationField
      label="Durée"
      source="pair:startDate"
      startDate="pair:startDate"
      endDate="pair:endDate"
      icon={<DurationIcon />}
    />
    <ReferenceArrayField reference="Organization" source="cdlt:organizedBy" perPage={2} icon={<ActorIcon/>} link="show" sort={{ field: 'type', order: 'DESC' }} >
      <SeparatedListField link="show" separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Person" source="cdlt:hasReferent" perPage={2} icon={<ActorIcon/>} link="show" sort={{ field: 'type', order: 'DESC' }} >
      <SeparatedListField link="show" separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField source="pair:hostedIn" reference="Place" perPage={1} icon={<PlaceIcon />}>
      <SeparatedListField link={linkToFilteredList( 'Place', 'pair:hostedIn')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>    
    <TextField source="cdlt:referenceNumber" />
  </IconsList>
);

export default EventDetails;

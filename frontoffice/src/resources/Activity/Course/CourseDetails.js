import React from 'react';
import { TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../../utils";
import IconsList from '../../../commons/lists/IconsList';
import ThemeIcon from '../../../svg/ThemeIcon';
import CourseIcon from '../../../svg/CourseIcon';
import CalendarIcon from '../../../svg/CalendarIcon';
import PlaceIcon from '../../../svg/PlaceIcon';
import PriceIcon from '../../../svg/PriceIcon';
import DurationField from '../../../commons/fields/DurationField';
import DateToDateField from '../../../commons/fields/DateToDateField';
import DurationIcon from '../../../svg/DurationIcon';
import ActorIcon from '../../../svg/ActorIcon';

const CourseDetails = (props) => (
  <IconsList {...props}>
    <ReferenceArrayField source="cdlt:hasCourseType" reference="Type" icon={<CourseIcon />}>
      <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:hasCourseType')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Path" source="cdlt:courseOn" icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:courseOn')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Theme" source="pair:hasSector" perPage={2} icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList( 'LEP', 'pair:hasSector')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Theme" source="pair:hasTopic" icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasTopic')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Finality" source="pair:hasFinality" icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasFinality')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceField label="Région" reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')}>
      <TextField source="pair:label" />
    </ReferenceField>
    <DateToDateField
      label="Date"
      source="pair:startDate"
      startDate="pair:startDate"
      endDate="pair:endDate"
      variant="body2"
      icon={<CalendarIcon />}
    />
    <DurationField
      label="Durée"
      source="pair:startDate"
      startDate="pair:startDate"
      endDate="pair:endDate"
      variant="body2"
      icon={<DurationIcon />}
    />
    <TextField source="cdlt:priceRange" icon={<PriceIcon />} />
    <ReferenceArrayField label="Organisateur(trice)" reference="Actor" source="cdlt:organizedBy" icon={<ActorIcon/>} link="show" >
      <SeparatedListField link="show" separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField label="Intervenant(e)" reference="Person" source="cdlt:hasMentor" icon={<ActorIcon/>} link="show" >
      <SeparatedListField link="show" separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <TextField source="cdlt:referenceNumber" />
  </IconsList>
);

export default CourseDetails;

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

const EventDetails = (props) => (
  <IconsList {...props}>
    <ReferenceArrayField source="cdlt:hasCourseType" reference="Type" icon={<CourseIcon />}>
      <SeparatedListField link={linkToFilteredList( 'Event', 'cdlt:hasCourseType')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Theme" source="pair:hasTopic" icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList( 'Event', 'pair:hasTopic')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceField label="Région" reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList( 'Event', 'cdlt:hasRegion')} separator=" / ">
      <TextField source="pair:label" />
    </ReferenceField>
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
  </IconsList>
);

export default EventDetails;

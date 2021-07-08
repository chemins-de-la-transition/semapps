import React from 'react';
import { DateField, TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import IconsList from '../../../../commons/IconsList';
import ThemeIcon from '../../../../svg/ThemeIcon';
import CourseIcon from '../../../../svg/CourseIcon';
import CalendarIcon from '../../../../svg/CalendarIcon';
import PlaceIcon from '../../../../svg/PlaceIcon';
import DurationField from '../../../../commons/DurationField';
import DurationIcon from '../../../../svg/DurationIcon';

const EventDetails = (props) => (
  <IconsList {...props}>
    <ReferenceArrayField source="cdlt:hasCourseType" reference="Type" icon={<CourseIcon />}>
      <SeparatedListField linkType={false}>
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Theme" source="pair:hasTopic" icon={<ThemeIcon />}>
      <SeparatedListField linkType={false}>
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceField label="Région" reference="Region" source="pair:hasLocation" icon={<PlaceIcon />} link={false}>
      <TextField source="pair:label" />
    </ReferenceField>
    <DateField
      label="Date"
      source="pair:startDate"
      options={{ year: 'numeric', month: 'long', day: 'numeric' }}
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

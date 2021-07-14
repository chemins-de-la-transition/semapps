import React from 'react';
import { TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import IconsList from '../../commons/lists/IconsList';
import ThemeIcon from '../../svg/ThemeIcon';
import CourseIcon from '../../svg/CourseIcon';
import PlaceIcon from '../../svg/PlaceIcon';
import TypeIcon from '../../svg/TypeIcon';

const PlaceDetails = (props) => (
  <IconsList {...props}>
    <ReferenceArrayField source="cdlt:hasCourseType" reference="Type" icon={<CourseIcon />}>
      <SeparatedListField linkType={false}>
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField source="pair:hasType" reference="Type" icon={<TypeIcon />}>
      <SeparatedListField linkType={false} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Theme" source="pair:hasTopic" icon={<ThemeIcon />}>
      <SeparatedListField linkType={false} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceField label="Région" reference="Region" source="pair:hasLocation" icon={<PlaceIcon />} link={false}>
      <TextField source="pair:label" />
    </ReferenceField>
  </IconsList>
);

export default PlaceDetails;

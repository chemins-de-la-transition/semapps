import React from 'react';
import { TextField } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../../utils";
import IconsList from '../../../commons/lists/IconsList';
import ThemeIcon from '../../../svg/ThemeIcon';
import PlaceIcon from '../../../svg/PlaceIcon';
import ActorIcon from '../../../svg/ActorIcon';

const PathDetails = (props) => (
  <IconsList {...props}>
    <ReferenceArrayField reference="Theme" source="pair:hasTopic" perPage={2} icon={<ThemeIcon />}>
      <SeparatedListField link={linkToFilteredList( 'LEP', 'pair:hasTopic')} separator=" / ">
        <TextField source="pair:label" />
      </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Person" source="cdlt:proposedBy" icon={<ActorIcon />}>
        <SeparatedListField link="show" separator=" / ">
            <TextField source="pair:label" />
        </SeparatedListField>
    </ReferenceArrayField>
    <ReferenceArrayField reference="Organization" source="cdlt:supportedBy" icon={<PlaceIcon />}>
        <SeparatedListField link="show" separator=" / ">
            <TextField source="pair:label" />
        </SeparatedListField>
    </ReferenceArrayField>
  </IconsList>
);

export default PathDetails;

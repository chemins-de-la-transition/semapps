import React, { useMemo } from 'react';
import { FormTab, SimpleForm, ImageInput, TabbedForm, TextInput, useGetIdentity } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/semantic-data-provider';
import { 
  ActivitiesInput,
  FinalitiesInput,
  OrganizationsInput,
  PairLocationInput,
  PathsInput,
  PlacesInput,
  RegionsInput,
  SectorsInput,
  SkillsInput,
  ThemesInput,
  TypesInput,
  UsersInput
} from '../../../../pair';

const PersonForm = ({ ...rest }) => {
  const { identity } = useGetIdentity();
  const TRAVELER_TYPE_URL = process.env.REACT_APP_MIDDLEWARE_URL + 'types/traveler';
  const isTraveler = useMemo( () => {
    return ! identity?.webIdData?.['pair:hasType'] || identity.webIdData.['pair:hasType'] === TRAVELER_TYPE_URL
  }, [identity, TRAVELER_TYPE_URL]);

  return (
    <SimpleForm {...rest}>
      <TabbedForm redirect="show">
        <FormTab label="Principal">
          <TextInput source="pair:firstName" fullWidth />
          <TextInput source="pair:lastName" fullWidth />
          <TextInput source="pair:alternativeLabel" fullWidth />
          <TextInput source="pair:comment" fullWidth />
          <MarkdownInput source="pair:description" fullWidth />
          <ImageInput source="pair:depictedBy" accept="image/*">
            <ImageField source="src" />
          </ImageInput>
          <TextInput source="pair:phone" fullWidth />
          {/*
          <TypeInput source="pair:hasType" filter={{ a: 'pair:PersonType' }} />
          <StatusInput source="pair:hasStatus" filter={{ a: 'pair:AgentStatus' }} />
          */}
          <PairLocationInput source="pair:hasLocation" fullWidth />
          <MarkdownInput source="cdlt:asAHostIntentions" fullWidth />
          <MarkdownInput source="cdlt:asAMentorIntentions" fullWidth />
          <MarkdownInput source="cdlt:asAnOrganiserIntentions" fullWidth />
          <MarkdownInput source="cdlt:asATravelerIntentions" fullWidth />
        </FormTab>
        <FormTab label="Relations">
          { ! isTraveler && 
            <>
              <OrganizationsInput source="pair:affiliatedBy" />
              <PlacesInput source="cdlt:proposes" />
              <ActivitiesInput source="cdlt:mentorOn" />
              <ActivitiesInput source="cdlt:organizes" />
            </>
          }
          <SectorsInput source="pair:hasSector" />
          <ThemesInput source="pair:hasTopic" />
          <SkillsInput source="pair:offers" />
          <FinalitiesInput source="pair:hasFinality" />
        </FormTab>
      </TabbedForm>
    </SimpleForm>
  );
};

export default PersonForm;
import React, { useMemo } from 'react';
import { FormTab, ImageInput, TabbedForm, TextInput, useGetIdentity, useTranslate } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import { 
  FinalitiesInput,
  PersonsInput,
  OrganizationsInput,
  PairLocationInput,
  SectorsInput,
  SkillsInput,
  TopicsInput
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';

const PersonForm = ({ ...rest }) => {
  const { identity } = useGetIdentity();
  const TRAVELER_TYPE_URL = process.env.REACT_APP_MIDDLEWARE_URL + 'types/traveler';
  const isTraveler = useMemo( () => {
    return ! identity?.webIdData?.['pair:hasType'] || identity.webIdData?.['pair:hasType'] === TRAVELER_TYPE_URL
  }, [identity, TRAVELER_TYPE_URL]);
  const translate = useTranslate();


  return (
    <TabbedForm {...rest} redirect="show">
    <FormTab label={translate('app.tab.person.about')}>
      <TextInput source="pair:firstName" label={translate('app.input.person.firstName')} fullWidth />
      <TextInput source="pair:lastName" label={translate('app.input.person.lastName')} fullWidth />
      <TextInput source="pair:alternativeLabel" label={translate('app.input.person.alternativeLabel')} fullWidth />
      <TextInput source="pair:comment" label={translate('app.input.person.comment')} fullWidth />
      <TextInput source="pair:homePage" label={translate('app.input.person.homePage')} fullWidth />
      <MarkdownInput source="pair:description" label={translate('app.input.person.description')} fullWidth />
      <MarkdownInput source="cdlt:intentions" label={translate('app.input.person.intentions')} fullWidth />
      <ImageInput source="pair:depictedBy" label={translate('app.input.person.depictedBy')} accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <SectorsInput source="pair:hasSector" label={translate('app.input.person.hasSector')} />
      <TopicsInput source="pair:hasTopic" label={translate('app.input.person.hasTopic')} />
      <SkillsInput source="pair:offers" label={translate('app.input.person.offers')} />
      <SkillsInput source="pair:aims" label={translate('app.input.person.aims')} fullWidth />
      <FinalitiesInput source="pair:hasFinality" label={translate('app.input.person.hasFinality')} />
      <TextInput source="pair:phone" label={translate('app.input.person.phone')} fullWidth helperText={translate('app.helper.person.phone')} />
      <PairLocationInput source="pair:hasLocation" label={translate('app.input.person.hasLocation')} fullWidth />
      <ReminderBeforeRecording />
    </FormTab>
    <FormTab label={translate('app.tab.person.affiliates')}>
      { ! isTraveler && 
        <>
          <OrganizationsInput source="pair:affiliatedBy" label={translate('app.input.person.affiliatedBy')} />
          <PersonsInput source="pair:inspiredBy" label={translate('app.input.person.inspiredBy')} />
        </>
      }
    </FormTab>
    </TabbedForm>
  );
};

export default PersonForm;

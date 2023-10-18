import React from 'react';
import { FormTab, ImageInput, NumberInput, TabbedForm, TextInput, email, useTranslate } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { MultiLinesInput } from '@semapps/input-components';
import { ImageField } from '@semapps/field-components';
import { 
  FinalitiesInput,
  OrganizationsInput,
  PairLocationInput,
  PathsInput,
  PlacesInput,
  SectorsInput,
  SkillsInput,
  TopicsInput,
  TypesInput,
  UsersInput,
  PublicationStatusInput
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';

const OrganizationForm = ({ record, ...rest }) => {
  const translate = useTranslate();
  return (
    <TabbedForm {...rest} redirect="show">
      <FormTab label={translate('app.tab.organization.about')}>
        <TextInput source="pair:label" label={translate('app.input.organization.label')} fullWidth />
        <TypesInput source="pair:hasType" label={translate('app.input.organization.hasType')} filter={{ a: 'pair:OrganizationType' }} />
        <TextInput source="pair:comment" label={translate('app.input.organization.comment')} fullWidth />
        <MarkdownInput source="pair:description" label={translate('app.input.organization.description')} fullWidth />
        <ImageInput source="pair:depictedBy" label={translate('app.input.organization.depictedBy')} accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <SectorsInput source="pair:hasSector" label={translate('app.input.organization.hasSector')}  />
        <TopicsInput source="pair:hasTopic" label={translate('app.input.organization.hasTopic')} />
        <FinalitiesInput source="pair:hasFinality" label={translate('app.input.organization.hasFinality')} />
        <MarkdownInput source="cdlt:intentions" label={translate('app.input.organization.intentions')} fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" label={translate('app.input.organization.practicalConditions')} fullWidth />
        <NumberInput source="cdlt:maximumCapacity" label={translate('app.input.organization.maximumCapacity')} fullWidth />
        <TypesInput source="cdlt:hasCourseType" label={translate('app.input.organization.hasCourseType')} filter={{ a: 'cdlt:CourseType' }} />
        <SkillsInput source="pair:produces" label={translate('app.input.organization.produces')} fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label={translate('app.tab.organization.links')}>
        <OrganizationsInput source="pair:partnerOf" label={translate('app.input.organization.partnerOf')} />
        <OrganizationsInput source="pair:inspiredBy" label={translate('app.input.organization.inspiredBy')} />
        <UsersInput source="pair:affiliates" label={translate('app.input.organization.affiliates')} />
        <PathsInput source="cdlt:supports" label={translate('app.input.organization.supports')} />
        <PlacesInput source="cdlt:organizationHostedIn" label={translate('app.input.organization.organizationHostedIn')} fullWidth />
      </FormTab>
      <FormTab label={translate('app.tab.organization.contact')}>
        <MultiLinesInput source="pair:homePage" fullWidth />
        <TextInput source="pair:e-mail" fullWidth helperText={translate('app.helper.organization.email')} validate={[email()]} />
        <TextInput source="pair:phone" fullWidth helperText={translate('app.helper.organization.phone')} />
        <TextInput source="cdlt:publicPhone" fullWidth helperText={translate('app.helper.organization.publicPhone')} />
      </FormTab>
      <FormTab label={translate('app.tab.organization.visibility')}>
        <PublicationStatusInput source="cdlt:hasPublicationStatus" />
      </FormTab>
    </TabbedForm>
  );
};

export default OrganizationForm;

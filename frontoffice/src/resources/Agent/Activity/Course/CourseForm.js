import React from 'react';
import {
  DateInput,
  NumberInput,
  FormTab,
  ImageInput,
  TabbedForm,
  TextInput,
  email,
  required,
  useGetIdentity,
  useTranslate
} from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import {
  ActorsInput,
  EventsInput,
  FinalitiesInput,
  JobOpportunitiesInput,
  PathsInput,
  PersonsInput,
  PublicationStatusInput,
  RegistrationInput,
  SectorsInput,
  SkillsInput,
  TargetAudienceInput,
  TopicsInput,
  TypesInput,
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';
import frLocale from 'date-fns/locale/fr';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  spacer: {
    marginTop: 16,
  },
}));

const CourseForm = ({ mode, record, ...rest }) => {
  const { identity } = useGetIdentity();
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <TabbedForm
      initialValues={mode === 'create' ? { 'cdlt:organizedBy': identity?.id, 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' } : undefined}
      {...rest}
      redirect="show"
    >
      <FormTab label={translate('app.tab.course.about')}>
        <TextInput source="pair:label" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" fullWidth validate={[required()]} />
        <ImageInput source="pair:depictedBy" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <DateInput
          source="pair:startDate"
          options={{
            format: 'dd/MM/yyyy',
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
        />
        <DateInput
          source="pair:endDate"
          options={{
            format: 'dd/MM/yyyy',
          }}
          providerOptions={{
            locale: frLocale,
          }}
          fullWidth
        />
        <MarkdownInput source="pair:description" fullWidth />
        <TypesInput source="cdlt:hasCourseType" filter={{ a: 'cdlt:CourseType' }} />
        <SectorsInput source="pair:hasSector" />
        <TopicsInput source="pair:hasTopic" /> 
        <FinalitiesInput source="pair:hasFinality" />
        <TargetAudienceInput source="cdlt:hasTargetAudience" fullWidth/>
        <ActorsInput source="cdlt:organizedBy" validate={[required()]} />
        <MarkdownInput source="cdlt:organizerDescription" fullWidth />
        <PathsInput source="cdlt:courseOn" />
        <EventsInput source="pair:hasPart" fullWidth helperText={translate('app.helper.courseCreation')} />       
        <Box className={classes.spacer}></Box>
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label={translate('app.tab.course.learningObjectives')}>
        <PersonsInput source="cdlt:hasMentor" />
        <MarkdownInput source="cdlt:mentorDescription" fullWidth />
        <SkillsInput source="cdlt:requiredSkills" />
        <MarkdownInput source="cdlt:prerequisites" fullWidth />
        <SkillsInput source="pair:produces" />
        <MarkdownInput source="cdlt:learningObjectives" fullWidth />
        <JobOpportunitiesInput source="cdlt:hasJobOpportunities" fullWidth />
        {/*<DocumentsType source="pair:documentedBy" />*/}
      </FormTab>
      <FormTab label={translate('app.tab.course.practicalConditions')}>
        <MarkdownInput source="cdlt:practicalConditions" fullWidth />
        <NumberInput source="cdlt:minimumCapacity" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" fullWidth />
        <TextInput source="pair:e-mail" fullWidth helperText={translate('app.helper.nonVisible')} validate={[required(), email()]} />
        <TextInput source="pair:phone" fullWidth helperText={translate('app.helper.nonVisible')} />
        <TextInput source="pair:homePage" fullWidth/>
        <MarkdownInput source="cdlt:economicalConditions" fullWidth />
        <MarkdownInput source="cdlt:financialSupport" fullWidth />
        <RegistrationInput 
          directRegistrationSource="cdlt:directRegistration"
          registrationOptionSource="cdlt:registrationOption"
          jotformLinkSource="cdlt:jotformLink"
          registrationLinkSource="cdlt:registrationLink"          
          fullWidth
        />
      </FormTab>
      <FormTab label={translate('app.tab.visibility')}>
        <PublicationStatusInput source="cdlt:hasPublicationStatus" />
      </FormTab>
    </TabbedForm>
  );
};

export default CourseForm;

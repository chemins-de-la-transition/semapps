import React from 'react';
import { FormTab, NumberInput, TabbedForm, TextInput, ImageInput, email, useTranslate } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import { MultiLinesInput } from "@semapps/input-components";
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
  StatusInput,
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../common/ReminderBeforeRecording';
import OrganizationTitle from './OrganizationTitle';
import Edit from "../../../../layout/edit/Edit";

export const OrganizationEdit = (props) => {
  const translate = useTranslate();
  return (
  <Edit title={<OrganizationTitle />} {...props}>
    <TabbedForm
      redirect="show"
    >
      <FormTab label="A propos de l'organisation">
        <TextInput source="pair:label" label="Quel est le nom de votre organisation ?" fullWidth />
        <TypesInput source="pair:hasType" label="Quel type d'organisation ?" filter={{ a: 'pair:OrganizationType' }} />
        <TextInput source="pair:comment" label="Pourriez-vous le décrire en une phrase" fullWidth />
        <MarkdownInput source="pair:description" label="N'hésitez pas à le décrire plus longuement ici" fullWidth />
        <ImageInput source="pair:depictedBy" label="Mettez un logo !" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <SectorsInput source="pair:hasSector" label="Dans quels secteurs d'activités s'inscrit-elle ?"  />
        <TopicsInput source="pair:hasTopic" label="Quels mots-clés utiliseriez-vous pour la caractériser ?" />
        <FinalitiesInput source="pair:hasFinality" label="Quelles sont les finalités que vous poursuivez" />
        <MarkdownInput source="cdlt:intentions" label="Quelles sont vos intentions en venant sur les chemins de la transition" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" label="Pouvez-us accueillir des voyageurs ? Si oui, dans quelles conditions ?" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" label="Combien de voyageurs au maximum ?" fullWidth />
        <TypesInput source="cdlt:hasCourseType" label="Selon quels modes de voyages pouvez-vous accueillir des voyageurs ?" filter={{ a: 'cdlt:CourseType' }} />
        <SkillsInput source="pair:produces" label="Quelles sont les compétences que vous pouvez offrir" fullWidth />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="En lien avec l'organisation">
        <OrganizationsInput source="pair:partnerOf" label="Avez-vous des partenaires sur les Chemins de la Transition ?" />
        <OrganizationsInput source="pair:inspiredBy" label="Des organisations qui vous inspirent ?" />
        <UsersInput source="pair:affiliates" label="Des membres de votre organisation sur les Chemins de la Transition ?" />
        <PathsInput source="cdlt:supports" label="Vous inscrivez-vous sur un chemin ?" />
        <PlacesInput source="cdlt:organizationHostedIn" label="Dans quel(s) lieu(x) êtes vous présent ?" fullWidth />
      </FormTab>
      <FormTab label="Contact">
        <MultiLinesInput source="pair:homePage" fullWidth />
        <TextInput source="pair:e-mail" fullWidth helperText={translate('app.helper.nonVisible')} validate={[email()]} />
        <TextInput source="pair:phone" fullWidth helperText={translate('app.helper.nonVisible')} />
        <TextInput source="cdlt:publicPhone" fullWidth helperText={translate('app.helper.publicPhone')} />
        <StatusInput source="pair:hasStatus" filter={{ a: 'pair:OrganizationStatus' }} fullWidth helperText="Un statut de partenaire permettra d'afficher l'organisation sur la page d'accueil"/>
      </FormTab>
    </TabbedForm>
  </Edit>
  );
}

export default OrganizationEdit;

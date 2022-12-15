import React from 'react';
import { FormTab, ImageInput, NumberInput, TabbedForm, TextInput, useGetIdentity, email } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { MultiLinesInput } from '@semapps/input-components';
import { ImageField } from '@semapps/field-components';
import { 
  ActivitiesInput,
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
} from '../../../../pair';
import ReminderBeforeRecording from '../../../../commons/ReminderBeforeRecording';

const OrganizationForm = ({ mode, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <TabbedForm 
      initialValues={mode === 'create' ? { 'pair:affiliatedBy': identity?.id } : undefined}
      {...rest}
      redirect="show"
    >
      <FormTab label="A propos de l'organisation">
        <TextInput source="pair:label" label="Quel est le nom de votre organisation ?" fullWidth />
        <TextInput source="pair:comment" label="Pourriez-vous le décrire en une phrase" fullWidth />
        <MarkdownInput source="pair:description" label="N'hésitez pas à le décrire plus longuement ici" fullWidth />
        <ImageInput source="pair:depictedBy" label="Mettez un logo !" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <SectorsInput source="pair:hasSector" label="Dans quels secteurs d'activités s'inscrit-elle ?"  />
        <TopicsInput source="pair:hasTopic" label="Quels mots-clés utiliseriez-vous pour la caractériser ?" />
        <MarkdownInput source="cdlt:intentions" label="Quelles sont vos intentions en venant sur les chemins de la transition" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" label="Pouvez-vous accueillir des voyageurs ? Si oui, dans quelles conditions ?" fullWidth />
        <NumberInput source="cdlt:maximumCapacity" label="Combien de voyageurs au maximum ?" fullWidth />
        <TypesInput source="cdlt:hasCourseType" label="Selon quels modes de voyages pouvez-vous accueillir des voyageurs ?" filter={{ a: 'cdlt:CourseType' }} />
        <TypesInput source="pair:hasType" label="Quel type d'organisation ?" filter={{ a: 'pair:OrganizationType' }} />
        <PairLocationInput source="pair:hasLocation" fullWidth />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="En lien avec l'organisation">
        <OrganizationsInput source="pair:partnerOf" label="Avez-vous des partenaires sur les Chemins de la Transition ?" />
        <StatusInput source="pair:hasStatus" filter={{ a: 'pair:OrganizationStatus' }} fullWidth helperText="Un statut de partenaire permettra d'afficher l'organisation sur la page d'accueil"/>
        <OrganizationsInput source="pair:inspiredBy" label="Des organisations qui vous inspirent ?" />
        <UsersInput source="pair:affiliates" label="Des membres de votre organisation sur les Chemins de la Transition ?" />
        <PathsInput source="cdlt:supports" label="Vous inscrivez-vous sur un chemin ?" />
        <PlacesInput source="cdlt:organizationHostedIn" label="Dans quel(s) lieu(x) êtes vous présent ? fullWidth />
        <SkillsInput source="pair:produces" label="Quelles sont les compétences que vous pouvez offrir" fullWidth />
        <FinalitiesInput source="pair:hasFinality" label="Quelles sont les finalités que vous poursuivez" />
      </FormTab>
      <FormTab label="Contact">
        <MultiLinesInput source="pair:homePage" fullWidth />
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[email()]} />
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="cdlt:publicPhone" fullWidth helperText="Numéro public affiché sur la page" />
      </FormTab>
    </TabbedForm>
  );
};

export default OrganizationForm;

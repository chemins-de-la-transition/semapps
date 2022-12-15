import React from 'react';
import { TabbedForm, FormTab, ImageInput, NumberInput, TextInput, useGetIdentity, email, required } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';
import { extractContext, LocationInput } from '@semapps/geo-components';
import { 
  FinalitiesInput,
  OrganizationsInput,
  PathsInput,
  PersonsInput,
  RegistrationInput,
  SectorsInput,
  SkillsInput,
//  StatusInput,
  TopicsInput,
  TypesInput,
} from '../../pair';
import ReminderBeforeRecording from '../../commons/ReminderBeforeRecording';

const PlaceForm = ({ mode, ...rest }) => {
  const { identity } = useGetIdentity();
  return (
    <TabbedForm 
      initialValues={mode === 'create' ? { 'cdlt:proposedBy': identity?.id } : undefined}
      {...rest}
      redirect="show"
    >
      <FormTab label="A propos du lieu">
        <TextInput source="pair:label" label="Quel est le nom de votre lieu ?" fullWidth validate={[required()]} />
        <TextInput source="pair:comment" label="Pourriez-vous le décrire en une phrase" fullWidth validate={[required()]} />
        <TypesInput source="pair:hasType" label="Quel est le type de votre lieu ?" filter={{ a: 'pair:PlaceType' }} validate={[required()]} />
        <ImageInput source="pair:depictedBy" label="Vous pouvez mettre 2 photos (en format paysage) !" accept="image/*" multiple>
          <ImageField source="src" />
        </ImageInput>
        <MarkdownInput source="pair:description" label="N'hésitez pas à le décrire plus longuement ici" fullWidth validate={[required()]} isRequired />
        <MarkdownInput source="cdlt:hostDescription" label="Vous pouvez également décrire les hôtes du lieu !" fullWidth />
        <MarkdownInput source="cdlt:activities" label="Quelles sont les activités pratiquées sur le lieu ?" fullWidth />
        <SectorsInput source="pair:hasSector" label="Dans quels secteurs d'activités s'inscrit-il ?" fullWidth />
        <TopicsInput source="pair:hasTopic" label="Quels mots-clés utiliseriez-vous pour caractériser le lieu ?" fullWidth />
        <FinalitiesInput source="pair:hasFinality" label="Quelles sont les finalités poursuivies par le lieu ?" />          
        <TypesInput source="cdlt:hasCourseType" label="Selon quelles modes de voyage acceptez-vous d'accueilir des gens sur votre lieux ?" filter={{ a: 'cdlt:CourseType' }} validate={[required()]} />        
        {/*<StatusInput source="pair:hasStatus" filter={{ a: 'pair:PlaceStatus' }} fullWidth />*/}
        <SkillsInput source="pair:produces" label="Quelles sont les compétences que vous pouvez offrir" fullWidth />
        <MarkdownInput source="cdlt:practicalConditions" label="Quelles sont les modalités d'accueil et les infos pratiques ?"  fullWidth />
        <NumberInput source="cdlt:maximumCapacity" label="Combien de personnes pouvez-vous accueillir" fullWidth />
        <ReminderBeforeRecording />
      </FormTab>
      <FormTab label="En lien avec le lieu">
        <PersonsInput source="cdlt:proposedBy" label="Qui sont les référent.e.s du lieu" fullWidth />
        <OrganizationsInput source="cdlt:hostsOrganization" label="Y a t'il des organisations présentes sur le lieu ?" />
        <PathsInput source="cdlt:placeOn" label="Sur quel(s) chemin(s) le lieu est-il situé ?" fullWidth />
      </FormTab>
      <FormTab label="Contact">
        <TextInput source="pair:e-mail" fullWidth helperText="Non visible sur la plateforme" validate={[required(), email()]} />  
        <TextInput source="pair:phone" fullWidth helperText="Non visible sur la plateforme" />
        <TextInput source="cdlt:publicPhone" fullWidth helperText="Numéro public affiché sur la page" />
        <TextInput source="pair:homePage" fullWidth helperText="Lien affiché sur la page"/>
        <RegistrationInput 
            directRegistrationSource="cdlt:directRegistration"  helperText="Si non, les voyageurs devront vous écrire via un formulaire de contact au préalable"
            registrationOptionSource="cdlt:registrationOption"
            jotformLinkSource="cdlt:jotformLink"
            registrationLinkSource="cdlt:registrationLink"          
            fullWidth
        />   
        <LocationInput
          mapboxConfig={{
            access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
            types: ['place', 'address', 'region'],
            country: ['fr', 'be', 'ch'],
          }}
          source="pair:hasPostalAddress"
          parse={(value) => {
            const countryName = extractContext(value.context, 'country');
            return ({
              type: 'pair:PostalAddress',
              'pair:label': value.place_name,
              'pair:addressLocality': value.place_type[0] === 'place' ? value.text : value.place_type[0] === 'address' ? extractContext(value.context, 'place') : undefined,
              'pair:addressStreet': value.place_type[0] === 'address' ? [value.address, value.text].join(' ') : undefined,
              'pair:addressZipCode': value.place_type[0] !== 'region' ? extractContext(value.context, 'postcode') : countryName === 'France' ? value.properties?.short_code?.substring(3) : undefined,
              'pair:addressCountry': countryName,
              'pair:longitude': value.center[0],
              'pair:latitude': value.center[1],
            })
          }}
          optionText={(resource) => resource['pair:label']}
          validate={[required()]}
          fullWidth
        />
      </FormTab>
    </TabbedForm>
  );
};

export default PlaceForm;

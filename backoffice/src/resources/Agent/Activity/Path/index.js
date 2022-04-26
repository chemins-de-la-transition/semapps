import { PairResourceCreate } from '../../../../pair';
import PathEdit from './PathEdit';
import PathList from './PathList';
import PathShow from './PathShow';
import TimelineIcon from '@material-ui/icons/Timeline';

export default {
  config: {
    list: PathList,
    show: PathShow,
    create: PairResourceCreate,
    edit: PathEdit,
    icon: TimelineIcon,
    options: {
      label: 'Chemins',
      parent: 'Activity',
    },
  },
  dataModel: {
    types: ['cdlt:Path'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Chemin |||| Chemins',
      fields: {
        'pair:label': 'Titre',
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:isDepictedBy': 'Image',
        'pair:produces': "Permet d'apprendre", /*Skill*/
        'cdlt:proposedBy': 'Proposé par', /*Person*/
        'pair:partnerOf': 'A pour partenaires', /*Organization*/
        'cdlt:hasPlace': 'Lieux', /*Place*/
        'cdlt:hasEvent': 'Evénements', /*Event*/
        'cdlt:hasCourse': 'Voyages', /*Course*/
        /*
        'pair:hasLocation': 'Composez votre parcours',
        'pair:hasStatus': 'Statut',
        'pair:hasType': 'Type',
        'pair:hasTopic': 'A pour thème',
        'cdlt:forWhom': 'Destiné à',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:learningObjectives': "Objectifs d'apprentissage",
        'cdlt:economicalConditions': 'Conditions financières',
        'cdlt:professionalPerspectives': 'Perspectives professionnelles',
        */
      },
    },
  },
};

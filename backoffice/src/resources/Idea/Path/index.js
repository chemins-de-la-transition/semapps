import { PairResourceCreate } from '../../../pair';
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
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:produces': "Permet d'apprendre",
        'pair:hasLocation': 'Composez votre voyage',
        'pair:hasStatus': 'Statut',
        'pair:hasType': 'Type',
        'pair:hasTopic': 'A pour secteur d\'activité',
        'cdlt:proposedBy': 'Proposé par',
        'cdlt:hasCourse': 'Voyages programmés',
        'cdlt:forWhom': 'Destiné à',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:learningObjectives': "Objectifs d'apprentissage",
        'cdlt:economicalConditions': 'Conditions financières',
        'cdlt:professionalPerspectives': 'Perspectives professionnelles',
      },
    },
  },
};

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
      label: 'Parcours',
      parent: 'Activity'
    }
  },
  dataModel: {
    types: ['cdlt:Path'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'paths',
    slugField: 'pair:label'
  },
  translations: {
    fr: {
      name: 'Parcours |||| Parcours',
      fields: {
        'pair:label': 'Titre',
        'pair:description': 'Description',
        'pair:comment': 'Courte description',
        'pair:produces': 'Permet d\'apprendre',
        'pair:hasLocation': 'A pour étapes possibles',
        'pair:hasStatus': 'Statut',
        'pair:hasType': 'Type',
        'pair:hasTopic': 'A pour thème',
        'cdlt:proposedBy': 'Proposé par',
        'cdlt:hasSession': 'A pour sessions',
        'cdlt:forWhom': 'Destiné à',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:learningObjectives': 'Objectifs d\'apprentissage',
        'cdlt:economicalConditions': 'Conditions financières',
        'cdlt:professionalPerspectives': 'Perspectives professionnelles',
      }
    }
  }
};

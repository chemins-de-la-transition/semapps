import { PairResourceCreate } from '../../pair';
import PlaceEdit from './PlaceEdit';
import PlaceList from './PlaceList';
import PlaceShow from './PlaceShow';
import PlaceIcon from '@material-ui/icons/Place';

export default {
  config: {
    list: PlaceList,
    show: PlaceShow,
    create: PairResourceCreate,
    edit: PlaceEdit,
    icon: PlaceIcon,
    options: {
      label: 'Lieux',
      parent: 'Activity',
    },
  },
  dataModel: {
    types: ['pair:Place'],
    create: {
      container: {
        cdlt: '/places'
      }
    },
    list: {
      containers: {
        cdlt: ['/places']
      },
      dereference: ['pair:hasPostalAddress'],
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Lieu |||| Lieux',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': "Phrase d'accroche",
        'pair:depictedBy': 'Image',
        'cdlt:hasRegion': 'Région',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Theme*/
        'cdlt:hasCourseType': 'Type de voyage',
        'pair:hasType': 'Type de lieu',
        'pair:hasStatus': 'Statut',
        'pair:description': 'A propos du lieu',
        'cdlt:hostDescription': 'Description de l\'hôte',
        'cdlt:activities': 'Activités',
        'pair:hosts': 'Événements sur le lieu',
        'pair:produces': 'Compétences / Savoir-faire',
        'cdlt:practicalConditions': "Modalité d'accueil",
        'pair:hasPostalAddress': 'Localisation',
        'cdlt:proposedBy': 'Proposé par',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:homePage': 'Site web',
        'cdlt:placeOn': 'Est un lieu de',
        'pair:hasFinality': 'Finalités',
        'cdlt:directRegistration' : "Possibilité de s'inscrire directement",
        'cdlt:registrationOption' : "Option d'inscription",
        'cdlt:jotformLink':"Formulaire d'inscription JotForm",
        'cdlt:registrationLink':"Lien du système d'inscription",
        'cdlt:hostsOrganization': 'Organisations présentes',
      },
    },
  },
};

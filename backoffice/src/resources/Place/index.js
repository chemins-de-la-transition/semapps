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
      }
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
        'cdlt:hasPublicationStatus':'Statut de publication',
        'pair:comment': "Phrase d'accroche",
        'pair:depictedBy': 'Image',
        'cdlt:hasRegion': 'Région',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Topic*/
        'cdlt:hasCourseType': 'Mode de voyage',
        'pair:hasType': 'Type de lieu',
        'pair:hasStatus': 'Statut',
        'pair:description': 'A propos du lieu',
        'cdlt:hostDescription': 'Description de l\'hôte',
        'cdlt:activities': 'Activités',
        'pair:hosts': 'Événements sur le lieu',
        'pair:produces': 'Compétences / Savoir-faire',
        'pair:aims': 'Compétences recherchées',
        'cdlt:practicalConditions': "Modalité d'accueil",
        'cdlt:maximumCapacity': "Capacité d'accueil maximum",
        'pair:hasPostalAddress': 'Localisation',
        'cdlt:proposedBy': 'Proposé par',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'cdlt:publicPhone':'Téléphone',
        'pair:homePage': 'Site web',
        'cdlt:placeOn': 'Est un lieu de',
        'pair:hasFinality': 'Finalités',
        'cdlt:directRegistration' : "Les voyageurs peuvent-ils s'inscrire directement ? (Si non, ils devront vous contacter avant)",
        'cdlt:registrationOption' : "Option d'inscription",
        'cdlt:jotformLink':"Formulaire d'inscription JotForm",
        'cdlt:registrationLink':"Lien du système d'inscription",
        'cdlt:hostsOrganization': 'Organisations présentes',
      },
    },
    en: {
      name: 'Place |||| Places',
      fields: {
        'pair:label': 'Name',
        'cdlt:hasPublicationStatus': 'Publication Status',
        'pair:comment': 'In a few words',
        'pair:depictedBy': 'Image',
        'cdlt:hasRegion': 'Region',
        'pair:hasSector': 'Activity Sectors',
        'pair:hasTopic': 'Keywords',
        'cdlt:hasCourseType': 'Travel Mode',
        'pair:hasType': 'Place Type',
        'pair:hasStatus': 'Status',
        'pair:description': 'Description',
        'cdlt:hostDescription': 'Your host',
        'cdlt:activities': 'Activities',
        'pair:hosts': 'Events at the place',
        'pair:produces': 'Skills present at the place',
        'pair:aims': 'Skills sought to develop this place',
        'cdlt:practicalConditions': 'Hosting Terms',
        'cdlt:maximumCapacity': 'Maximum Hosting Capacity',
        'pair:hasPostalAddress': 'Location',
        'cdlt:proposedBy': 'Proposed by',
        'pair:e-mail': 'Email Address',
        'pair:phone': 'Phone',
        'cdlt:publicPhone': 'Phone',
        'pair:homePage': 'Website',
        'cdlt:placeOn': 'Part of a path',
        'pair:hasFinality': 'Purposes',
        'cdlt:directRegistration': 'Option for direct registration',
        'cdlt:registrationOption': 'Registration Option',
        'cdlt:jotformLink': 'JotForm Registration Form',
        'cdlt:registrationLink': 'Registration System Link',
        'cdlt:hostsOrganization': 'Present Organizations',
      },
    },
  },
};

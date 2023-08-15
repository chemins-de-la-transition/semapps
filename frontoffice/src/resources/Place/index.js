import PlaceCreate from './PlaceCreate';
import PlaceEdit from './PlaceEdit';
import PlaceList from './PlaceList';
import PlaceShow from './PlaceShow';
import PlaceIcon from '@material-ui/icons/Place';

export default {
  config: {
    list: PlaceList,
    show: PlaceShow,
    create: PlaceCreate,
    edit: PlaceEdit,
    icon: PlaceIcon,
    options: {
      label: 'Lieux'
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
      explicitEmbedOnFraming: false, // Increase performance since explicit embed is not necessary
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
        'cdlt:hasPublicationStatus': 'Statut de publication',
        'pair:comment': 'En quelques mots',
        'pair:depictedBy': 'Image',
        'cdlt:hasRegion': 'Région',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Topic*/
        'cdlt:hasCourseType': 'Mode de voyage',
        'pair:hasType': 'Type de lieu',
        'pair:hasStatus': 'Statut',
        'pair:description': 'Description',
        'cdlt:hostDescription': 'Votre hôte',
        'cdlt:activities': 'Activités',
        'pair:hosts': 'Evénements sur le lieu',
        'pair:produces': 'Compétences présentes sur le lieu',
        'pair:aims': 'Compétences recherchées pour développer ce lieu',
        'cdlt:practicalConditions': "Modalités d'accueil",
        'cdlt:maximumCapacity': "Capacité d'accueil maximum",
        'pair:hasPostalAddress': 'Localisation',
        'cdlt:proposedBy': 'Proposé par',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'cdlt:publicPhone': 'Téléphone',
        'pair:homePage': 'Site web',
        'cdlt:placeOn': 'Fait partie d\'un chemin',
        'pair:hasFinality': 'Finalités',
        'cdlt:directRegistration': "Possibilité de s'inscrire directement",
        'cdlt:registrationOption': "Option d'inscription",
        'cdlt:jotformLink': "Formulaire d'inscription JotForm",
        'cdlt:registrationLink': "Lien du système d'inscription",
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
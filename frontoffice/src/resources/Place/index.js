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
      dereference: ['pair:hasPostalAddress'],
      explicitEmbedOnFraming: false // Increase performance since explicit embed is not necessary
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
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Theme*/
        'cdlt:hasCourseType': 'Type de voyage',
        'pair:hasType': 'Type de lieu',
        'pair:description': 'A propos du lieu',
        'cdlt:hostDescription': 'Votre hôte',
        'cdlt:activities': 'Activités',
        'pair:hosts': 'Événements',
        'pair:produces': 'Compétences / savoir-faire',
        'cdlt:practicalConditions': "Modalités d'accueil",
        'pair:hasPostalAddress': 'Localisation',
        'cdlt:proposedBy': 'Proposé par',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:homePage': 'Site web',
        'cdlt:placeOn': 'Fait partie d\'un chemin',
        'pair:hasFinality': 'Finalités',
        'cdlt:directRegistration' : "Possibilité de s'enregistrer directement",
      },
    },
  },
};

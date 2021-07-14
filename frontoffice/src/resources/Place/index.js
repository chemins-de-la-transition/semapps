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
      label: 'Lieux',
      parent: 'Activity',
    },
  },
  dataModel: {
    types: ['pair:Place'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'places',
    dereference: ['pair:hasPostalAddress'],
    slugField: 'pair:label',
  },
  translations: {
    fr: {
      name: 'Lieu |||| Lieux',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': "Phrase d'accroche",
        'pair:isDepictedBy': 'Image',
        'pair:hasTopic': 'Thématiques',
        'cdlt:hasCourseType': 'Type de parcours',
        'pair:hasType': 'Type de lieu',
        'pair:description': 'A propos du lieu',
        'cdlt:activities': 'Activités',
        'pair:hosts': 'Evénements',
        'pair:produces': 'Compétences / savoir-faire',
        'cdlt:practicalConditions': "Modalité d'accueil",
        'pair:hasPostalAddress': 'Localisation',
        'cdlt:proposedBy': 'Proposé par',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:homePage': 'Site web',
      },
    },
  },
};

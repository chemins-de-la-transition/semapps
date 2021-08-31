import PersonCreate from './PersonCreate';
import PersonEdit from './PersonEdit';
import PersonList from './PersonList';
import PersonShow from './PersonShow';
import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    create: PersonCreate,
    list: PersonList,
    show: PersonShow,
    edit: PersonEdit,
    icon: PersonIcon,
    options: {
      label: 'Personnes',
      parent: 'Actor',
    },
  },
  dataModel: {
    types: ['pair:Person'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'users',
    dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    slugField: ['pair:firstName', 'pair:lastName'],
  },
  translations: {
    fr: {
      name: 'Personne |||| Personnes',
      fields: {
        'pair:firstName': 'Prénom',
        'pair:lastName': 'Nom de famille',
        'pair:comment': 'En deux mots',
        'pair:image': 'Photo',
        'pair:involvedIn': 'Impliqué dans',
        'pair:hasStatus': 'Statut',
        'pair:affiliatedBy': 'Membre de',
        'pair:offers': 'Offre',
        'pair:hasTopic': 'A pour intérêt',
        'pair:hasLocation': 'Adresse',
        'pair:hasType': 'Type',
        'cdlt:mentorOn': 'Est mentor pour',
        'cdlt:organizes': 'Evénements',
        'cdlt:proposes': 'Lieux',
        'foaf:email': 'Adresse email',
      },
    },
  },
};

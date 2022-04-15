import PersonEdit from './PersonEdit';
import PersonShow from './PersonShow';
import PersonIcon from '@material-ui/icons/Person';

export default {
  config: {
    show: PersonShow,
    edit: PersonEdit,
    icon: PersonIcon,
    options: {
      label: 'Personnes',
      parent: 'Actor',
    },
  },
  dataModel: {
    types: ['pair:Person', 'foaf:Person'],
    list: {
      dereference: ['pair:hasLocation/pair:hasPostalAddress'],
    },
    fieldsMapping: {
      title: ['pair:firstName', 'pair:lastName']
    }
  },
  translations: {
    fr: {
      name: 'Personne |||| Personnes',
      fields: {
        'pair:firstName': 'Prénom',
        'pair:lastName': 'Nom de famille',
        'pair:comment': 'En deux mots',
        'pair:description': 'Description',
        'pair:image': 'Photo',
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
        'pair:phone': 'Téléphone',
      },
    },
  },
};

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
        'pair:affiliatedBy': 'Membre de', /*Organization*/
        'pair:offers': 'Offre', /*Skill*/
        'pair:hasTopic': 'A pour intérêt', /*Theme*/
        'pair:hasLocation': 'Adresse',
        'pair:hasType': 'Type',
        'pair:aims': 'Intention en tant que voyageur',
        'cdlt:aimsAsMentor': 'Intention en tant que mentor',
        'cdlt:aimsAsOrganizer': 'Intention en tant qu\'organisateur',
        'cdlt:aimsAsHost': 'Intention en tant qu\'hôte',
        'cdlt:mentorOn': 'Est mentor pour', /*Parcours*/
        'cdlt:organizes': 'Evénements',
        'cdlt:proposes': 'Lieux',
        'foaf:email': 'Adresse email',
        'pair:phone': 'Téléphone',
      },
    },
  },
};

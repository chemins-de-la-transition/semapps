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
        'pair:hasType': 'Type',
        'pair:hasStatus': 'Statut',
        'pair:offers': 'Offre', /*Skill*/
        'pair:hasTopic': 'A pour intérêt', /*Theme*/
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasLocation': 'Adresse',
        'pair:aims': 'Intention en tant que voyageur',
        'cdlt:aimsAsMentor': 'Intention en tant que mentor',
        'cdlt:aimsAsOrganizer': 'Intention en tant qu\'organisateur',
        'cdlt:aimsAsHost': 'Intention en tant qu\'hôte',
        'pair:affiliatedBy': 'Membre de', /*Organization*/
        'cdlt:mentorOn': 'Est mentor pour', /*Activity*/
        'cdlt:organizes': 'Est organisateur de', /*Activity*/
        'cdlt:proposes': 'Est hôte de',
        'foaf:email': 'Adresse email',
        'pair:phone': 'Téléphone',
      },
    },
  },
};

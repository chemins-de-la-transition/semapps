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
    types: ['pair:Person', 'foaf:Person', 'Person'],
    list: {
      dereference: ['sec:publicKey', 'pair:hasLocation/pair:hasPostalAddress'],
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
        'pair:alternativeLabel': 'Nom d\'utilisateur',
        'pair:comment': 'En deux mots',
        'pair:description': 'Description',
        'pair:depictedBy': 'Photo',
        'pair:hasType': 'Type',
        'pair:hasStatus': 'Statut',
        'pair:offers': 'Offre', /*Skill*/
        'pair:hasTopic': 'A pour intérêt', /*Theme*/
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasLocation': 'Adresse',
        'pair:hasFinality': 'Finalités',
        'cdlt:asAHostIntentions': 'Intention en tant qu\'hôte',
        'cdlt:asAMentorIntentions': 'Intention en tant que mentor',
        'cdlt:asAnOrganiserIntentions': 'Intention en tant qu\'organisateur',
        'cdlt:asATravelerIntentions': 'Intention en tant que voyageur',
        'pair:affiliatedBy': 'Membre de', /*Organization*/
        'cdlt:mentorOn': 'Est intervenant pour', /*Activity*/
        'cdlt:organizes': 'Est organisateur de', /*Activity*/
        'cdlt:proposes': 'Est hôte de',
        'foaf:email': 'Adresse email',
        'pair:phone': 'Téléphone',
      },
    },
  },
};

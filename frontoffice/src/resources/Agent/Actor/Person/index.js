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
        'pair:alternativeLabel': 'Nom d\'utilisateur',
        'pair:comment': 'En quelques mots',
        'pair:description': 'Description',
        'pair:homePage': 'Site web',
        'pair:depictedBy': 'Photo',
        'pair:hasType': 'Type',
        'pair:hasStatus': 'Statut',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Theme*/
        'pair:hasLocation': 'Localisation',
        'pair:hasFinality': 'Finalités',
        'cdlt:intentions': 'Mes intentions en venant sur les chemins de la transition',
        /*
        'cdlt:asAHostIntentions': 'Intention en tant qu\'hôte',
        'cdlt:asAMentorIntentions': 'Intention en tant qu\'intervenant.e',
        'cdlt:asAnOrganiserIntentions': 'Intention en tant qu\'organisateur',
        'cdlt:asATravelerIntentions': 'Intention en tant que voyageur',
        */
        'pair:affiliatedBy': 'Membre de', /*Organization*/
        'cdlt:mentorOn': 'Est intervenant pour', /*Activity*/
        'cdlt:organizes': 'Est organisateur de', /*Activity*/
        'cdlt:proposes': 'Est hôte de',
        'foaf:email': 'Adresse email',
        'pair:phone': 'Téléphone',
        'pair:offers': 'Compétences actuelles', /*Skill*/
        'pair:aims': 'Compétences recherchées', /*Skill*/
        'pair:inspiredBy': 'Est inspirée par', /*Organization*/
        'cdlt:supports': 'Chemins', /*Paths*/
      },
    },
  },
};

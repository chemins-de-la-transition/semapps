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
        'pair:homePage': 'Site web',
        'pair:depictedBy': 'Photo',
        'pair:hasType': 'Type',
        'pair:hasStatus': 'Statut',
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Topic*/
        'pair:hasLocation': 'Adresse',
        'cdlt:hasRegion': 'Région',
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
    en: {
      name: 'Person |||| People',
      fields: {
        'pair:firstName': 'First Name',
        'pair:lastName': 'Last Name',
        'pair:alternativeLabel': 'Username',
        'pair:comment': 'In a few words',
        'pair:description': 'Description',
        'pair:homePage': 'Website',
        'pair:depictedBy': 'Photo',
        'pair:hasType': 'Type',
        'pair:hasStatus': 'Status',
        'pair:hasSector': 'Activity Sectors',
        'pair:hasTopic': 'Keywords',
        'pair:hasLocation': 'Location',
        'pair:hasFinality': 'Purposes',
        'cdlt:intentions': 'My intentions in joining the paths of transition',
        /*
        'cdlt:asAHostIntentions': 'Intentions as a host',
        'cdlt:asAMentorIntentions': 'Intentions as a mentor',
        'cdlt:asAnOrganiserIntentions': 'Intentions as an organizer',
        'cdlt:asATravelerIntentions': 'Intentions as a traveler',
        */
        'pair:affiliatedBy': 'Member of',
        'cdlt:mentorOn': 'Is a speaker for',
        'cdlt:organizes': 'Organizes',
        'cdlt:proposes': 'Hosts',
        'foaf:email': 'Email Address',
        'pair:phone': 'Phone',
        'pair:offers': 'Current Skills',
        'pair:aims': 'Desired Skills',
        'pair:inspiredBy': 'Is inspired by',
        'cdlt:supports': 'Paths',
        'pair:produces': 'Skills in the organization',
      },
    },
  },
};

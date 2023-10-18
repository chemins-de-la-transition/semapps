import PathList from './PathList';
import PathShow from './PathShow';
import TimelineIcon from '@material-ui/icons/Timeline';

export default {
  config: {
    list: PathList,
    show: PathShow,
    icon: TimelineIcon,
    options: {
      label: 'Chemins',
      parent: 'Activity',
    },
  },
  dataModel: {
    types: ['cdlt:Path'],
    list: {
      filter: {
        'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide'
      }
    },
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Chemin |||| Chemins',
      fields: {
        'pair:label': 'Titre',
        'cdlt:hasPublicationStatus':'Statut de publication',
        'pair:comment': 'En quelques mots',
        'pair:description': 'Description',
        'pair:depictedBy': 'Image',
        'pair:produces': "Permet d'apprendre", /*Skill*/
        'cdlt:proposedBy': 'Proposé par', /*Person*/
        'cdlt:supportedBy': 'A pour partenaires', /*Organization*/
        'cdlt:hasPlace': 'Lieux', /*Place*/
        'cdlt:hasEvent': 'Evénements', /*Event*/
        'cdlt:hasCourse': 'Voyages', /*Course*/
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Topic*/
        'pair:hasFinality': 'Finalités',
        'pair:nourishes': 'Discussions',
        'cdlt:hasCourseType': 'Mode de voyage',
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        "cdlt:hasJobOpportunities":"Idées de débouchés vers des métiers de transition"
      },
    },
    en: {
      name: 'Path |||| Paths',
      fields: {
        'pair:label': 'Title',
        'cdlt:hasPublicationStatus':'Publication status',
        'pair:comment': 'In a few words',
        'pair:description': 'Description',
        'pair:depictedBy': 'Image',
        'pair:produces': "Allows to learn", /*Skill*/
        'cdlt:proposedBy': 'Proposed by', /*Person*/
        'cdlt:supportedBy': 'Partnered with', /*Organization*/
        'cdlt:hasPlace': 'Places', /*Place*/
        'cdlt:hasEvent': 'Events', /*Event*/
        'cdlt:hasCourse': 'Trips', /*Course*/
        'pair:hasSector': 'Sectors of activity',
        'pair:hasTopic': 'Keywords', /*Topic*/
        'pair:hasFinality': 'Purposes',
        'pair:nourishes': 'Discussions',
        'cdlt:hasCourseType': 'Travel mode',
        'cdlt:learningObjectives': 'Educational objectives',
        "cdlt:hasJobOpportunities":"Ideas for job opportunities in transition"
      },
    },
  },
};

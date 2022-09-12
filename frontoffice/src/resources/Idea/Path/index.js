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
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Chemin |||| Chemins',
      fields: {
        'pair:label': 'Titre',
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
        'pair:hasTopic': 'Mots clé', /*Theme*/
        'pair:hasFinality': 'Finalités',
        'pair:nourishes': 'Discussions',
        'cdlt:hasCourseType': 'Mode de voyage',
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        "cdlt:hasJobOpportunities":"Idées de débouchés vers des métiers de transition"
      },
    },
  },
};

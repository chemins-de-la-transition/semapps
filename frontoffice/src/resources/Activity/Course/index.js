import CourseList from './CourseList';
import CourseShow from './CourseShow';

export default {
  config: {
    list: CourseList,
    show: CourseShow
  },
  dataModel: {
    types: ['cdlt:Course'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'courses',
    slugField: 'pair:label',
  },
  translations: {
    fr: {
      name: 'Parcours |||| Parcours',
      fields: {
        'pair:label': 'Titre',
        'pair:isDepictedBy': 'Image',
        'cdlt:hasCourseType': 'Type de parcours',
        'pair:hasTopic': 'Thématiques',
        'pair:produces': 'Compétences visées',
        'pair:startDate': 'Date de début',
        'pair:endDate': 'Date de fin',
        'cdlt:priceRange': 'Coût',
        'pair:description': 'Présentation',
        'pair:hasPart': 'Programme du parcours',
        'cdlt:prerequisites': 'Prérequis',
        'cdlt:practicalConditions': 'Informations pratiques',
        'cdlt:learningObjectives': 'Objectifs pédagogiques',
        'cdlt:economicalConditions': 'Conditions financières',
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'pair:homePage': 'Site web',
        'pair:comment': "Phrase d'accroche",
        'cdlt:hasMentor': 'A pour mentor',
        'cdlt:organizedBy': 'Organisé par',
        'pair:hasStatus': 'Statut',
        'cdlt:courseOn': 'Est un parcours de',
      },
    },
  },
};

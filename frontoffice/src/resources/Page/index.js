import PageShow from './PageShow';

export default {
  config: {
    show: PageShow,
  },
  dataModel: {
    types: ['semapps:Page'],
    containerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'pages',
    slugField: 'semapps:title',
  },
  translations: {
    fr: {
      name: 'Page |||| Pages',
      fields: {
        'semapps:title': 'Titre',
        'semapps:content': 'Contenu',
      },
    },
  },
};

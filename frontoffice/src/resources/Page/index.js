import PageShow from './PageShow';

export default {
  config: {
    show: PageShow,
  },
  dataModel: {
    types: ['semapps:Page'],
    fieldsMapping: {
      title: 'semapps:title'
    }
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

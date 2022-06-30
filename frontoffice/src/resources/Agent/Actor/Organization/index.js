import OrganizationCreate from './OrganizationCreate';
import OrganizationEdit from './OrganizationEdit';
import OrganizationShow from './OrganizationShow';
import HomeIcon from '@material-ui/icons/Home';

export default {
  config: {
    show: OrganizationShow,
    create: OrganizationCreate,
    edit: OrganizationEdit,
    icon: HomeIcon,
    options: {
      label: 'Organisations',
      parent: 'Actor',
    },
  },
  dataModel: {
    types: ['pair:Organization'],
    fieldsMapping: {
      title: ['pair:label']
    }
  },
  translations: {
    fr: {
      name: 'Organisation |||| Organisations',
      fields: {
        'pair:label': 'Nom',
        'pair:comment': 'En quelques mots',
        'pair:description': 'Description',
        'pair:homePage': 'Site web',
        'pair:e-mail': 'Adresse mail',
        'pair:phone': 'Téléphone',
        'cdlt:publicPhone':'Téléphone',
        'pair:depictedBy': 'Logo',
        'pair:affiliates': 'A pour membres', /*Person*/
        'pair:partnerOf': 'A pour partenaires', /*Organization*/
        'pair:inspiredBy': 'Est inspirée par', /*Organization*/
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Topic*/
        'pair:hasLocation': 'Localisation',
        'cdlt:organizes': 'Organise',
        'cdlt:hasRegion': 'Région(s)',
        'cdlt:supports': 'Chemins', /*Paths*/
        'cdlt:hasCourseType': 'Mode de voyage',
        'cdlt:organizationHostedIn': 'Où sommes-nous',
        'pair:hasFinality': 'Finalités',
        'cdlt:intentions': 'Nos intentions en venant sur les chemins de la transition',
        'cdlt:practicalConditions': "Modalités d'accueil",
        'cdlt:maximumCapacity': "Capacité d'accueil maximum",
        'pair:produces': 'Compétences présentes dans l\'organisation',
        'pair:aims': 'Compétences recherchées par l\'organisation',
        'pair:hasType': 'Type d\'organisation',
      },
    },
  },
};

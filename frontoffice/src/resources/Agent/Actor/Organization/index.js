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
        'cdlt:hasPublicationStatus':'Statut de publication',
        'pair:comment': 'En quelques mots',
        'pair:description': 'Description',
        'pair:homePage': 'Liens',
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
    en: {
      name: 'Organization |||| Organizations',
      fields: {
        'pair:label': 'Name',
        'cdlt:hasPublicationStatus': 'Publication Status',
        'pair:comment': 'In a few words',
        'pair:description': 'Description',
        'pair:homePage': 'Links',
        'pair:e-mail': 'Email Address',
        'pair:phone': 'Phone',
        'cdlt:publicPhone': 'Phone',
        'pair:depictedBy': 'Logo',
        'pair:affiliates': 'Has Members', /*Person*/
        'pair:partnerOf': 'Partner of', /*Organization*/
        'pair:inspiredBy': 'Inspired by', /*Organization*/
        'pair:hasSector': 'Activity Sectors',
        'pair:hasTopic': 'Keywords', /*Topic*/
        'pair:hasLocation': 'Location',
        'cdlt:organizes': 'Organizes',
        'cdlt:hasRegion': 'Region(s)',
        'cdlt:supports': 'Paths', /*Paths*/
        'cdlt:hasCourseType': 'Travel Mode',
        'cdlt:organizationHostedIn': 'Where are we',
        'pair:hasFinality': 'Objectives',
        'cdlt:intentions': 'Our intentions in coming to the paths of transition',
        'cdlt:practicalConditions': 'Accommodation Terms',
        'cdlt:maximumCapacity': 'Maximum Accommodation Capacity',
        'pair:produces': 'Skills present in the organization',
        'pair:aims': 'Skills sought by the organization',
        'pair:hasType': 'Organization Type',
      },
    }
  },
};

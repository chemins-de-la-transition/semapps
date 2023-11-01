import { PairResourceCreate } from '../../../../pair';
import OrganizationEdit from './OrganizationEdit';
import OrganizationList from './OrganizationList';
import OrganizationShow from './OrganizationShow';
import HomeIcon from '@material-ui/icons/Home';

export default {
  config: {
    list: OrganizationList,
    show: OrganizationShow,
    create: PairResourceCreate,
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
        'pair:comment': 'Courte description',
        'pair:description': 'Description',
        'pair:homePage': 'Liens',
        'pair:depictedBy': 'Logo',
        'pair:affiliates': 'A pour membres', /*Person*/
        'pair:partnerOf': 'A pour partenaires', /*Organization*/
        'pair:inspiredBy': 'Est inspirée par', /*Organization*/
        'pair:hasSector': 'Secteurs d\'activité',
        'pair:hasTopic': 'Mots clé', /*Topic*/
        'pair:hasLocation': 'Adresse',
        'cdlt:hasRegion': 'Région',
        'cdlt:organizes': 'Organise',
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
        'pair:e-mail': 'Adresse e-mail',
        'pair:phone': 'Téléphone',
        'cdlt:publicPhone':'Téléphone',
        'pair:hasStatus':'Statut',
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
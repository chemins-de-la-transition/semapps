import SkillCreate from './SkillCreate';
import SkillEdit from './SkillEdit';
import SkillList from './SkillList';
import SkillShow from './SkillShow';
import PanToolIcon from '@material-ui/icons/PanTool';

export default {
  config: {
    list: SkillList,
    create: SkillCreate,
    edit: SkillEdit,
    show: SkillShow,
    icon: PanToolIcon,
    options: {
      label: 'Compétences',
      parent: 'Resource',
    },
  },
  dataModel: {
    types: ['pair:Skill'],
    fieldsMapping: {
      title: 'pair:label'
    }
  },
  translations: {
    fr: {
      name: 'Compétence |||| Compétences',
      fields: {
        'pair:label': 'Titre',
        'pair:offeredBy': 'Proposé par',
        'pair:producedBy': 'Produit par',
      },
    },
  },
};

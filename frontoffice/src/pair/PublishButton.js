import React from 'react';
import { useNotify, useUpdate, useAuthProvider } from 'react-admin';
import { Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import GetAppIcon from '@material-ui/icons/GetApp';

const PUBLISHED_STATUS = process.env.REACT_APP_MIDDLEWARE_URL + 'status/valide';
const UNPUBLISHED_STATUS = process.env.REACT_APP_MIDDLEWARE_URL + 'status/en-cours';
const ANONYMOUS_AGENT = 'foaf:Agent';
const CLASS_AGENT = 'acl:agentClass';
const ACL_READ = 'acl:Read';

const PublishButton = ({ basePath, resource, record, ...rest }) => {
  const notify = useNotify();
  const [update] = useUpdate();
  const authProvider = useAuthProvider();

  const isPublished = record['pair:hasStatus'] === PUBLISHED_STATUS;

  const publish = e => {
    e.stopPropagation();
    update(resource, record.id, { ...record, 'pair:hasStatus': PUBLISHED_STATUS }, record);
    authProvider.addPermission(record.id, ANONYMOUS_AGENT, CLASS_AGENT, ACL_READ)
    notify('Le parcours a bien été publié');
  }

  const unpublish = e => {
    e.stopPropagation();
    update(resource, record.id, { ...record, 'pair:hasStatus': UNPUBLISHED_STATUS }, record);
    authProvider.removePermission(record.id, ANONYMOUS_AGENT, CLASS_AGENT, ACL_READ)
    notify('Le parcours a été dépublié');
  }

  return (
    <Button
      color="primary"
      startIcon={isPublished ? <GetAppIcon /> : <PublishIcon />}
      size="small"
      onClick={isPublished ? unpublish : publish}>
      {isPublished ? 'Dépublier' : 'Publier'}
    </Button>
  );
};

export default PublishButton;

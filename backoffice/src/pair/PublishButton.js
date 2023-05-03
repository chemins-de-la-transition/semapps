import React from 'react';
import { useNotify, useUpdate } from 'react-admin';
import { Button } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import GetAppIcon from '@material-ui/icons/GetApp';

const PUBLISHED_STATUS = process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide';
const UNPUBLISHED_STATUS = process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/en-cours';

const PublishButton = ({ resource, record }) => {
  const notify = useNotify();
  const [update] = useUpdate();

  const isPublished = record['cdlt:hasPublicationStatus'] === PUBLISHED_STATUS;

  const publish = (e) => {
    e.stopPropagation();
    update(resource, record.id, { ...record, 'cdlt:hasPublicationStatus': PUBLISHED_STATUS }, record);
    notify('La ressource a été publié');
  };

  const unpublish = (e) => {
    e.stopPropagation();
    update(resource, record.id, { ...record, 'cdlt:hasPublicationStatus': UNPUBLISHED_STATUS }, record);
    notify('La ressource a été dépublié');
  };

  return (
    <Button
      color="primary"
      startIcon={isPublished ? <GetAppIcon /> : <PublishIcon />}
      size="small"
      onClick={isPublished ? unpublish : publish}
    >
      {isPublished ? 'Dépublier' : 'Publier'}
    </Button>
  );
};

export default PublishButton;

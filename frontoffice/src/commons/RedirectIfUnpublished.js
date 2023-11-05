import { useEffect } from 'react';
import { useRecordContext, useNotify, useRedirect } from 'react-admin';
import { PUBLISHED_STATUS } from '../config/constants';

const RedirectIfUnpublished = ({setIsPublished}) => {
  const record = useRecordContext();
  const redirect = useRedirect();
  const notify = useNotify();
  useEffect(() => {
    if (record) {
      if (record['cdlt:hasPublicationStatus'] !== PUBLISHED_STATUS) {
        notify('auth.message.resource_show_forbidden' , { type: 'error' });
        redirect('/');
      } else {
        setIsPublished(true);
      }
    }
  }, [record, notify, redirect, setIsPublished]);
  return;
};

export default RedirectIfUnpublished;

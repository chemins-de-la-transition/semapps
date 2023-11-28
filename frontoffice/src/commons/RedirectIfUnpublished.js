import { useEffect } from 'react';
import { useRecordContext, useNotify, useGetIdentity, useRedirect } from 'react-admin';
import { PUBLISHED_STATUS } from '../config/constants';

const RedirectIfUnpublished = ({setIsPublished}) => {
  const { identity } = useGetIdentity();
  const record = useRecordContext();
  const redirect = useRedirect();
  const notify = useNotify();
  useEffect(() => {
    if (record && identity) {
      if (record['cdlt:hasPublicationStatus'] !== PUBLISHED_STATUS && record['dc:creator'] !== identity.id) {
        notify('auth.message.resource_show_forbidden' , { type: 'error' });
        redirect('/');
      } else {
        setIsPublished(true);
      }
    }
  }, [record, identity, notify, redirect, setIsPublished]);
  return;
};

export default RedirectIfUnpublished;

import React from 'react';
import { ListBase, SimpleList, useTranslate } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import Button from '../commons/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const MyAlertsPage = () => {
  const { identity, loading } = useCheckAuthenticated();
  const translate = useTranslate();
  const actions = [<Button to="/Alert/create">{translate('app.action.alert.create')}</Button>];
  if (loading) return null;
  return (
    <>
      <HeaderTitle actions={actions}>{translate('app.action.alert.mine')}</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          <ListBase resource="Alert" basePath="/Alert" filter={{ 'cdlt:proposedBy': identity?.id }}>
          <SimpleList
            primaryText={(record) => record['pair:label']}
            leftAvatar={() => <NotificationsIcon />}
            rowStyle={() => ({
              backgroundColor: 'white',
              padding: 8,
              marginBottom: 8,
              boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            })}
            rightIcon={(record) => {if (record['cdlt:hasPublicationStatus'] !== process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide') { return( <VisibilityOffIcon />);}}}
          />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default MyAlertsPage;
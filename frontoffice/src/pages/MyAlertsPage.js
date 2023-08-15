import React from 'react';
import { ListBase, SimpleList } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import Button from '../commons/Button';
import NotificationsIcon from '@material-ui/icons/Notifications';

const actions = [<Button to="/Alert/create">Ajouter</Button>];

const MyAlertsPage = () => {
  const { identity, loading } = useCheckAuthenticated();
  if (loading) return null;
  return (
    <>
      <HeaderTitle actions={actions}>Mes alertes</HeaderTitle>
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
          />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default MyAlertsPage;
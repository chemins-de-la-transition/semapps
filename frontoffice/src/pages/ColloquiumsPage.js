import React from 'react';
import { ListBase, useTranslate} from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from '../commons/lists/CardsList';
import EventCard from '../resources/Agent/Activity/Event/EventCard';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
//import Button from '../commons/Button';


const ColloquiumsPage = () => {
  const type = 'colloquium';
  const { identity, loading } = useCheckAuthenticated();
  const translate = useTranslate();
  const actions = []; //<Button to="/Event/create">{translate('app.action.create')}</Button>

  if (loading) return null;
  return (
    <>
      <HeaderTitle actions={actions}>{translate('app.menu.colloquiums')}
</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          <ListBase resource="Event" basePath="/Event" 
          filter={{ 'pair:hasType':process.env.REACT_APP_MIDDLEWARE_URL+"types/"+type }}
          sort={{ field: 'pair:startDate', order: 'ASC' }}>
            <CardsList CardComponent={EventCard} link="show" all />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default ColloquiumsPage;

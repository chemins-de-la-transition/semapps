import React from 'react';
import { ListBase, useTranslate } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from '../commons/lists/CardsList';
import CourseCard from '../resources/Agent/Activity/Course/CourseCard';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import Button from '../commons/Button';

const MyCoursesPage = () => {
  const { identity, loading } = useCheckAuthenticated();
  const translate = useTranslate();
  const actions = [<Button to="/Course/create">{translate('app.action.create')}</Button>];

  if (loading) return null;
  return (
    <>
      <HeaderTitle actions={actions}>{translate('app.menu.courses')}</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          <ListBase resource="Course" basePath="/Course" filter={{ 'cdlt:organizedBy': identity?.id }}>
            <CardsList CardComponent={CourseCard} link="show" all />
          </ListBase>
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default MyCoursesPage;

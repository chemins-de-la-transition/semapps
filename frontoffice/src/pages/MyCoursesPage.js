import React from 'react';
import { ListBase } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from '../commons/lists/CardsList';
import CourseCard from '../resources/Agent/Activity/Course/CourseCard';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import Button from '../commons/Button';

const actions = [<Button to="/Course/create">Ajouter</Button>];

const MyCoursesPage = () => {
  const { identity, loading } = useCheckAuthenticated();
  if (loading) return null;
  return (
    <>
      <HeaderTitle actions={actions}>Mes voyages</HeaderTitle>
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

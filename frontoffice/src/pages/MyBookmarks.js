import React from 'react';
import { Box } from '@material-ui/core';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import LikedList from '../commons/lists/LikedList';
import PathCard from '../resources/Idea/Path/PathCard';
import PlaceCard from '../resources/Place/PlaceCard';
import EventCard from '../resources/Activity/Event/EventCard';
import CourseCard from '../resources/Activity/Course/CourseCard';

const MyBookmarksPage = () => {
  const { identity } = useCheckAuthenticated();
  return (
    <>
      <HeaderTitle>Mes favoris</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          {identity?.id &&
            <Box>
              <LikedList
                id={identity.id}
                resource="Path"
                type="cdlt:Path" 
                title="Mes favoris" 
                subtitle="les chemins"
                headComment="Pour composer mon voyage à la carte" 
                CardComponent={PathCard}
              />
              <LikedList
                id={identity.id}
                resource="Place"
                type="pair:Place"
                title="Mes favoris"
                subtitle="les lieux"
                headComment="Pour composer mon voyage à la carte"
                CardComponent={PlaceCard}
              />
              <LikedList
                id={identity.id}
                resource="Event"
                type="pair:Event"
                title="Mes favoris"
                subtitle="les événements"
                headComment="Pour composer mon voyage à la carte"
                CardComponent={EventCard}
              />
              <LikedList
                id={identity.id}
                resource="Course"
                type="cdlt:Course"
                title="Mes favoris"
                subtitle="les voyages"
                headComment="Pour composer mon voyage à la carte"
                CardComponent={CourseCard}
              />
            </Box>
          }
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default MyBookmarksPage;

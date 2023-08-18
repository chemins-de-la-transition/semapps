import React from 'react';
import { useTranslate } from 'react-admin';
import { Box } from '@material-ui/core';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import LikedList from '../commons/lists/LikedList';
import PathCard from '../resources/Idea/Path/PathCard';
import PlaceCard from '../resources/Place/PlaceCard';
import EventCard from '../resources/Agent/Activity/Event/EventCard';
import CourseCard from '../resources/Agent/Activity/Course/CourseCard';

const MyBookmarksPage = () => {
  const { identity } = useCheckAuthenticated();
  const translate = useTranslate();
  return (
    <>
      <HeaderTitle>{translate('app.bookmark.title')}</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          {identity?.id &&
            <Box>
              <LikedList
                id={identity.id}
                resource="Path"
                type="cdlt:Path" 
                title={translate('app.bookmark.title')}
                subtitle={translate('app.bookmark.path')}
                headComment={translate('app.bookmark.pathHeadComment')}
                CardComponent={PathCard}
              />
              <LikedList
                id={identity.id}
                resource="Place"
                type="pair:Place"
                title={translate('app.bookmark.title')}
                subtitle={translate('app.bookmark.place')}
                headComment={translate('app.bookmark.placeHeadComment')}
                CardComponent={PlaceCard}
              />
              <LikedList
                id={identity.id}
                resource="Event"
                type="pair:Event"
                title={translate('app.bookmark.title')}
                subtitle={translate('app.bookmark.event')}
                headComment={translate('app.bookmark.eventHeadComment')}
                CardComponent={EventCard}
              />
              <LikedList
                id={identity.id}
                resource="Course"
                type="cdlt:Course"
                title={translate('app.bookmark.title')}
                subtitle={translate('app.bookmark.course')}
                headComment={translate('app.bookmark.courseHeadComment')}
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

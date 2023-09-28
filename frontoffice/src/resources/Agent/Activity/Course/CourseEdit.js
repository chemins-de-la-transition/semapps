import React from 'react';
import { Edit } from 'react-admin';
import { usePermissionsWithRefetch } from '@semapps/auth-provider';
import FullWidthBox from '../../../../commons/FullWidthBox';
import LargeContainer from '../../../../commons/LargeContainer';
import HeaderTitle from '../../../../commons/HeaderTitle';
import CourseTitle from './CourseTitle';
import CourseForm from './CourseForm';
import Button from '../../../../commons/Button';

const actions = [<Button to="/MyCourses">Liste</Button>];

const CourseEdit = (props) => {
  usePermissionsWithRefetch(props.id, 'edit', props.basePath);
  return (
    <>
      <HeaderTitle actions={actions} />
      <FullWidthBox>
        <LargeContainer>
          <Edit title={<CourseTitle />} {...props}>
            <CourseForm mode="edit" />
          </Edit>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default CourseEdit;

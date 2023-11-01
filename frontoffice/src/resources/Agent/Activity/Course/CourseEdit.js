import React from 'react';
import { Edit, useTranslate } from 'react-admin';
import { usePermissionsWithRefetch } from '@semapps/auth-provider';
import FullWidthBox from '../../../../commons/FullWidthBox';
import LargeContainer from '../../../../commons/LargeContainer';
import HeaderTitle from '../../../../commons/HeaderTitle';
import CourseTitle from './CourseTitle';
import CourseForm from './CourseForm';
import Button from '../../../../commons/Button';

const CourseEdit = (props) => {
  usePermissionsWithRefetch(props.id, 'edit', props.basePath);
  const translate = useTranslate();
  const actions = [<Button to="/MyCourses">{translate('app.action.list')}</Button>];
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

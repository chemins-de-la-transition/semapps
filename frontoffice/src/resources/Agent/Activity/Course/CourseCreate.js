import React from 'react';
import { Create, useTranslate } from 'react-admin';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from '@semapps/semantic-data-provider';
import FullWidthBox from '../../../../commons/FullWidthBox';
import LargeContainer from '../../../../commons/LargeContainer';
import HeaderTitle from '../../../../commons/HeaderTitle';
import CourseTitle from './CourseTitle';
import CourseForm from './CourseForm';
import Button from '../../../../commons/Button';

const CourseCreate = (props) => {
  const createContainerUri = useCreateContainer(props.resource);
  useCheckPermissions(createContainerUri, 'create');
  const translate = useTranslate();
  const actions = [<Button to="/MyCourses">{translate('app.action.list')}</Button>];
  return (
    <>
      <HeaderTitle actions={actions}>{translate('app.action.course.create')}</HeaderTitle>
      <FullWidthBox>
        <LargeContainer>
          <Create title={<CourseTitle />} actions={null} {...props}>
            <CourseForm mode="create" />
          </Create>
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default CourseCreate;

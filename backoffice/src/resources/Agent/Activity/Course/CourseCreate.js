import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';
import { v4 as uuid } from 'uuid';

const transform = (data) => {
    return ({
      ...data,
      'cdlt:referenceNumber':uuid().slice(0,8).toUpperCase()
    })
}

const CourseCreate = (props) => (
  <Create {...props} transform={transform}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Create>
);

export default CourseCreate;

import React from 'react';
import { useRecordContext } from 'react-admin';
import Department from '../pages/Department';

const DepartmentField = (props) => {
  const record = useRecordContext(props);
  return <Department postalCode={props.postalCode(record)} />;
};

export default DepartmentField;

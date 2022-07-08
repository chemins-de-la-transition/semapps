import React from 'react';
import { NumberField, useRecordContext } from 'react-admin';
import { Typography } from '@material-ui/core';
import NumberWithUnitField from './NumberWithUnitField';

const CapacityField = ({ source, min, max, variant, color }) => {
  const record = useRecordContext();
  if (!record[min]&&!record[max]) return null;
  return (
  (record[min]&&record[max]) ? (
    <Typography component="span" variant={variant} color={color}>
    De&nbsp;
    <NumberField source={min} variant={variant} color={color} />
    &nbsp;à&nbsp;
    <NumberField source={max} variant={variant} color={color} />
    &nbsp;personnes
  </Typography>
   ) : record[min] ?
    <NumberWithUnitField source={min} addLabel unit='personnes minimum' color="grey40" />
    : <NumberWithUnitField source={max} addLabel unit='personnes maximum' color="grey40" />
  )
};

export default CapacityField;

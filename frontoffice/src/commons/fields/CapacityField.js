import React from 'react';
import { NumberField, useRecordContext,useTranslate } from 'react-admin';
import { Typography } from '@material-ui/core';
import NumberWithUnitField from './NumberWithUnitField';

const CapacityField = ({ source, min, max, variant, color }) => {
  const record = useRecordContext();
  const translate = useTranslate();
  if (!record[min]&&!record[max]) return null;
  return (
  (record[min]&&record[max]) ? (
    <Typography component="span" variant={variant} color={color}>
    {translate('app.input.capacityFrom')} &nbsp;
    <NumberField source={min} variant={variant} color={color} />
    &nbsp;{translate('app.input.capacityTo')}&nbsp;
    <NumberField source={max} variant={variant} color={color} />
    &nbsp;{translate('app.input.organization.capacityUnit')}
  </Typography>
   ) : record[min] ?
    <NumberWithUnitField source={min} addLabel unit={translate('app.input.miminumPerson')} color="grey40" />
    : <NumberWithUnitField source={max} addLabel unit={translate('app.input.maximumPerson')} color="grey40" />
  )
};

export default CapacityField;

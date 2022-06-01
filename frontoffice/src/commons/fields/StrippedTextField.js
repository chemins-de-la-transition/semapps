import React from 'react';
import { Typography } from '@material-ui/core';
import { stripHtmlTags } from "../../utils";

const StrippedTextField = ({ record, source, ...rest }) => {
  const summary = record && stripHtmlTags(record[source]);
  return(
    <Typography {...rest}>{summary}</Typography>
  );
};

export default StrippedTextField;

import React from 'react';
import { useShowContext, Link, linkToRecord } from "react-admin";
import Button from "../Button";

const ApplyButton = () => {
  const { record } = useShowContext();
  if( !record ) return null;
  return (
    record.type === 'pair:Event' && record['pair:partOf'] ?
      <Link to={linkToRecord('/Course', Array.isArray(record['pair:partOf']) ? record['pair:partOf'][0] : record['pair:partOf'], 'show')}>
        <Button variant="contained" color="primary" typographyVariant="button1">
          Je candidate au parcours
        </Button>
      </Link>
      :
      <Button variant="contained" color="primary" typographyVariant="button1">
        Je candidate
      </Button>
  );
}

export default ApplyButton;

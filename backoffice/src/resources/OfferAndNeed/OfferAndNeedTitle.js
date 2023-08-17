import React from 'react';

const OfferAndNeedTitle = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default OfferAndNeedTitle;

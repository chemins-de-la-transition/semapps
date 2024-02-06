import React, { useState } from 'react';
import { ShowBase } from 'react-admin';
import { Box } from '@material-ui/core';
import RedirectIfUnpublished from './RedirectIfUnpublished';

const ShowBaseOnlyIfPublished = ({children, ...props}) => {
  const fields = React.Children.toArray(children);
  const [isPublished, setIsPublished] = useState(false);
  return (
    <ShowBase {...props}>
      <RedirectIfUnpublished setIsPublished={setIsPublished} />
      {isPublished && fields.map((field, i) => (
        <Box key={i}>
          {React.cloneElement(field)}
        </Box>
      ))}
    </ShowBase>
  );
};

export default ShowBaseOnlyIfPublished;

import React, { useState } from 'react';
import { ShowBase } from 'react-admin';
import RedirectIfUnpublished from './RedirectIfUnpublished';

const ShowBaseOnlyIfPublished = ({children, ...props}) => {
  const fields = React.Children.toArray(children);
  const [isPublished, setIsPublished] = useState(false);
  return (
    <ShowBase {...props}>
      <RedirectIfUnpublished setIsPublished={setIsPublished} />
      {isPublished && fields.map((field) => (
        <>
          {React.cloneElement(field)}
        </>
      ))}
    </ShowBase>
  );
};

export default ShowBaseOnlyIfPublished;

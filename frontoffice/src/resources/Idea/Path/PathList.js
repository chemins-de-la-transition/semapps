import React from 'react';
import ListBaseWithOnlyPublishedResources from '../../../commons/lists/ListBaseWithOnlyPublishedResources';
import { Box, Container } from '@material-ui/core';
import CardsList from '../../../commons/lists/CardsList';
import PathCard from './PathCard';

const PathList = (props) => {
  return (
    <ListBaseWithOnlyPublishedResources 
      perPage={1000} 
      {...props}
    >
      <Container>
        <Box sx={{ m: 4 }}>
          <CardsList CardComponent={PathCard} />
        </Box>
      </Container>
    </ListBaseWithOnlyPublishedResources>
  );
}

export default PathList;

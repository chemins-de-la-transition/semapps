import React from 'react';
import { ListBase } from 'react-admin';
import { Box, Container } from '@material-ui/core';
import CardsList from '../../../commons/lists/CardsList';
import PathCard from './PathCard';

const PathList = (props) => {
  return (
    <ListBase sort={{ field: 'dc:created', order: 'ASC' }} perPage={1000} {...props}>
      <Container>
        <Box sx={{ m: 4 }}>
          <CardsList CardComponent={PathCard} />
        </Box>
      </Container>
    </ListBase>
  );
}

export default PathList;

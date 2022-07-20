import React from 'react';
import { Box } from '@material-ui/core';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import { ListBase } from 'react-admin';
import FullWidthBox from '../commons/FullWidthBox';
import LargeContainer from '../commons/LargeContainer';
import HeaderTitle from '../commons/HeaderTitle';
import ReservationList from '../commons/lists/ReservationList';
import RegistrationCard from '../resources/Registration/RegistrationCard';


const MyReservationsPage = () => {
  const { identity } = useCheckAuthenticated();

  return (
    <>
      <HeaderTitle>Mes réservations</HeaderTitle>
      <br />
      <FullWidthBox>
        <LargeContainer>
          {identity?.id &&
            <Box>
              <ListBase resource="Registration" basePath="/Registration" filter={{ 'cdlt:registrant': identity?.id }}>
                <ReservationList CardComponent={RegistrationCard} link={false} />
              </ListBase>
            </Box>
          }
        </LargeContainer>
      </FullWidthBox>
    </>
  );
};

export default MyReservationsPage;

import React, { forwardRef } from 'react';
import { UserMenu as RaUserMenu, MenuItemLink, useGetIdentity } from 'react-admin';
import PlaceIcon from '../svg/PlaceIcon';
import EventIcon from '@material-ui/icons/Event';

const MyPlacesMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/MyPlaces" primaryText="Mes lieux" leftIcon={<PlaceIcon />} onClick={onClick} />
));

const MyEventsMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/MyEvents" primaryText="Mes événements" leftIcon={<EventIcon />} onClick={onClick} />
));

const LoginMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/login" primaryText="Se connecter" onClick={onClick} />
));

const UserMenu = ({ logout, ...otherProps }) => {
  const { identity } = useGetIdentity();
  return (
    <RaUserMenu {...otherProps}>
      {identity && identity.id !== '' ? (
        [
          <MyPlacesMenu key="my-places" />,
          <MyEventsMenu key="my-events" />,
          React.cloneElement(logout, { key: 'logout' }),
        ]
      ) : (
        <LoginMenu />
      )}
    </RaUserMenu>
  );
};

export default UserMenu;

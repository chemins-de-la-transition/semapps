import React, { forwardRef, useMemo } from 'react';
import { UserMenu as RaUserMenu, MenuItemLink, useGetIdentity } from 'react-admin';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaceIcon from '../svg/PlaceIcon';
import EventIcon from '@material-ui/icons/Event';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

const MyBookmarks = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/MyBookmarks" primaryText="Mes favoris" leftIcon={<FavoriteIcon />} onClick={onClick} />
));

const MyPlacesMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/MyPlaces" primaryText="Mes lieux" leftIcon={<PlaceIcon />} onClick={onClick} />
));

const MyEventsMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/MyEvents" primaryText="Mes événements" leftIcon={<EventIcon />} onClick={onClick} />
));

const MyOrganizationsMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/MyOrganizations" primaryText="Mes organisations" leftIcon={<HomeIcon />} onClick={onClick} />
));

const LoginMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/login" primaryText="Se connecter" onClick={onClick} />
));

const SignupMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/login?signup=true" primaryText="Créer un compte" onClick={onClick} />
));

const EditProfileMenu = forwardRef(({ onClick, webId }, ref) => (
  <MenuItemLink
    ref={ref}
    to={`/Person/${encodeURIComponent(webId)}/show`}
    primaryText="Mon profil"
    leftIcon={<AccountCircleIcon />}
    onClick={onClick}
  />
));

const UserMenu = ({ logout, ...otherProps }) => {
  const { identity } = useGetIdentity();
  const TRAVELER_TYPE_URL = process.env.REACT_APP_MIDDLEWARE_URL + 'types/traveler';
  const isTraveler = useMemo( () => {
    return !identity?.webIdData?.['pair:hasType'] || identity?.webIdData?.['pair:hasType'] === TRAVELER_TYPE_URL
  }, [identity, TRAVELER_TYPE_URL]);

  return (
    <RaUserMenu {...otherProps}>
      {identity && identity.id !== '' ? (
        isTraveler ? (
          [
            <MyBookmarks key="my-bookmarks" />,
            <EditProfileMenu webId={identity.id} key="edit" />,
            React.cloneElement(logout, { key: 'logout' }),
          ]
        ) : (
          [
            <MyBookmarks key="my-bookmarks" />,
            <EditProfileMenu webId={identity.id} key="edit" />,
            <MyOrganizationsMenu key="my-organizations" />,
            <MyPlacesMenu key="my-places" />,
            <MyEventsMenu key="my-events" />,
            React.cloneElement(logout, { key: 'logout' }),
          ]
        )
      ) : (
        [<SignupMenu key="signup" />, <LoginMenu key="login" />]
      )}
    </RaUserMenu>
  );
};

export default UserMenu;

import React, { forwardRef, useMemo } from 'react';
import { UserMenu as RaUserMenu, MenuItemLink, useGetIdentity, useTranslate } from 'react-admin';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaceIcon from '../svg/PlaceIcon';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import EventIcon from '@material-ui/icons/Event';
import CourseIcon from '@material-ui/icons/DateRange';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import NotificationsIcon from '@material-ui/icons/Notifications';

const MyBookmarks = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/MyBookmarks"
      primaryText={translate('app.menu.bookmarks')}
      leftIcon={<FavoriteIcon />}
      onClick={onClick}
    />
  );
});

const MyPlacesMenu = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/MyPlaces"
      primaryText={translate('app.menu.places')}
      leftIcon={<PlaceIcon />}
      onClick={onClick}
    />
  );
});

const MyEventsMenu = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/MyEvents"
      primaryText={translate('app.menu.events')}
      leftIcon={<EventIcon />}
      onClick={onClick}
    />
  );
});

const MyCoursesMenu = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/MyCourses"
      primaryText={translate('app.menu.courses')}
      leftIcon={<CourseIcon />}
      onClick={onClick}
    />
  );
})

const MyOrganizationsMenu = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/MyOrganizations"
      primaryText={translate('app.menu.organizations')}
      leftIcon={<HomeIcon />}
      onClick={onClick}
    />
  );
});

const MyReservationsMenu = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/MyReservations"
      primaryText={translate('app.menu.reservations')}
      leftIcon={<WorkOutlineIcon />}
      onClick={onClick}
    />
  );
});

const LoginMenu = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/login"
      primaryText={translate('app.menu.login')}
      onClick={onClick}
    />
  );
});

const SignupMenu = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to="/login?signup=true"
      primaryText={translate('app.menu.signup')}
      onClick={onClick}
    />
  );
});

const EditProfileMenu = forwardRef(({ onClick, webId }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink
      ref={ref}
      to={`/Person/${encodeURIComponent(webId)}/show`}
      primaryText={translate('app.menu.profile')}
      leftIcon={<AccountCircleIcon />}
      onClick={onClick}
    />
  );
});

const MyOfferAndNeedMenu = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink ref={ref} to="/MyOffersAndNeeds" primaryText={translate('app.action.offerAndNeed.mine')} leftIcon={<AnnouncementIcon />} onClick={onClick} />
  )
});

const MyAlertMenu = forwardRef(({ onClick }, ref) => {
  const translate = useTranslate();
  return (
    <MenuItemLink ref={ref} to="/MyAlerts" primaryText={translate('app.action.alert.mine')} leftIcon={<NotificationsIcon />} onClick={onClick} />
  )
});

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
            <MyCoursesMenu key="my-courses" />,
            <MyReservationsMenu key="my-reservations" />,
            <MyOfferAndNeedMenu key="my-offers-and-needs" />,
            <MyAlertMenu key="my-alerts" />,
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
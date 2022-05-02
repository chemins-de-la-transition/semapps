import urlJoin from 'url-join';
import { authProvider as semappsAuthProvider } from '@semapps/auth-provider';
import { httpClient } from '@semapps/semantic-data-provider';

const ADMIN_TYPE_URL = urlJoin(process.env.REACT_APP_MIDDLEWARE_URL, 'types', 'admin');
const CONTRIBUTOR_TYPE_URL = urlJoin(process.env.REACT_APP_MIDDLEWARE_URL, 'types', 'contributor');

const authProvider = semappsAuthProvider({
  middlewareUri: process.env.REACT_APP_MIDDLEWARE_URL,
  allowAnonymous: false,
  checkUser: (userData) =>
    Array.isArray(userData['pair:hasType'])
      ? userData['pair:hasType'].includes(ADMIN_TYPE_URL) || userData['pair:hasType'].includes(CONTRIBUTOR_TYPE_URL)
      : userData['pair:hasType'] === ADMIN_TYPE_URL || userData['pair:hasType'] === CONTRIBUTOR_TYPE_URL,
  httpClient,
  checkPermissions: true
});

export default authProvider;

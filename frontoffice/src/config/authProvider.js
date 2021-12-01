import urlJoin from 'url-join';
import { authProvider as semappsAuthProvider } from '@semapps/auth-provider';
import { httpClient } from '@semapps/semantic-data-provider';
import * as resources from '../resources';

const ADMIN_TYPE_URL = urlJoin(process.env.REACT_APP_MIDDLEWARE_URL, 'types', 'admin');
const ACTOR_TYPE_URL = urlJoin(process.env.REACT_APP_MIDDLEWARE_URL, 'types', 'actor');

const authProvider = semappsAuthProvider({
  middlewareUri: process.env.REACT_APP_MIDDLEWARE_URL,
  allowAnonymous: true,
  checkUser: (userData) =>
    Array.isArray(userData['pair:hasType'])
      ? userData['pair:hasType'].includes(ACTOR_TYPE_URL) || userData['pair:hasType'].includes(ADMIN_TYPE_URL)
      : userData['pair:hasType'] === ACTOR_TYPE_URL || userData['pair:hasType'] === ADMIN_TYPE_URL,
  httpClient,
  checkPermissions: true
});

export default authProvider;

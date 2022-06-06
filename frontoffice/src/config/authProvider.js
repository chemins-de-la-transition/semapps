import { authProvider as semappsAuthProvider } from '@semapps/auth-provider';
import { httpClient } from '@semapps/semantic-data-provider';

const authProvider = semappsAuthProvider({
  middlewareUri: process.env.REACT_APP_MIDDLEWARE_URL,
  allowAnonymous: true,
  httpClient,
  checkPermissions: true
});

export default authProvider;

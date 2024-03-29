import { dataProvider } from '@semapps/semantic-data-provider';
import ontologies from './ontologies.json';
import dataServers from "./dataServers";
import * as resources from '../resources';

export default dataProvider({
  dataServers,
  resources: Object.fromEntries(Object.entries(resources).map(([k, v]) => [k, v.dataModel])),
  ontologies,
  jsonContext: process.env.REACT_APP_MIDDLEWARE_URL + 'context.json',
});

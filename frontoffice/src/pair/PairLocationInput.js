import React from 'react';
import { extractContext, LocationInput } from '@semapps/geo-components';

const PairLocationInput = (props) => (
  <LocationInput
    mapboxConfig={{
      access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
      types: ['place', 'address', 'region'],
      country: ['al', 'ad', 'at', 'by', 'be', 'ba', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee',
      'fi', 'fr', 'de', 'gr', 'hu', 'is', 'ie', 'it', 'xk', 'lv', 'li', 'lt',
      'lu', 'mk', 'mt', 'md', 'mc', 'me', 'nl', 'no', 'pl', 'pt', 'ro', 'ru',
      'sm', 'rs', 'sk', 'si', 'es', 'se', 'ch', 'ua', 'gb', 'va'],
    }}
    parse={(value) => {
      const countryName = extractContext(value.context, 'country');
      return ({
        type: 'pair:Place',
        'pair:label': value.place_name,
        'pair:longitude': value.center[0],
        'pair:latitude': value.center[1],
        'pair:hasPostalAddress': {
          type: 'pair:PostalAddress',
          'pair:addressLocality': value.place_type[0] === 'place' ? value.text : value.place_type[0] === 'address' ? extractContext(value.context, 'place') : undefined,
          'pair:addressStreet': value.place_type[0] === 'address' ? [value.address, value.text].join(' ') : undefined,
          'pair:addressZipCode': value.place_type[0] !== 'region' ? extractContext(value.context, 'postcode') : countryName === 'France' ? value.properties?.short_code?.substring(3) : undefined,
          'pair:addressCountry': countryName,
        },
      })
    }}
    optionText={(resource) => resource['pair:label']}
    {...props}
  />
);

export default PairLocationInput;

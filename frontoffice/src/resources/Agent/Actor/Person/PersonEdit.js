import React from 'react';
import { Edit } from 'react-admin';
import { ThemeProvider } from '@material-ui/core';
import personTheme from '../../../../config/themes/personTheme';
import { useCheckPermissions } from '@semapps/auth-provider';
import FullWidthBox from '../../../../commons/FullWidthBox';
import LargeContainer from '../../../../commons/LargeContainer';
import HeaderTitle from '../../../../commons/HeaderTitle';
import PersonTitle from './PersonTitle';
import PersonForm from './PersonForm';

export const PersonEdit = (props) => {
  useCheckPermissions(props.id, 'edit', props.basePath);
  return (
    <ThemeProvider theme={personTheme}>
      <HeaderTitle />
      <FullWidthBox>
        <LargeContainer>
          <Edit
            title={<PersonTitle />}
            transform={(data) => ({
              ...data,
              'pair:label': 
                data['pair:alternativeLabel']
                  ? data['pair:alternativeLabel']
                  : `${data['pair:firstName']} ${data['pair:lastName']?.toUpperCase()}`
            })}
            actions={null}
            {...props}
          >
            <PersonForm />
          </Edit>
        </LargeContainer>
    </FullWidthBox>
    <br />
  </ThemeProvider>
  )
}

export default PersonEdit;

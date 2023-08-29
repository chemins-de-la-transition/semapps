import React from 'react';
import { FormDataConsumer, RadioButtonGroupInput, SelectInput, BooleanInput, TextInput, useTranslate } from 'react-admin';



export const RegistrationInput = ({ directRegistrationSource, registrationOptionSource, jotformLinkSource, registrationLinkSource, ...rest }) => {  
  const translate = useTranslate();
  const registrationOptions = [
    { id: 0, name: translate('app.input.chooseDefaultForm')},
    { id: 2, name: translate('app.input.externalForm')},
];

const jotformOptions = [
  { id: "https://form.jotform.com/212722469132048?", name: translate('app.input.defaultForm')},
  // { id: "0", name: 'Formulaire événement' },
  // { id: "1", name: 'Formulaire voyage' },
  // { id: "2", name: 'Formulaire chemin' },
  // { id: "3", name: 'Formulaire lieu' },
];
  return (
    <>
      <BooleanInput source={directRegistrationSource} fullWidth {...rest}/>
      <FormDataConsumer {...rest}>
          {({ formData, ...rest }) => 
          formData[directRegistrationSource] &&
            <>
            <RadioButtonGroupInput
              source={registrationOptionSource}
              label={translate('app.input.chooseRegistrationType')}
              choices={registrationOptions}
              {...rest}
              allowEmpty
            />
            <FormDataConsumer {...rest}>
                {({ formData, ...rest }) => 
                (formData[registrationOptionSource] === 0) ?
                    <SelectInput
                        label={translate('app.input.chooseJotform')}
                        source={jotformLinkSource}
                        choices={jotformOptions}
                        {...rest}
                        allowEmpty
                    />
                : (formData[registrationOptionSource] === 2) &&
                <TextInput 
                    label={translate('app.input.externalForm')}
                    source={registrationLinkSource}
                    {...rest}
                    type="url"
                />
                }
            </FormDataConsumer>
            </>
        }
      </FormDataConsumer>
    </>
  )
}

export default RegistrationInput;

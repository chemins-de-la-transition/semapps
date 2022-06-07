import React from 'react';
import { FormDataConsumer, RadioButtonGroupInput, SelectInput, BooleanInput, TextInput } from 'react-admin';

const registrationOptions = [
    { id: 0, name: "Utiliser un formulaire par défaut"},
    { id: 2, name: "Utiliser un système d'inscription externe"},
]

const jotformOptions = [
    { id: "https://form.jotform.com/212722469132048?", name: "Formulaire par défaut"},
    // { id: "0", name: 'Formulaire événement' },
    // { id: "1", name: 'Formulaire voyage' },
    // { id: "2", name: 'Formulaire chemin' },
    // { id: "3", name: 'Formulaire lieu' },
]


export const RegistrationInput = ({ directRegistrationSource, registrationOptionSource, jotformLinkSource, registrationLinkSource, ...rest }) => (
    <>
      <BooleanInput source={directRegistrationSource} fullWidth {...rest}/>
      <FormDataConsumer {...rest}>
          {({ formData, ...rest }) => 
          formData[directRegistrationSource] &&
            <>
            <RadioButtonGroupInput
              source={registrationOptionSource}
              label={"Choisissez une option d'inscription"}
              choices={registrationOptions}
              {...rest}
              allowEmpty
            />
            <FormDataConsumer {...rest}>
                {({ formData, ...rest }) => 
                (formData[registrationOptionSource] === 0) ?
                    <SelectInput
                        label={"Choisissez un formulaire JotForm"}
                        source={jotformLinkSource}
                        choices={jotformOptions}
                        {...rest}
                        allowEmpty
                    />
                : (formData[registrationOptionSource] === 2) &&
                <TextInput 
                    label={"Lien du système d'inscription externe" } 
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

export default RegistrationInput ;
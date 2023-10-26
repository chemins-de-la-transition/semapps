import React from 'react';
import { SimpleForm, FormDataConsumer, SelectInput, TextInput, useGetList, useGetIdentity, required } from 'react-admin';
import { Typography, makeStyles } from '@material-ui/core';
import Create from "../../../layout/create/Create";
import { ReferenceInput } from '@semapps/input-components';
import Markdown from 'markdown-to-jsx';
import { PersonsInput } from '../../../pair';

const useStyles = makeStyles((theme) => ({
  markdown: {
    padding: 16,
    marginTop: 4,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
  }
}));

const OfferAndNeedCreate = (props) => {
  const classes = useStyles();
  const { identity } = useGetIdentity();
  const { data } = useGetList('OfferAndNeedTemplate');
  return (
    <Create {...props} >
      <SimpleForm>
        <TextInput source="pair:label" fullWidth />
        <ReferenceInput reference="OfferAndNeedTemplate" source="cdlt:hasTemplate" fullWidth >
          <SelectInput optionText="pair:label" />
        </ReferenceInput>
        <FormDataConsumer>
          {({ formData, record, ...rest }) => {
            if (formData?.["cdlt:hasTemplate"]) {
              const template = Object.values(data).find(d => d.id === formData["cdlt:hasTemplate"] );
              if (template) {
                formData["pair:description"] = template["pair:description"];
                return (
                  <>
                    <Typography variant="h6" color="primary" component="div">{template["pair:label"]} :</Typography>
                    {template["pair:description"] && <Markdown className={classes.markdown}>{template["pair:description"]}</Markdown>}
                  </>
                )
              }
            }
          }}
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, record, ...rest }) => {
            if (identity?.id) {
              formData["cdlt:proposedBy"] = identity.id;
              return (<PersonsInput source="cdlt:proposedBy" fullWidth validate={[required()]} />);
            }
          }}  
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
}

export default OfferAndNeedCreate;

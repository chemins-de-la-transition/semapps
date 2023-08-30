import React from 'react';
import { SimpleForm, FormDataConsumer, SelectInput, TextInput, useGetList } from 'react-admin';
import { Typography, makeStyles } from '@material-ui/core';
import Create from "../../../layout/create/Create";
import { ReferenceInput } from '@semapps/input-components';
import Markdown from 'markdown-to-jsx';

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
      </SimpleForm>
    </Create>
  );
}

export default OfferAndNeedCreate;

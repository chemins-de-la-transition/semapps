import React from 'react';
import {
  Create,
  useTranslate,
  SimpleForm,
  FormDataConsumer,
  SelectInput,
  TextInput,
  required,
  useGetList,
  useGetIdentity
} from 'react-admin';
import { Typography, makeStyles } from '@material-ui/core';
import { useCheckPermissions } from '@semapps/auth-provider';
import { useCreateContainer } from "@semapps/semantic-data-provider";
import { ReferenceInput } from '@semapps/input-components';
import Markdown from 'markdown-to-jsx';
import { PersonsInput } from '../../pair';
import FullWidthBox from '../../commons/FullWidthBox';
import LargeContainer from '../../commons/LargeContainer';
import HeaderTitle from '../../commons/HeaderTitle';
import Button from '../../commons/Button';

const useStyles = makeStyles((theme) => ({
  markdown: {
    padding: 16,
    marginTop: 4,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
  }
}));

const OfferAndNeedCreate = (props) => {
  const createContainerUri = useCreateContainer(props.resource);
  useCheckPermissions(createContainerUri, 'create');
  const { identity } = useGetIdentity();
  const classes = useStyles();
  const translate = useTranslate();
  const { data } = useGetList('OfferAndNeedTemplate');
  const actions = [<Button to="/MyOffersAndNeeds">{translate('app.action.offerAndNeed.mine')}</Button>];
  return (
    <>
      <HeaderTitle actions={actions}>{translate('app.action.offerAndNeed.create')}</HeaderTitle>
      <FullWidthBox>
        <LargeContainer>
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
        </LargeContainer>
      </FullWidthBox>
      <br />
    </>
  );
};

export default OfferAndNeedCreate;

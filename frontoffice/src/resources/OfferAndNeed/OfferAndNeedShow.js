import React from 'react';
import { ChipField, ShowBase, SingleFieldList, TextField, UrlField, useTranslate } from 'react-admin';
import { ThemeProvider, Box } from '@material-ui/core';
import resourceTheme from '../../config/themes/resourceTheme';
import resourceShowStyle from '../../commons/style/resourceShowStyle';
import { MapField } from '@semapps/geo-components';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import MarkdownField from '../../commons/fields/MarkdownField';
import HeaderShow from '../../commons/HeaderShow';
import StickyCard from '../../commons/StickyCard';
import BodyList from '../../commons/lists/BodyList/BodyList';
import OfferAndNeedDetails from './OfferAndNeedDetails';
import SectorField from '../../commons/fields/SectorField';
import ContactButton from "../../commons/buttons/ContactButton";
import GroupOfFields from '../../commons/fields/GroupOfFields';
import { linkToFilteredList } from "../../utils";

const useStyles = resourceShowStyle;

const OfferAndNeedShow = (props) => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <ThemeProvider theme={resourceTheme}>
      <ShowBase {...props}>
        <Box className={classes.mainContainer}>
          <HeaderShow
            type="pair:hasType"
            details={<OfferAndNeedDetails />}
            actionButton={<ContactButton label={translate('app.action.offerAndNeed.contact')} />}
          />
          <BodyList
            aside={
              <StickyCard
                actionButton={<ContactButton label={translate('app.action.offerAndNeed.contact')} />}
              >
                <OfferAndNeedDetails orientation="vertical" />
              </StickyCard>
            }
          >
            <GroupOfFields
              title="Description"
              sources={["pair:comment","pair:hasSector","pair:hasType","pair:hasTopic","pair:description"]}
              addLabel
              noBorder
            >
              <ReferenceArrayField source="pair:hasType" reference="Type">
                <SeparatedListField link={false} separator=" / ">
                  <TextField variant="body2" source="pair:label" />
                </SeparatedListField>
              </ReferenceArrayField>
              <TextField variant="body2" source="pair:comment"/>
              <ReferenceArrayField reference="Sector" source="pair:hasSector">
                <SingleFieldList linkType={false}>
                  <SectorField />
                </SingleFieldList>
              </ReferenceArrayField>
              <ReferenceArrayField reference="Topic" source="pair:hasTopic">
                <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasTopic')} separator="">
                  <ChipField source="pair:label" color="primary" className={classes.chipField}/>
                </SeparatedListField>
              </ReferenceArrayField>
              <MarkdownField source="pair:description" />
            </GroupOfFields>
            <MapField
              source="pair:hasLocation"
              address={(record) => record?.['pair:hasLocation']?.['pair:label']}
              latitude={(record) => record?.['pair:hasLocation']?.['pair:latitude']}
              longitude={(record) => record?.['pair:hasLocation']?.['pair:longitude']}
              typographyProps={{ variant: 'body2', color: 'secondary' }}
              scrollWheelZoom={false}
              dragging={false}
            />
            <UrlField source="pair:homePage" className={classes.urlField} />
          </BodyList>
        </Box>
      </ShowBase>
    </ThemeProvider>
  );
};

export default OfferAndNeedShow;

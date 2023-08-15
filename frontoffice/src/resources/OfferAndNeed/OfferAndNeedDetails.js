import React from 'react';
import resourceDetailsStyle from '../../commons/style/resourceDetailsStyle';
import { TextField } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField, ReferenceField, ReferenceArrayField } from '@semapps/field-components';
import { linkToFilteredList } from "../../utils";
import IconsList from '../../commons/lists/IconsList';
import TopicIcon from '../../svg/TopicIcon';
import OfferAndNeedIcon from '../../svg/OfferAndNeedIcon';
import TypeIcon from '../../svg/TypeIcon';
import ActorIcon from '../../svg/ActorIcon';

const useStyles = resourceDetailsStyle;

const OfferAndNeedDetails = (props) => { 
  const { orientation } = props;
  const isVertical = orientation === 'vertical';
  const separator = isVertical ? "" : ", "
  const classes = useStyles({ isVertical });
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });

  return(
    <Box className={classes.mainContainer}>
        <IconsList {...props}>
          { ( !isVertical || sm ) && 
            <ReferenceArrayField source="pair:hasType" reference="Type" icon={<TypeIcon />}>
              <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasType')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { ( !isVertical || sm ) && 
            <ReferenceArrayField reference="Sector" source="pair:hasSector" icon={<TopicIcon />}>
              <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasSector')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { ( !isVertical || sm ) && 
            <ReferenceField label="Région" reference="Region" source="cdlt:hasRegion" icon={<OfferAndNeedIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')}>
              <TextField source="pair:label" />
            </ReferenceField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField label="Hôte" reference="Person" source="cdlt:proposedBy" icon={<ActorIcon/>}>
              <SeparatedListField linkType="show">
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
          <ReferenceArrayField reference="Organization" source="cdlt:sponsoredBy" icon={<ActorIcon />}>
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        </IconsList>
    </Box>
  );
}

export default OfferAndNeedDetails;
import React from 'react';
import resourceDetailsStyle from '../../../../commons/style/resourceDetailsStyle';
import { TextField, useTranslate } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField, ReferenceField, ReferenceArrayField } from '@semapps/field-components';
import { linkToFilteredList } from "../../../../utils";
import IconsList from '../../../../commons/lists/IconsList';
import TopicIcon from '../../../../svg/TopicIcon';
import PlaceIcon from '../../../../svg/PlaceIcon';
import TypeIcon from '../../../../svg/TypeIcon';
import ActorIcon from '../../../../svg/ActorIcon';
import CalendarIcon from '../../../../svg/CalendarIcon';

const useStyles = resourceDetailsStyle;

const PersonDetails = (props) => { 
  const { orientation } = props;
  const isVertical = orientation === 'vertical';
  const separator = isVertical ? "" : ", "
  const classes = useStyles({ isVertical });
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });
  const translate = useTranslate();

  return(
    <Box className={classes.mainContainer}>
        <IconsList {...props}>
          { ( !isVertical || sm ) && 
            <ReferenceField label={translate('app.card.person.hasRegion')} reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')}>
            <TextField source="pair:label" />
            </ReferenceField>
          }
          { ( !isVertical || sm ) && 
            <ReferenceField label={translate('app.card.person.hasType')} reference="Type" source="pair:hasType" icon={<TypeIcon /> } link={false}>
              <TextField source="pair:label" />
            </ReferenceField>
          }
          { ( !isVertical || sm ) && 
            <ReferenceArrayField reference="Sector" source="pair:hasSector" icon={<TopicIcon />}>
              <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasSector')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Place" source="cdlt:proposes" icon={<PlaceIcon />} label={translate('app.card.person.proposes')}>
            <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Organization" source="pair:affiliatedBy" icon={<ActorIcon />} label={translate('app.card.person.affiliatedBy')}>
            <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Path" source="cdlt:supports" icon={<ActorIcon />} label={translate('app.card.person.supports')}>
            <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Activity" source="cdlt:organizes" icon={<ActorIcon />} label={translate('app.card.person.organizes')}>
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Activity" source="cdlt:mentorOn" icon={<CalendarIcon />} label={translate('app.card.person.mentorOn')}>
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
        </IconsList>
    </Box>
  );
}

export default PersonDetails;

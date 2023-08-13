import React from 'react';
import resourceDetailsStyle from '../../../../commons/style/resourceDetailsStyle';
import { TextField, Link, useListContext, linkToRecord, useTranslate } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField, ReferenceField, ReferenceArrayField } from '@semapps/field-components';
import { linkToFilteredList } from "../../../../utils";
import IconsList from '../../../../commons/lists/IconsList';
import TopicIcon from '../../../../svg/TopicIcon';
import PlaceIcon from '../../../../svg/PlaceIcon';
import GuardianIcon from '../../../../svg/GuardianIcon';
import ActorIcon from '../../../../svg/ActorIcon';
import PathIcon from '../../../../svg/PathIcon';
import CourseIcon from '../../../../svg/CourseIcon';
import CalendarIcon from '../../../../svg/CalendarIcon';

const useStyles = resourceDetailsStyle;

const OrganizationDetails = (props) => { 
  const { orientation } = props;
  const isVertical = orientation === 'vertical';
  const separator = isVertical ? "" : ", "
  const classes = useStyles({ isVertical });
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });
  const translate = useTranslate();
  
  const FilteredEvents = () => {
    const { ids, data, basePath } = useListContext();
    const futureEvents = ids.filter((id) => data[id] && (data[id]?.['pair:startDate']>(new Date()).toISOString()) )
    return (
      futureEvents.slice(0,5).map((id) =>
        <Link to={linkToRecord(basePath, id, "show")} key={id}>
          <TextField record={data[id]} source="pair:label" />
        </Link>
      )
    )
  };

  return(
    <Box className={classes.mainContainer}>
        <IconsList {...props}>
          { ( !isVertical || sm ) && 
            <ReferenceField label={translate('app.card.organization.hasRegion')} reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')}>
              <TextField source="pair:label" />
            </ReferenceField>
          }
          { ( !isVertical || sm ) && 
            <ReferenceArrayField source="pair:hasType" reference="Type" icon={<GuardianIcon />}>
              <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasType')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { ( !isVertical || sm ) && 
            <ReferenceArrayField source="cdlt:hasCourseType" reference="Type" icon={<CourseIcon />}>
              <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:hasCourseType')} separator={separator}>
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
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Place" source="cdlt:organizationHostedIn" icon={<PlaceIcon />} label={translate('app.card.organization.organizationHostedIn')}>
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Person" source="pair:affiliates" icon={<ActorIcon />} label={translate('app.card.organization.affiliates')}>
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Path" source="cdlt:supports" icon={<PathIcon />} label={translate('app.card.organization.supports')}>
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Activity" source="cdlt:organizes" icon={<CalendarIcon />} label={translate('app.card.organization.organizes')}>
              <FilteredEvents />
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Organization" source="pair:partnerOf" icon={<ActorIcon />} label={translate('app.card.organization.partnerOf')}>
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
        </IconsList>
    </Box>
  );
}

export default OrganizationDetails;

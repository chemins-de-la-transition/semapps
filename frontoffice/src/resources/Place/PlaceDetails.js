import React from 'react';
import resourceDetailsStyle from '../../commons/style/resourceDetailsStyle';
import { TextField } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField, ReferenceField, ReferenceArrayField } from '@semapps/field-components';
import { linkToFilteredList } from "../../utils";
import IconsList from '../../commons/lists/IconsList';
import OnlyFutureEventLinks from '../../commons/lists/EventsList/OnlyFutureEventLinks';
import TopicIcon from '../../svg/TopicIcon';
import CourseIcon from '../../svg/CourseIcon';
import PathIcon from '../../svg/PathIcon';
import PlaceIcon from '../../svg/PlaceIcon';
import TypeIcon from '../../svg/TypeIcon';
import ActorIcon from '../../svg/ActorIcon';
import GuardianIcon from '../../svg/GuardianIcon';
import CalendarIcon from '../../svg/CalendarIcon';

const useStyles = resourceDetailsStyle;

const PlaceDetails = (props) => { 
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
          { ( !isVertical || sm ) && 
            <ReferenceArrayField reference="Path" source="cdlt:placeOn" icon={<PathIcon />}>
              <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:placeOn')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { ( !isVertical || sm ) && 
            <ReferenceField  reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')}>
              <TextField source="pair:label" />
            </ReferenceField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Person" source="cdlt:proposedBy" icon={<ActorIcon/>}>
              <SeparatedListField linkType="show">
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField source="cdlt:hostsOrganization" reference="Organization" icon={<GuardianIcon />} filter={{ 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' }}>
              <SeparatedListField linkType="show">
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Path" source="cdlt:placeOn" icon={<PathIcon />} >
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField source="pair:hosts" reference="Event" icon={<CalendarIcon />} filter={{ 'cdlt:hasPublicationStatus': process.env.REACT_APP_MIDDLEWARE_URL + 'publication-status/valide' }}>
              <OnlyFutureEventLinks />
            </ReferenceArrayField>
          }
        </IconsList>
    </Box>
  );
}

export default PlaceDetails;
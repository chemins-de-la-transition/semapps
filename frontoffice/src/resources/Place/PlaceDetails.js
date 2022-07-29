import React from 'react';
import resourceDetailsStyle from '../../commons/style/resourceDetailsStyle';
import { TextField,useListContext, Link, linkToRecord } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../utils";
import IconsList from '../../commons/lists/IconsList';
import ThemeIcon from '../../svg/ThemeIcon';
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

  const FilteredEvents = () => {
    const { ids, data, basePath } = useListContext();
    const futureEvents = ids.filter((id) => data[id] && (data[id]?.['pair:endDate']>(new Date()).toISOString()) )
    return (
      futureEvents.slice(0,5).map((id) =>
        <Link to={linkToRecord(basePath, id, "show")}>
          <TextField record={data[id]} source="pair:label" />
        </Link>
      )
    )
  };

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
            <ReferenceArrayField reference="Sector" source="pair:hasSector" icon={<ThemeIcon />}>
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
            <ReferenceField label="Région" reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')}>
              <TextField source="pair:label" />
            </ReferenceField>
          }
          { (isVertical || sm ) && 
            <ReferenceField label="Hôte" reference="Person" source="cdlt:proposedBy" icon={<ActorIcon/>} link="show" >
              <TextField source="pair:label" />
            </ReferenceField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField source="cdlt:hostsOrganization" reference="Organization" icon={<GuardianIcon />}>
              <SeparatedListField linkType="show">
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Path" source="cdlt:placeOn" icon={<PathIcon />} label="Fait partie de">
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField source="pair:hosts" reference="Event" icon={<CalendarIcon />} label="Prochains événements">
              <FilteredEvents />
            </ReferenceArrayField>
          }
        </IconsList>
    </Box>
  );
}

export default PlaceDetails;
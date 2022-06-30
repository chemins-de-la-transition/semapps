import React from 'react';
import resourceDetailsStyle from '../../../../commons/style/resourceDetailsStyle';
import { TextField, Link, useListContext, linkToRecord } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField } from '@semapps/archipelago-layout';
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
            <ReferenceField label="Région" reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')}>
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
            <ReferenceArrayField reference="Place" source="cdlt:organizationHostedIn" icon={<PlaceIcon />} label="Où sommes nous">
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Person" source="pair:affiliates" icon={<ActorIcon />} label="A pour contributeur.trice">
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Path" source="cdlt:supports" icon={<PathIcon />} label="Contributeur de">
              <SeparatedListField link="show" separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Activity" source="cdlt:organizes" icon={<CalendarIcon />} label="Prochaines activités">
              <FilteredEvents />
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Organization" source="pair:partnerOf" icon={<ActorIcon />} label="Partenaire de">
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

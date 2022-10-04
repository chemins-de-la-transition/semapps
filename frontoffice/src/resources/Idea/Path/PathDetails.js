import React from 'react';
import resourceDetailsStyle from '../../../commons/style/resourceDetailsStyle';
import { TextField } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import { linkToFilteredList } from "../../../utils";
import IconsList from '../../../commons/lists/IconsList';
import TopicIcon from '../../../svg/TopicIcon';
import CourseIcon from '../../../svg/CourseIcon';
import PlaceIcon from '../../../svg/PlaceIcon';
import ActorIcon from '../../../svg/ActorIcon';
import CalendarIcon from '../../../svg/CalendarIcon';

const useStyles = resourceDetailsStyle;

const PathDetails = (props) => { 
  const { orientation } = props;
  const isVertical = orientation === 'vertical';
  const separator = isVertical ? "" : ", "
  const classes = useStyles({ isVertical });
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });
  return(
    <Box className={classes.mainContainer}>
      <IconsList {...props}>
        {/*Header*/}
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
        {/*Aside*/}
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="Person" source="cdlt:proposedBy" icon={<ActorIcon />} label="Qui contribue">
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="Organization" source="cdlt:supportedBy" icon={<ActorIcon />} label="Qui est partenaire">
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="Place" source="cdlt:hasPlace" icon={<PlaceIcon />} label="Dans quels lieux">
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="Event" source="cdlt:hasEvent" icon={<CalendarIcon />} label="Quels événements">
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="Course" source="cdlt:hasCourse" icon={<CourseIcon />} label="Quels voyages">
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
      </IconsList>
    </Box>
  );
}

export default PathDetails;
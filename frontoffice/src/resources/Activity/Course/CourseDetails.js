import React from 'react';
import resourceDetailsStyle from '../../../commons/style/resourceDetailsStyle';
import { TextField } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../../utils";
import IconsList from '../../../commons/lists/IconsList';
import RangeDateField from '../../../commons/fields/RangeDateField';
import CourseIcon from '../../../svg/CourseIcon';
import PathIcon from '../../../svg/PathIcon';
import PlaceIcon from '../../../svg/PlaceIcon';
import ActorIcon from '../../../svg/ActorIcon';
import CalendarIcon from '../../../svg/CalendarIcon';

const useStyles = resourceDetailsStyle;

const CourseDetails = (props) => {
  const { orientation } = props;
  const isVertical = orientation === 'vertical';
  const separator = isVertical ? "" : ", "
  const classes = useStyles({ isVertical });
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });
  return(
    <Box className={classes.mainContainer}>
      <IconsList {...props}>
        { ( !isVertical || sm ) && 
          <ReferenceArrayField reference="Path" source="cdlt:courseOn" icon={<PathIcon />} label="Type de chemin">
            <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:courseOn')} separator={separator}>
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
          <ReferenceArrayField reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />}>
            <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:hasRegion')} separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { ( !isVertical || sm ) && 
          <RangeDateField source="pair:startDate" toSource="pair:startDate" icon={<CalendarIcon />} label="Dates" />
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField source="cdlt:organizedBy" reference="Actor" icon={<ActorIcon />} label="Qui organise">
            <SeparatedListField linkType="show">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField source="cdlt:hasMentor" reference="Person" icon={<ActorIcon />} label="Qui intervient">
            <SeparatedListField linkType="show">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField source="cdlt:courseOn" reference="Actor" icon={<ActorIcon />} label="Fait partie de">
            <SeparatedListField linkType="show">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
      </IconsList>
    </Box>
  );
}

export default CourseDetails;

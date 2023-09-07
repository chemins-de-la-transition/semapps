import React from 'react';
import resourceDetailsStyle from '../../../../commons/style/resourceDetailsStyle';
import { TextField, useTranslate } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField, ReferenceArrayField } from '@semapps/field-components';
import { linkToFilteredList } from "../../../../utils";
import IconsList from '../../../../commons/lists/IconsList';
import RangeDateField from '../../../../commons/fields/RangeDateField';
import CourseIcon from '../../../../svg/CourseIcon';
import PathIcon from '../../../../svg/PathIcon';
import PlaceIcon from '../../../../svg/PlaceIcon';
import ActorIcon from '../../../../svg/ActorIcon';
import CalendarIcon from '../../../../svg/CalendarIcon';

const useStyles = resourceDetailsStyle;

const CourseDetails = (props) => {
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
          <ReferenceArrayField reference="Path" source="cdlt:courseOn" icon={<PathIcon />}>
            <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:courseOn')} separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { ( !isVertical || sm ) && 
          <ReferenceArrayField source="cdlt:hasCourseType" reference="Type" icon={<CourseIcon/>}>
            <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:hasCourseType')} separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { ( !isVertical || sm ) && 
          <ReferenceArrayField source="cdlt:hasRegion" reference="Region" icon={<PlaceIcon/>} >
            <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:hasRegion')} separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { ( !isVertical || sm ) && 
          <RangeDateField source="pair:startDate" toSource="pair:endDate" icon={<CalendarIcon />} label={translate('app.input.dates')} />
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField source="cdlt:organizedBy" reference="Actor" icon={<ActorIcon />} >
            <SeparatedListField linkType="show">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField source="cdlt:hasMentor" reference="Person" icon={<ActorIcon />} >
            <SeparatedListField linkType="show">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField source="cdlt:courseOn" reference="Path" icon={<PathIcon />} >
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

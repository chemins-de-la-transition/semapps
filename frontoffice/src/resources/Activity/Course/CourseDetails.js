import React from 'react';
import { DateField, TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../../utils";
import IconsList from '../../../commons/lists/IconsList';
import RangeDateField from '../../../commons/fields/RangeDateField';
import ThemeIcon from '../../../svg/ThemeIcon';
import CourseIcon from '../../../svg/CourseIcon';
import PathIcon from '../../../svg/PathIcon';
import PlaceIcon from '../../../svg/PlaceIcon';
import TypeIcon from '../../../svg/TypeIcon';
import ActorIcon from '../../../svg/ActorIcon';
import GuardianIcon from '../../../svg/GuardianIcon';
import CalendarIcon from '../../../svg/CalendarIcon';

const useStyles = makeStyles((theme) => ({
  mainContainer: (props) => ({
    '& ul > li': {
      marginBottom: props.isVertical ? 0 : 4,
      '& > div > p': {
        display: props.isVertical ? 'flex' : 'block',
        flexDirection: props.isVertical ? 'column' : 'unset',
        '& > span > a, & > a' : {
          '& > span': {
            lineHeight: props.isVertical ? '130%' : 'unset',
            [theme.breakpoints.up('sm')]: {
              fontSize: props.isVertical ? '.95em' : 'unset',
            },
          },
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      },
    },
  }),
}));

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
          <ReferenceArrayField source="cdlt:hasCourseType" reference="Type" icon={<CourseIcon />}>
            <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:hasCourseType')} separator={separator}>
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

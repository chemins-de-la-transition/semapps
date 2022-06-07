import React from 'react';
import { TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../utils";
import IconsList from '../../commons/lists/IconsList';
import ThemeIcon from '../../svg/ThemeIcon';
import CourseIcon from '../../svg/CourseIcon';
import PathIcon from '../../svg/PathIcon';
import PlaceIcon from '../../svg/PlaceIcon';
import TypeIcon from '../../svg/TypeIcon';
import ActorIcon from '../../svg/ActorIcon';
import CalendarIcon from '../../svg/CalendarIcon';

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
            <ReferenceArrayField reference="Sector" source="pair:hasSector" perPage={2} icon={<ThemeIcon />}>
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
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Path" source="cdlt:placeOn" icon={<PathIcon />} label="Fait partie de">
              <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:placeOn')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Event" source="pair:hosts" icon={<CalendarIcon />} label="Accueille">
              <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:hosts')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
        </IconsList>
      { ( isVertical || sm ) &&
        <Box className={classes.vertical}>
        </Box>
      }
    </Box>
  );
}

export default PlaceDetails;

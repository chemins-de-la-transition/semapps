import React from 'react';
import { TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../../utils";
import IconsList from '../../../commons/lists/IconsList';
import DurationField from '../../../commons/fields/DurationField';
import RangeDateField from '../../../commons/fields/RangeDateField';
import CourseIcon from '../../../svg/CourseIcon';
import PathIcon from '../../../svg/PathIcon';
import PlaceIcon from '../../../svg/PlaceIcon';
import TypeIcon from '../../../svg/TypeIcon';
import ActorIcon from '../../../svg/ActorIcon';
import CalendarIcon from '../../../svg/CalendarIcon';
import DurationIcon from '../../../svg/DurationIcon';

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

const EventDetails = (props) => { 
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
          <ReferenceField source="pair:hasType" reference="Type" link={linkToFilteredList('LEP', 'pair:hasType')} icon={<TypeIcon />}>
            <TextField source="pair:label" />
          </ReferenceField>
        }
        { ( !isVertical || sm ) && 
          <ReferenceArrayField reference="Path" source="cdlt:eventOn" icon={<PathIcon />} label="Type de chemin">
            <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:eventOn')} separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { ( !isVertical || sm ) && 
          <RangeDateField source="pair:startDate" toSource="pair:startDate" icon={<CalendarIcon />} label="Dates" />
        }
        { ( !isVertical || sm ) && 
          <DurationField
            label="Durée"
            source="pair:startDate"
            startDate="pair:startDate"
            endDate="pair:endDate"
            icon={<DurationIcon />}
          />
        }
        { ( !isVertical || sm ) && 
          <ReferenceField source="pair:hostedIn" reference="Place" link="show" icon={<PlaceIcon />}>
            <TextField source="pair:label" />
          </ReferenceField>
        }
        { ( !isVertical || sm ) && 
          <ReferenceField label="Région" reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')}>
            <TextField source="pair:label" />
          </ReferenceField>
        }
        {/*Aside*/}
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="Actor" source="cdlt:organizedBy" icon={<ActorIcon />} label="Qui organise">
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="Person" source="cdlt:hasMentor" icon={<ActorIcon />} label="Qui intervient">
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="Path" source="cdlt:eventOn" icon={<PathIcon />} label="Sur quel chemin">
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="Path" source="pair:partOf" icon={<CourseIcon />} label="Sur quel voyage">
            <SeparatedListField link="show" separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
      </IconsList>
    </Box>
  
  );
}

export default EventDetails;

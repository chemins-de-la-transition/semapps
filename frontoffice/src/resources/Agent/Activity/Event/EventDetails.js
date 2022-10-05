import React from 'react';
import resourceDetailsStyle from '../../../../commons/style/resourceDetailsStyle';
import { TextField } from 'react-admin';
import { Box, useMediaQuery } from '@material-ui/core';
import { SeparatedListField, ReferenceField, ReferenceArrayField } from '@semapps/field-components';
import { linkToFilteredList } from "../../../../utils";
import IconsList from '../../../../commons/lists/IconsList';
import DurationField from '../../../../commons/fields/DurationField';
import RangeDateField from '../../../../commons/fields/RangeDateField';
import CourseIcon from '../../../../svg/CourseIcon';
import PathIcon from '../../../../svg/PathIcon';
import PlaceIcon from '../../../../svg/PlaceIcon';
import TypeIcon from '../../../../svg/TypeIcon';
import ActorIcon from '../../../../svg/ActorIcon';
import CalendarIcon from '../../../../svg/CalendarIcon';
import DurationIcon from '../../../../svg/DurationIcon';
import CapacityField from '../../../../commons/fields/CapacityField';

const useStyles = resourceDetailsStyle;

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
          <ReferenceArrayField source="pair:hasType" reference="Type" icon={<TypeIcon />}>
            <SeparatedListField link={linkToFilteredList('Event', 'pair:hasType')} separator={separator}>
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { ( !isVertical || sm ) && 
          <RangeDateField source="pair:startDate" toSource="pair:endDate" icon={<CalendarIcon />} label="Dates" />
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
        { (isVertical || sm ) && 
          <ReferenceArrayField reference="TargetAudience" source="cdlt:hasTargetAudience" >
            <SeparatedListField link={linkToFilteredList('Event', 'cdlt:hasTargetAudience')} separator=" / ">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        }
        { (isVertical || sm ) &&         
          <CapacityField label="Capacité d'accueil" source="cdlt:minimumCapacity" min="cdlt:minimumCapacity" max="cdlt:maximumCapacity" color="grey40" />
        }
        { (isVertical || sm ) && 
           <TextField variant="body2" source="cdlt:referenceNumber"/>
        }
      </IconsList>
    </Box>
  
  );
}

export default EventDetails;

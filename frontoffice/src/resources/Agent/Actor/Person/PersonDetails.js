import React from 'react';
import { TextField } from 'react-admin';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import { Box, makeStyles, useMediaQuery } from '@material-ui/core';
import { SeparatedListField } from '@semapps/archipelago-layout';
import { linkToFilteredList } from "../../../../utils";
import IconsList from '../../../../commons/lists/IconsList';
import ThemeIcon from '../../../../svg/ThemeIcon';
import PlaceIcon from '../../../../svg/PlaceIcon';
import TypeIcon from '../../../../svg/TypeIcon';
import ActorIcon from '../../../../svg/ActorIcon';
import CalendarIcon from '../../../../svg/CalendarIcon';

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

const PersonDetails = (props) => { 
  const { orientation } = props;
  const isVertical = orientation === 'vertical';
  const separator = isVertical ? "" : ", "
  const classes = useStyles({ isVertical });
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });
  return(
    <Box className={classes.mainContainer}>
        <IconsList {...props}>
          { ( !isVertical || sm ) && 
            <ReferenceField label="Région" reference="Region" source="cdlt:hasRegion" icon={<PlaceIcon />} link={linkToFilteredList('LEP', 'cdlt:hasRegion')}>
              <TextField source="pair:label" />
            </ReferenceField>
          }
          { ( !isVertical || sm ) && 
            <ReferenceField label="Type de personne" reference="Type" source="pair:hasType" icon={<TypeIcon /> } link={false}>
              <TextField source="pair:label" />
            </ReferenceField>
          }
          { ( !isVertical || sm ) && 
            <ReferenceArrayField reference="Sector" source="pair:hasSector" perPage={2} icon={<ThemeIcon />}>
              <SeparatedListField link={linkToFilteredList('LEP', 'pair:hasSector')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Organization" source="pair:affiliatedBy" icon={<ActorIcon />} label="membre de">
              <SeparatedListField link={linkToFilteredList('LEP', 'pair:affiliatedBy')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          { (isVertical || sm ) && 
            <ReferenceArrayField reference="Path" source="cdlt:supports" icon={<ActorIcon />} label="Contributeur de">
              <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:supports')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Activity" source="cdlt:organizes" icon={<ActorIcon />} label="Organisateur de">
              <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:organizes')} separator={separator}>
                <TextField source="pair:label" />
              </SeparatedListField>
            </ReferenceArrayField>
          }
          {  (isVertical && ! sm ) && 
            <ReferenceArrayField reference="Activity" source="cdlt:mentorOn" icon={<CalendarIcon />} label="intervenant sur">
              <SeparatedListField link={linkToFilteredList('LEP', 'cdlt:mentorOn')} separator={separator}>
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

export default PersonDetails;

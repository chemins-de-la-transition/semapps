import React from "react";
import { DateField, TextField } from "react-admin";
import Chip from "../../../commons/Chip";
import { ReferenceArrayField } from "@semapps/semantic-data-provider";
import { SeparatedListField } from '@semapps/archipelago-layout';
import { makeStyles } from "@material-ui/core";
import ThemeIcon from "../../../svg/ThemeIcon";
import TypeIcon from "../../../svg/TypeIcon";
import CalendarIcon from "../../../svg/CalendarIcon";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    lineHeight: 1.8,
    color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
    fontSize: '14px',
    '& span': {
      fontSize: '14px',
    },
  }
}));

const EventCard = ({ record, variant }) => {
  const classes = useStyles();
  return (
    <>
      <TextField variant="h2" record={record} source="pair:label" className={classes.title} />
      <Chip icon={<CalendarIcon />}>
        <DateField
          record={record}
          source="pair:startDate"
          options={{ year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }}
          showTime
        />
      </Chip>
      {record['pair:hasType'] && (
        <Chip icon={<TypeIcon />}>
          <ReferenceArrayField record={record} reference="Type" source="pair:hasType">
            <SeparatedListField linkType={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {record['pair:hasTopic'] && (
        <Chip icon={<ThemeIcon />}>
          <ReferenceArrayField record={record} reference="Theme" source="pair:hasTopic">
            <SeparatedListField linkType={false} separator=" /">
              <TextField source="pair:label" />
            </SeparatedListField>
          </ReferenceArrayField>
        </Chip>
      )}
      {variant === 'full' &&
        <div className={classes.description}>
          <strong>Description: </strong>
          <TextField record={record} source="pair:comment"/>
        </div>
      }
    </>
  )
};

EventCard.defaultProps = {
  variant: 'full'
}

export default EventCard;

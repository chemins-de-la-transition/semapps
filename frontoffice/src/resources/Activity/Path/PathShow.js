import React from 'react';
import { ShowBase, TextField } from 'react-admin';
import { Container, Link, List, makeStyles } from '@material-ui/core';
import { AvatarField, GridList } from '@semapps/archipelago-layout';
import { ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import MarkdownField from '../../../commons/fields/MarkdownField';
import HeaderShow from '../../../commons/HeaderShow';
import StickyCard from '../../../commons/StickyCard';
import BodyList from '../../../commons/lists/BodyList/BodyList';
import ContactField from "../../../commons/fields/ContactField";
import BulletPointsField from "../../../commons/fields/BulletPointsField";
import ApplyButton from "../../../commons/buttons/ApplyButton";
import { linkToFilteredList } from "../../../utils";

const useStyles = makeStyles((theme) => ({
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    }
  },
  linkToList: {
    display: 'block',
    padding: 20,
    margin: 20,
    color: theme.palette.primary.contrastText,
    border: `2px solid ${theme.palette.primary.contrastText}`,
    transition: 'all 0.1s',
    textAlign: 'center',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      textDecoration: 'none',
    }
  },
  bodyContainer: {
    marginTop: 32
  }
}));

const EventShow = (props) => {
  const classes = useStyles();
  return (
    <ShowBase {...props}>
      <Container>
        <HeaderShow
        /*
          type="pair:hasType"
          linkToListText="Liste des chemins"
          */
          actionButton={<ApplyButton />}
          hasComment={true}
          content={        
            <Container className={classes.linkContainer}>
              <Link href={linkToFilteredList('Place', 'pair:hasPlace')(props)} className={classes.linkToList} >Découvrir les lieux</Link>
              <Link href={linkToFilteredList('Event', 'pair:hasEvent')(props)} className={classes.linkToList}>Découvrir les événements</Link>
              <Link href={linkToFilteredList('Course', 'pair:hasCourse')(props)} className={classes.linkToList}>Découvrir les voyages</Link>
            </Container>
          }
        />
        <BodyList>
          <MarkdownField source="pair:description" />
          <ReferenceArrayField reference="Skill" source="pair:produces">
            <BulletPointsField linkType={false}>
              <TextField source="pair:label" />
            </BulletPointsField>
          </ReferenceArrayField>
          <ReferenceArrayField reference="Person" source="cdlt:proposedBy">
            <GridList xs={3} linkType="show">
              <AvatarField label="pair:label" image="pair:image" labelColor="grey.300" />
            </GridList>
          </ReferenceArrayField>
        </BodyList>
      </Container>
    </ShowBase>
  );
}

export default EventShow;

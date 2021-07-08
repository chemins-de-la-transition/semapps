import * as React from 'react';
import { useListContext, TextField, Loading, linkToRecord, Link } from 'react-admin';
import { Card, CardMedia, CardContent, makeStyles } from '@material-ui/core';
import { SeparatedListField } from "@semapps/archipelago-layout";
import { ReferenceArrayField } from "@semapps/semantic-data-provider";
import CourseIcon from "../svg/CourseIcon";
import Chip from "./Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  loading: {
    height: '50vh'
  },
  details: {
    display: 'flex',
    marginBottom: 15
  },
  image: {
    width: 180,
    minHeight: 145
  },
  content: {
    flex: '1 0 auto'
  },
  title: {
    fontSize: 20,
    lineHeight: 1.8,
    color: theme.palette.primary.main
  },
  description: {
    marginTop: 10,
    fontSize: '14px',
    '& span': {
      fontSize: '14px'
    }
  }
}));

const CardsList = () => {
  const classes = useStyles();
  const { ids, data, basePath, loading } = useListContext();
  return loading
    ? <Loading loadingPrimary="ra.page.loading" loadingSecondary="ra.message.loading" className={classes.loading} />
    : ids.map(id =>
        <Link to={linkToRecord(basePath, id) + '/show'} className={classes.root}>
          <Card key={id} className={classes.details}>
            <CardMedia
              className={classes.image}
              image="/pexels-celine-chamiotponcet-2889792.jpg"
            />
            <CardContent className={classes.content}>
              <TextField variant="h2" record={data[id]} source="pair:label" className={classes.title} />
              {data[id]['cdlt:hasCourseType'] &&
                <Chip icon={<CourseIcon/>}>
                  <ReferenceArrayField record={data[id]} source="cdlt:hasCourseType" reference="Type">
                    <SeparatedListField separator=" / " linkType={false}>
                      <TextField source="pair:label"/>
                    </SeparatedListField>
                  </ReferenceArrayField>
                </Chip>
              }
              <div className={classes.description}>
                <strong>Description: </strong>
                <TextField record={data[id]} source="pair:comment" />
              </div>
            </CardContent>
          </Card>
        </Link>
      );
};

export default CardsList;
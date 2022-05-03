import React from "react";
import { Link, linkToRecord, usePermissionsOptimized, useShowContext } from "react-admin";
import { IconButton, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(() => ({
  button: {
    padding: 6,
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 10,
    float: 'right'
  }
}));

const EditButton = () => {
  const { basePath, hasEdit, record } = useShowContext();
  const { permissions } = usePermissionsOptimized(record?.id);
  const classes = useStyles();

  if( hasEdit && !!permissions && permissions.some(p => ['acl:Append', 'acl:Write'].includes(p['acl:mode'])) ) {
    return(
      <Link to={linkToRecord(basePath, record?.id, 'edit')}>
        <IconButton className={classes.button}>
          <EditIcon />
        </IconButton>
      </Link>
    )
  } else {
    return null;
  }
}

export default EditButton;

import React, { useCallback } from "react";
import { useShowContext, useNotify, Link, useTranslate } from "react-admin";
import { IconButton, makeStyles, Tooltip } from "@material-ui/core";
import { useOutbox, useCollection, ACTIVITY_TYPES, PUBLIC_URI } from "@semapps/activitypub-components";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(() => ({
  button: {
    padding: 6,
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 10,
    float: 'right'
  }
}));

const LikeButton = (props) => {
  const translate = useTranslate();

  const { record } = useShowContext(props);
  const classes = useStyles();

  const { items: liked, addItem, removeItem } = useCollection('liked');
  const outbox = useOutbox();
  const notify = useNotify();

  const like = useCallback(async () => {
    addItem(record.id);
    await outbox.post({
      type: ACTIVITY_TYPES.LIKE,
      actor: outbox.owner,
      object: record.id,
      to: PUBLIC_URI
    });
    notify(translate('app.action.successAddBookmark'), 'success');
  }, [outbox, record, notify, addItem, translate]);

  const unlike = useCallback(async () => {
    removeItem(record.id);
    await outbox.post({
      type: ACTIVITY_TYPES.UNDO,
      actor: outbox.owner,
      object: {
        type: ACTIVITY_TYPES.LIKE,
        object: record.id,
      },
      to: PUBLIC_URI
    });
    notify(translate('app.action.successRemoveBookmark'), 'success');
  }, [outbox, record, notify, removeItem, translate]);

  if( outbox.owner ) {
    if( liked.includes(record?.id) ) {
      return(
        <IconButton className={classes.button + ' ' + props.class} onClick={unlike}>
          <FavoriteIcon />
        </IconButton>
      )
    } else {
      return(
        <IconButton className={classes.button+ ' ' + props.class} onClick={like}>
          <FavoriteBorderIcon />
        </IconButton>
      )
    }
  } else {
    return(
      <Link to="/login" >
        <Tooltip title={translate('app.helper.connectToAddBookmark')} placement="top" arrow>
          <IconButton className={classes.button+ ' ' + props.class} >
            <FavoriteBorderIcon />
          </IconButton>
        </Tooltip>
      </Link>
      
    )
  }
}


export default LikeButton;

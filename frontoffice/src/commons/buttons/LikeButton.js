import React, { useCallback } from "react";
import { useShowContext, useNotify } from "react-admin";
import { IconButton, makeStyles } from "@material-ui/core";
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

const LikeButton = ({record}) => {
  
  const { record:recordShowContext } = useShowContext();
  if (!record) {
    record = recordShowContext;
  }
  
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
    notify('Ajouté à vos favoris', 'success');
  }, [outbox, record, notify, addItem]);

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
    notify('Supprimé de vos favoris', 'success');
  }, [outbox, record, notify, removeItem]);

  if( outbox.owner ) {
    if( liked.includes(record?.id) ) {
      return(
        <IconButton className={classes.button} onClick={unlike}>
          <FavoriteIcon />
        </IconButton>
      )
    } else {
      return(
        <IconButton className={classes.button} onClick={like}>
          <FavoriteBorderIcon />
        </IconButton>
      )
    }
  } else {
    return null;
  }
}

export default LikeButton;

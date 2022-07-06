import React from 'react';
import { makeStyles, Popover, Button } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles((theme) => ({
  popover:{
    padding: 8,
  }
}));

const PopoverButton = ( props ) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
        <Button aria-describedby={id} variant="h5" component="div" color="secondary" style={{fontWeight:500}} onClick={handleClick}>
            <HelpOutlineIcon/>
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <div className={classes.popover}>
                {props.popover}
            </div>
        </Popover>
    </>
  );
};

export default PopoverButton;

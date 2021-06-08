import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const Fullwidthbox = ({ children, ...other }) => {
    const classes = useStyles();
    return (
        <Box width={1} classes={{ root: classes.box}} {...other}>
            {children}
        </Box>
    );
};

export default Fullwidthbox;
import React from 'react';
import { Box as MUI_Box , makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const Box = ({ children, ...other }) => {
    const classesContainer = useStyles();
    return (
        <MUI_Box width={1} className={classesContainer.box} {...other}>
            {children}
        </MUI_Box>
    );
};

export default Box;
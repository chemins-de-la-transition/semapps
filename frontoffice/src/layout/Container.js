import React from 'react';
import { Container as MUI_Container , makeStyles} from '@material-ui/core';

const containerMargin = 40;

const useStyles = makeStyles(theme => ({
    container: {
        marginLeft: containerMargin,
        marginRight: containerMargin,
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

const Container = ({ children, ...other }) => {
    const classesContainer = useStyles();
    return (
        <MUI_Container maxWidth="lg"  classes={{ root: classesContainer.container }} {...other}>
            {children}
        </MUI_Container>
    );
};

export default Container;
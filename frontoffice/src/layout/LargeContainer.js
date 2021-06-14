import React from 'react';
import { Container , makeStyles} from '@material-ui/core';

const containerMargin = 40;
const containerMarginAfterTransition = 12;

const useStyles = makeStyles(theme => ({
    container: {
        marginLeft: containerMargin,
        marginRight: containerMargin,
        paddingLeft: 0,
        paddingRight: 0,
        [theme.breakpoints.down('xs')]:{
            marginLeft: containerMarginAfterTransition,
            marginRight: containerMarginAfterTransition,
        },
    },
}));

const LargeContainer = ({ children, ...other }) => {
    const classesContainer = useStyles();
    return (
        <Container maxWidth="lg"  classes={{ root: classesContainer.container }} {...other}>
            {children}
        </Container>
    );
};

export default LargeContainer;
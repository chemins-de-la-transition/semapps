import React from 'react';
import { Container as MUI_Container , makeStyles} from '@material-ui/core';
import clsx from 'clsx';

const containerMargin = 40 - 24;

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: containerMargin,
            marginRight: containerMargin,
        }
    },
}));

const Container = ({ children,className, ...other }) => {
    const classesContainer = useStyles();
    return (
        <MUI_Container maxWidth="lg"  className={clsx(classesContainer.container, className)} {...other}>
            {children}
        </MUI_Container>
    );
};

export default Container;
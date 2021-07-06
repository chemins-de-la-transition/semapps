import React from "react";
import StickyBox from "react-sticky-box";
import { makeStyles, Typography, Box, Card } from '@material-ui/core';
import IconsList from "./IconsList";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
  },
  block: {
    backgroundColor: theme.palette.theme_3.main,
    color: theme.palette.theme_3.contrastText
  },
}));

const StickyCard = () => {
  const classes = useStyles();
  return (
    <StickyBox offsetTop={168} className={classes.root}>
      <Card>
        <Box pl={2} pr={2}>
          <Typography variant="h2">
            Crémaillière dantesque
          </Typography>
        </Box>
        <Box className={classes.block} p={1}>
          <IconsList orientation="vertical" />
        </Box>
      </Card>
    </StickyBox>
  );
}

export default StickyCard;

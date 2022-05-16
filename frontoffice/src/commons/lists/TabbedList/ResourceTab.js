import React from "react";
import { useResourceDefinition } from "react-admin";
import { Button, makeStyles, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  icon: {
    marginLeft: 8,
  },
  iconSelected: {
    marginLeft: 8,
    color: 'white',
    '& svg': {
      color: 'white',
    },
  }
}));

const ResourceTab = ({ resource, total, currentTab, setCurrentTab }) => {
  const classes = useStyles();
  const resourceDefinition = useResourceDefinition({ resource });
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });
  const sm = useMediaQuery((theme) => theme.breakpoints.down('sm'), { noSsr: true });
  return(
    <Button
      startIcon={xs || sm ? undefined : React.createElement(resourceDefinition.icon)}
      onClick={() => setCurrentTab(resource)}
      className={currentTab === resource ? classes.iconSelected : classes.icon}
    >
      {resourceDefinition.options.label} ({total})
    </Button>
  )
};

export default ResourceTab;

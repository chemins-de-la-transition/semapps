import React, { useMemo, useState } from 'react';
import {makeStyles, List, Box, Button, useMediaQuery} from '@material-ui/core';
import { useListContext } from 'react-admin';
import { sortBySimilarity } from "../../../utils";
import EventCardBlock from './EventCardBlock';
import StepBackIcon from '../../../svg/StepBackIcon';
import StepNextIcon from '../../../svg/StepNextIcon';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: '0',
    paddingTop: '32px',
    display: 'flex',
    position: 'relative',
  },
  boxContainer: {
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
  },
  stepContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 'inherit',
  },
  button: {
    minWidth: 0,
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: 140,
  },
}));

const EventItemsGrid = ({ similarRecord }) => {
  const classes = useStyles();
  let { ids, data } = useListContext();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });

  const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const sortedIds = useMemo(() => {
    if( !similarRecord ) return ids;
    return ids
      .filter(id => data[id] && id !== similarRecord.id )
      .sort(sortBySimilarity(data, similarRecord, 'pair:hasSector'))
      .sort(sortBySimilarity(data, similarRecord, 'pair:hasRegion'))
      .sort(sortBySimilarity(data, similarRecord, 'cdlt:hasCourseType'))
      .sort(sortBySimilarity(data, similarRecord, 'pair:hasType'))
  }, [ids, data, similarRecord]);

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = sortedIds.length;

  return (
    <List className={classes.cardContainer}>
      {xs ?
        <Box className={classes.boxContainer}>
            <Button className={classes.button} onClick={handleBack} disabled={activeStep === 0}>
                <StepBackIcon />
            </Button>
            <Box className={classes.stepContainer}>
                {maxSteps>0 ?
                    <EventCardBlock
                        key={sortedIds[activeStep]}
                        record={data[sortedIds[activeStep]]}
                    />
                : null}
            </Box>
            <Button className={classes.button} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                <StepNextIcon />
            </Button>
        </Box>
        :
          sortedIds.map((id) => (
            <EventCardBlock
              key={id}
              record={data[id]}
            />
          ))
      }
    </List>
  );
};

export default EventItemsGrid;

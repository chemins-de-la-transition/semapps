import React, { useMemo, useState } from 'react';
import { makeStyles, Box, Button, useMediaQuery } from '@material-ui/core';
import { useListContext } from 'react-admin';
import CardBlock from './CardBlock';
import { sortBySimilarity } from "../../../utils";
import StepBackIcon from '../../../svg/StepBackIcon';
import StepNextIcon from '../../../svg/StepNextIcon';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: '0',
    paddingTop: '32px',
    marginBottom: '60px',
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
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
      minWidth: '80%',
      maxWidth: '80%',
  },
  button: {
      minWidth: 0,
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: 140,
  },
}));

const ItemsGrid = ({ similarRecord, CardSubHeaderComponent }) => {
  const classes = useStyles();
  const { ids, data, basePath, resource } = useListContext();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = ids.length;

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
      .sort(sortBySimilarity(data, similarRecord, 'pair:hasLocation'))
      .slice(0, 4);
  }, [ids, data, similarRecord]);

  return (
    <div className={classes.cardContainer}>
      {xs ?
        <Box className={classes.boxContainer}>
            <Button className={classes.button} onClick={handleBack} disabled={activeStep === 0}>
                <StepBackIcon />
            </Button>
            <Box className={classes.stepContainer}>
                {maxSteps>0 ?
                    <CardBlock
                        key={ids[activeStep]}
                        record={data[ids[activeStep]]}
                        basePath={basePath}
                        CardSubHeaderComponent={CardSubHeaderComponent}
                        resource={resource}
                    />
                : null}
            </Box>
            <Button className={classes.button} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                <StepNextIcon />
            </Button>
        </Box>
        :
        sortedIds.map((id) => (
          <CardBlock
            key={id}
            record={data[id]}
            basePath={basePath}
            CardSubHeaderComponent={CardSubHeaderComponent}
            resource={resource}
          />
        ))
      }
    </div>

  );
};

export default ItemsGrid;

import React from 'react';
import { /*useMediaQuery, */makeStyles } from '@material-ui/core';
import Fullwidthbox from '../../layout/Fullwidthbox';
import Largecontainer from '../../layout/Largecontainer';

const goalsHeight = '800px';
const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: goalsHeight,
    position: 'relative',
  },
  backgoundBox: {
    height: goalsHeight,
    position: 'absolute',
    zIndex: '0',
  },
  frontBox: {
    height: goalsHeight,
    position: 'absolute',
    zIndex: '2',
  },
  backgroundImages: {
    position: 'relative',
    zIndex: '1',
    height: goalsHeight,
    overflow: 'hidden',
    
  },
  rightTop1: {
    top: -90,
    right: 0,
    position: 'absolute',
  },
  rightTop1Color: {
    fill: theme.palette.theme_3.main,
  },
  rightTop2: {
    top: 0,
    right: 45,
    position: 'absolute',
  },
  rightTop2Color: {
    fill: theme.palette.theme_4.main,
  },
  leftBottom1: {
    bottom: -187,
    left: 0,
    position: 'absolute',
  },
  leftBottom1Color: {
    fill: theme.palette.theme_1.main,
  },
  leftBottom2: {
    bottom: -55,
    left: 0,
    position: 'absolute',
  },
  leftBottom2Color: {
    fill: theme.palette.theme_2.main,
  },
  goals: {
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const Goals = ({ theme }) => {
  const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Fullwidthbox  className={classes.mainBox}>
      <Fullwidthbox className={classes.backgoundBox}>
        <Largecontainer className={classes.backgroundImages}>
          <svg className={classes.rightTop1} width="402" height="749" viewBox="0 0 402 749" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M179 204.5C135.131 332.082 262.771 412.833 282.028 499.479C301.285 586.125 402 691 402 691L402 346.5L402 88.9992L0.50002 88.9993C18.8196 122.592 210.057 114.18 179 204.5Z" className={classes.rightTop1Color}/>
          </svg>
          <svg className={classes.rightTop2} width="538" height="284" viewBox="0 0 538 284" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M235 222.955C99.2307 178.766 0 121.5 0 0L205.983 -3.12733e-05C329.466 -5.89272e-05 438.19 -8.32759e-05 470.5 0C546.206 0.000195126 522.167 71.9548 523 109.955C526.65 154.361 559.566 264.818 513 283.955C470.5 283.955 341 257.455 235 222.955Z" className={classes.rightTop2Color}/>
          </svg>
          <svg className={classes.leftBottom1} width="561" height="681" viewBox="0 0 561 681" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M401.854 133.355C479.628 249.177 412.873 430.275 373 496L-7.25991 496L-7.25992 308.019L245.126 133.285C326.219 80.3872 383.4 111.291 401.854 133.355Z" className={classes.leftBottom1Color}/>
          </svg>
          <svg className={classes.leftBottom2} width="271" height="444" viewBox="0 0 271 444" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M233.68 101.916C-25.7196 -31.5288 -7.25981 84.0187 -7.2597 125.519L-7.25977 385.519C87.1055 354.401 310.741 182.019 233.68 101.916Z" className={classes.leftBottom2Color}/>
          </svg>
        </Largecontainer>
      </Fullwidthbox>
      <Fullwidthbox className={classes.frontBox}>
        <Largecontainer className={classes.goals}>
          Objectifs
        </Largecontainer>
      </Fullwidthbox>
    </Fullwidthbox>
  );
};

export default Goals;

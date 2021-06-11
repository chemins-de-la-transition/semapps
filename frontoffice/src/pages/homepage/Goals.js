import React from 'react';
import { /*useMediaQuery, */makeStyles, Grid, Typography, Container } from '@material-ui/core';
import Fullwidthbox from '../../layout/Fullwidthbox';
import Largecontainer from '../../layout/Largecontainer';

const goalsHeight = '2100px'; // TODO determine height dynamically
const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: goalsHeight,
    position: 'relative',
  },
  backgoundBox: {
    height: 'inherit',
    position: 'absolute',
    zIndex: '0',
  },
  frontBox: {
    // height: goalsHeight,
    position: 'absolute',
    zIndex: '2',
  },
  backgroundImages: {
    position: 'relative',
    zIndex: '1',
    height: 'inherit',
    overflow: 'hidden',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
    
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
  goalsFirstImage:{
    objectFit: 'cover',
    objectPosition: 'center',
  },
  goalsFirstImageContainer :{
    marginTop: '165px',
    [theme.breakpoints.down(600)]: {
      marginTop: '20px',
      height: '80%',
    },
  },
  goalsSecondText: {
    marginTop: '200px',
    [theme.breakpoints.down(600)]: {
      marginTop: '20px',
    },
  },
  goalsThirdText: {
    // marginTop: '100px',
    alignSelf:'flex-end',
    [theme.breakpoints.down(600)]: {
      marginTop: '20px',
    },
  },
  goalsFourthText: {
    alignSelf:'flex-end',
    [theme.breakpoints.down(600)]: {
      marginTop: '20px',
    },
  },
  secondaryContrastTextForIcon: {
    fill: theme.palette.secondary.contrastText,
  },
  secondaryContrastTextForIconStroke: {
    stroke: theme.palette.secondary.contrastText,
  },
  listGoals:{
    marginTop: '12px',
    position: 'relative',
    '&:before': {
      content: "'+'",
      position:'absolute',
      left: '-20px',
      fontFamily: theme.typography.h1.fontFamily,
      fontSize: '20px',
      FontWeight: '900',
      fontStyle: 'normal',
    },
  },
  goalsSecondImage:{
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
  },
}));

const ListGoals = ({ text, className }) => {
  const classes = useStyles();
  return (
    <Typography variant="body2" component="li" className={classes.listGoals}>
      {text}
    </Typography>
  );
};

const Goals = ({ theme }) => {
  const classes = useStyles();
  // const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <Fullwidthbox  className={classes.mainBox}>
      <Fullwidthbox className={classes.backgoundBox}>
        <Container maxWidth={1} className={classes.backgroundImages}>
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
        </Container>
      </Fullwidthbox>
      <Fullwidthbox className={classes.frontBox}>
        <Largecontainer>
          <Grid container spacing={3}>
            <Grid item sm={4} style={{marginTop: '65px'}}>
              <Typography variant="h2">
                Notre objectif
              </Typography>
              <Typography variant="h3" component="div" style={{marginBottom: '40px'}}>
                Vous permettre d'apprendre en voyageant
              </Typography>
              <Typography variant="body2" >
              Les Chemins de la Transition c’est avant tout une envie de relier et connecter les acteurs de la transition, 
              mais aussi de transmettre pour voir se multiplier les initiatives. 
              Agissons ensemble pour participer à la découverte, la formation et la mise en réseau des personnes souhaitant 
              s’engager dans la Transition afin que le rêve de voir éclore, mûrir et s’entrelacer des mondes solidaires et 
              écologiques s’enracine dans notre réalité.
              </Typography>
            </Grid>
            <Grid item sm={1} style={{padding:'0px'}}>
            </Grid>
            <Grid item sm={4} className={classes.goalsFirstImageContainer}>
              <img src={process.env.PUBLIC_URL + '/pexels-gary-barnes-6231809.jpg'} width="100%" className={classes.goalsFirstImage} alt="illustration de deux agricultrices qui rient"/>
              <span dangerouslySetInnerHTML={{ __html: `<!-- Image : (Free to Use and no attribution required) Gary Barnes @pexels https://www.pexels.com/photo/happy-multiethnic-female-friends-sitting-on-green-field-in-countryside-6231809/-->` }}/>
            </Grid>
            <Grid item sm={3} className={classes.goalsSecondText}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '24px'}}>
                  <path d="M20.7808 40C20.5759 35.9997 18.3688 32.3721 14.9104 30.3512L9.384 24.2112C8.6407 23.369 7.4879 23.0148 6.4 23.2944V12.8C6.4 11.0327 4.9673 9.59998 3.2 9.59998C1.4327 9.59998 0 11.0327 0 12.8V27.9416C0.0008 29.1657 0.3127 30.3695 0.9064 31.44L8 44.2072V47.2C8 47.6418 8.3582 48 8.8 48H20C20.4418 48 20.8 47.6418 20.8 47.2V40H20.7808ZM19.2 46.4H9.6V44C9.6 43.8639 9.5653 43.7301 9.4992 43.6112L2.3048 30.6616C1.8434 29.8292 1.6009 28.8933 1.6 27.9416V12.8C1.6 11.9163 2.3163 11.2 3.2 11.2C4.0837 11.2 4.8 11.9163 4.8 12.8V24.2824C3.799 25.4457 3.822 27.1726 4.8536 28.3088L11.408 35.52L12.592 34.4432L6.0376 27.2328C5.5152 26.6582 5.5363 25.7745 6.0856 25.2256C6.653 24.6577 7.5734 24.6573 8.1413 25.2248C8.1598 25.2433 8.1777 25.2622 8.1952 25.2816L13.8056 31.5152C13.877 31.587 13.9577 31.6489 14.0456 31.6992C17.2295 33.5235 19.1953 36.9105 19.2 40.58V46.4Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M44.7999 9.59998C43.0326 9.59998 41.6 11.0327 41.6 12.8V23.2944C41.3407 23.2288 41.0738 23.1971 40.8063 23.2C39.9677 23.2187 39.1746 23.5846 38.616 24.2104L33.0911 30.3488C29.628 32.3663 27.419 35.9971 27.2191 40H27.2V47.2C27.2 47.6418 27.5582 48 28 48H39.2C39.6418 48 40 47.6418 40 47.2V44.2056L47.0056 31.508C47.6562 30.4015 47.9995 29.1413 48 27.8576V12.8C48 11.0327 46.5672 9.59998 44.7999 9.59998ZM46.4 27.8576C46.3988 28.8633 46.128 29.8504 45.6159 30.716L38.4959 43.6136C38.4318 43.7323 38.3989 43.8652 38.4 44V46.4H28.8V40.58C28.8098 36.8962 30.7923 33.4999 33.9952 31.68C34.0697 31.6377 34.137 31.5837 34.1944 31.52L39.8048 25.28C40.3436 24.6835 41.2639 24.6368 41.8604 25.1756C42.4569 25.7144 42.5036 26.6347 41.9648 27.2312L35.4079 34.4416L36.592 35.52L43.1463 28.3104C44.1789 27.1739 44.2019 25.4459 43.2 24.2824V12.8C43.2 11.9163 43.9163 11.2 44.7999 11.2C45.6837 11.2 46.4 11.9163 46.4 12.8V27.8576Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M33.6001 20H32.0001C29.1303 20.0031 26.4426 21.4067 24.8001 23.76V18.4H25.6001C30.4578 18.3943 34.3944 14.4577 34.4001 9.6C34.4001 9.1582 34.0419 8.8 33.6001 8.8H32.0001C29.1303 8.8031 26.4426 10.2067 24.8001 12.56V7.2H25.6001C29.1331 7.196 31.9961 4.333 32.0001 0.8C32.0001 0.3582 31.6419 0 31.2001 0H29.6001C27.2703 0.0014 25.1254 1.2688 24.0001 3.3088C22.8748 1.2688 20.7299 0.0014 18.4001 0H16.8001C16.3583 0 16.0001 0.3582 16.0001 0.8C16.0041 4.333 18.8671 7.196 22.4001 7.2H23.2001V12.56C21.5576 10.2067 18.8699 8.8031 16.0001 8.8H14.4001C13.9583 8.8 13.6001 9.1582 13.6001 9.6C13.6058 14.4577 17.5424 18.3943 22.4001 18.4H23.2001V23.76C21.5576 21.4067 18.8699 20.0031 16.0001 20H14.4001C13.9583 20 13.6001 20.3582 13.6001 20.8C13.6058 25.6577 17.5424 29.5943 22.4001 29.6H23.2001V36H24.8001V29.6H25.6001C30.4578 29.5943 34.3944 25.6577 34.4001 20.8C34.4001 20.3582 34.0419 20 33.6001 20ZM32.0001 10.4H32.7561C32.3441 14.0421 29.2654 16.7956 25.6001 16.8H24.8441C25.2561 13.1579 28.3348 10.4044 32.0001 10.4ZM29.6001 1.6H30.3337C29.9402 3.908 27.9414 5.5971 25.6001 5.6H24.8665C25.26 3.292 27.2588 1.6029 29.6001 1.6ZM22.4001 5.6C20.0588 5.5971 18.06 3.908 17.6665 1.6H18.4001C20.7414 1.6029 22.7402 3.292 23.1337 5.6H22.4001ZM22.4001 16.8C18.7348 16.7956 15.6561 14.0421 15.2441 10.4H16.0001C19.6654 10.4044 22.7441 13.1579 23.1561 16.8H22.4001ZM22.4001 28C18.7348 27.9956 15.6561 25.2421 15.2441 21.6H16.0001C19.6654 21.6044 22.7441 24.3579 23.1561 28H22.4001ZM25.6001 28H24.8441C25.2561 24.3579 28.3348 21.6044 32.0001 21.6H32.7561C32.3441 25.2421 29.2654 27.9956 25.6001 28Z" className={classes.secondaryContrastTextForIcon}/>
              </svg>
              <Typography variant="h5" component="div" style={{marginBottom: '24px'}}>
                Mailler les territoires & Valoriser les initiatives existantes
              </Typography>
              <ul style={{paddingLeft: '22px', listStyle: 'none'}}>
                <ListGoals text={"Promouvoir et dynamiser l’attractivité des zones rurales grâce à une nouvelle dynamique de tourisme."}></ListGoals>
                <ListGoals text={"Référencer les lieux inspirationnels et les initiatives qui contribuent à la transition (écologique, énergétique, social, culturelle, économique,...)"}></ListGoals>
                <ListGoals text={"Interconnecter les acteurs de la transition et leur donner de la visibilité. Créer des synergies inter-projets / inter-territoires"}></ListGoals>
                <ListGoals text={"Accélérer des projets grâce à l’aide apportée par les voyageurs"}></ListGoals>
              </ul>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item sm={4} style={{alignSelf:'flex-end'}}>
              <img src={process.env.PUBLIC_URL + '/travel_sport_bike_cycling_bicycle_touring_pier_lake_water-685024.jpg'} className={classes.goalsSecondImage} alt="cycliste en randonnée"/>
              <span dangerouslySetInnerHTML={{ __html: `<!-- Image : Creative Commons 0 https://pxhere.com/fr/photo/685024/-->` }}/>
            </Grid>
            <Grid item sm={3} className={classes.goalsThirdText}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '24px'}}>
                  <path d="M47.0624 24.6387H44.6978C44.4089 24.6387 44.136 24.772 43.9584 24.9998L42.5324 26.8282C42.2138 27.2366 42.2867 27.8254 42.695 28.144C42.8664 28.2777 43.0693 28.3422 43.2711 28.3422C43.5501 28.3422 43.8259 28.2184 44.0108 27.9814L45.1556 26.514H47.0624C47.5803 26.514 47.9999 26.0944 47.9999 25.5765C47.9999 25.0587 47.5803 24.6387 47.0624 24.6387Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M39.4247 32.3365C39.0164 32.0183 38.4275 32.0908 38.1089 32.4991L36.7906 34.1895H32.6861L29.4077 22.9571C30.3636 22.5934 31.0443 21.668 31.0443 20.5862C31.0443 19.1881 29.9069 18.0502 28.5083 18.0502H27.9755L27.2962 15.7222C27.1508 15.2253 26.63 14.94 26.1334 15.085C25.6365 15.23 25.3512 15.7504 25.4962 16.2474L26.0225 18.0502H25.5226L22.0396 14.7261C22.1136 14.6796 22.1872 14.6317 22.2589 14.5808C23.2503 13.8791 23.9087 12.8336 24.1131 11.6364C24.3178 10.4396 24.0438 9.23481 23.3422 8.24384C22.6405 7.25251 21.595 6.59443 20.3979 6.38972C17.927 5.96711 15.5734 7.6341 15.1512 10.1049C14.8963 11.5954 15.4027 13.043 16.3867 14.0501C16.1256 14.1728 15.8803 14.3156 15.6521 14.4768C15.2127 13.5583 14.3627 12.8574 13.3033 12.6673C12.461 12.5164 11.611 12.7054 10.9093 13.2001C10.1923 13.7059 9.71658 14.4669 9.57083 15.3428C9.47708 15.905 9.53091 16.4594 9.70376 16.9648C9.65799 16.9868 9.61368 17.0113 9.57193 17.0406C9.36758 17.1834 9.22842 17.402 9.18558 17.6481L7.86832 25.2111C7.63138 26.5734 8.50845 27.8738 9.82351 28.1093L11.4023 28.3924C11.5447 28.418 11.6861 28.4305 11.826 28.4305C11.9311 28.4305 12.0343 28.4213 12.1365 28.4078L11.8443 32.8946L9.569 37.5876C9.3533 38.0333 9.2438 38.5097 9.2438 39.003C9.2438 39.4838 9.35367 39.9507 9.55142 40.3741H8.46304C8.28433 40.3741 8.10928 40.4254 7.95877 40.5213L0.433502 45.3201C-0.00302103 45.5984 -0.131195 46.1782 0.147125 46.6147C0.325836 46.8948 0.629059 47.0483 0.938507 47.0483C1.11099 47.0483 1.28531 47.0007 1.44168 46.9011L8.73624 42.2491H12.3061C12.3672 42.2527 12.428 42.2546 12.4888 42.2546C12.5393 42.2546 12.5895 42.2516 12.6397 42.2491H22.6358C22.876 42.2491 23.1071 42.1568 23.2814 41.9913L29.5191 36.0649H31.9771H31.9826H31.9859H37.2483C37.5369 36.0649 37.8097 35.9316 37.9873 35.7038L39.5873 33.6527C39.9059 33.244 39.833 32.6551 39.4247 32.3365ZM15.97 28.8879C15.6071 28.8256 15.2054 28.7989 14.8754 28.6253C14.292 28.3181 13.9961 27.6669 14.1042 27.0257C14.1342 26.8481 14.1649 26.6701 14.1953 26.4925C16.9148 26.3662 18.8122 25.6015 20.0833 24.7856L19.8636 26.0717C19.7932 26.4837 20.0042 26.8928 20.3806 27.0744L23.7179 28.6824L27.5957 33.5776C28.0667 34.1723 27.9663 35.0391 27.3716 35.5101C26.7772 35.981 25.9104 35.8803 25.4395 35.286L22.0879 31.0555C22 30.9442 21.8876 30.8544 21.7602 30.7929L18.9356 29.4317C18.8565 29.3936 18.7726 29.3669 18.6866 29.3522L15.97 28.8879ZM29.0653 32.4134L25.0531 27.3483C24.9872 27.2656 24.9085 27.1953 24.8206 27.1396C24.7898 27.1202 24.7572 27.1019 24.7235 27.0858L21.8308 25.6916L22.2699 23.1223H27.5027L30.7327 34.1895H29.7578C29.7121 33.5626 29.4846 32.9422 29.0653 32.4134ZM25.1472 19.9252H27.2665C27.2683 19.9252 27.2702 19.9256 27.272 19.9256C27.2731 19.9256 27.2742 19.9252 27.2753 19.9252H28.5083C28.8731 19.9252 29.1693 20.2219 29.1693 20.5862C29.1693 20.9506 28.8731 21.2473 28.5083 21.2473H28.2234C28.2223 21.2473 28.2212 21.2473 28.2205 21.2473H21.8272L19.9317 19.6136C19.5391 19.2759 18.9473 19.3199 18.6093 19.7121C18.2713 20.1043 18.3152 20.6961 18.7074 21.0341L20.1902 22.3118C19.4483 23.0823 17.7553 24.3516 14.5198 24.5948L14.8644 22.5788L15.5155 18.7709C15.5159 18.7684 15.5159 18.7658 15.5163 18.7632L15.7093 17.6339C15.8964 16.54 16.8295 15.3912 18.8836 15.3912C18.9308 15.3912 18.9784 15.3919 19.0271 15.393C19.0348 15.3934 19.0429 15.3934 19.0506 15.3934C19.6936 15.3934 20.2715 15.6153 20.6769 16.0178C20.689 16.0299 20.7014 16.0416 20.7139 16.0529L24.4998 19.666C24.6745 19.8326 24.9063 19.9252 25.1472 19.9252ZM16.9994 10.4206C17.2217 9.12055 18.3537 8.19953 19.6306 8.19953C19.7797 8.19953 19.9306 8.21198 20.0822 8.23798C20.7853 8.3581 21.3994 8.74482 21.8118 9.32709C22.2241 9.90937 22.3853 10.6176 22.2648 11.3207C22.0429 12.6208 20.9105 13.5422 19.6336 13.5418C19.4845 13.5418 19.3336 13.5294 19.182 13.5034C17.7304 13.2554 16.7511 11.8723 16.9994 10.4206ZM11.4202 15.6512C11.4832 15.2733 11.6853 14.947 11.9897 14.7324C12.2138 14.5745 12.4741 14.4921 12.7408 14.4921C12.8177 14.4921 12.8949 14.4991 12.9722 14.513C13.7141 14.6459 14.2129 15.3817 14.0844 16.1525C14.0214 16.5305 13.8189 16.8568 13.5146 17.0714C13.226 17.275 12.8773 17.3526 12.5324 17.2911C11.7904 17.1578 11.2913 16.4221 11.4202 15.6512ZM11.7333 26.5471L10.1546 26.2636C9.85171 26.2094 9.65469 25.8813 9.71548 25.5323L10.8709 18.898L13.5102 19.3715L13.0652 21.9753L12.3562 26.1208C12.2632 26.4086 11.9959 26.5939 11.7333 26.5471ZM11.8941 40.2422C11.4158 40.0104 11.1188 39.5355 11.1188 39.0026C11.1188 38.7946 11.1653 38.5932 11.2565 38.405L13.6112 33.5475C13.6643 33.4388 13.6955 33.3205 13.7032 33.1996L13.8969 30.2286C14.6037 30.6336 15.4463 30.7003 16.2366 30.8358C16.3853 30.861 16.534 30.8867 16.6826 30.9119L16.4717 33.9522L13.7317 39.6047C13.5109 40.0599 13.07 40.3375 12.5983 40.3741H12.3855C12.2193 40.3609 12.053 40.3192 11.8941 40.2422ZM22.2611 40.3741H15.4423L18.2379 34.607C18.2574 34.5671 18.2735 34.5264 18.287 34.4847C18.3097 34.414 18.3244 34.3393 18.3299 34.262L18.5338 31.3195L20.752 32.3885L23.9699 36.4501C24.3397 36.9171 24.8133 37.2543 25.3318 37.4565L22.2611 40.3741Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M36.408 13.1982H41.2046C43.1895 13.1982 44.8044 11.5833 44.8044 9.59802C44.8044 7.61316 43.1895 5.99817 41.2046 5.99817C40.7252 5.99817 40.2535 6.09412 39.8167 6.27649C39.0146 5.23352 37.7626 4.59814 36.408 4.59814C34.0367 4.59814 32.1079 6.52698 32.1079 8.89819C32.1079 10.0466 32.5551 11.1266 33.3673 11.9388C34.1796 12.7511 35.2592 13.1982 36.408 13.1982ZM36.408 6.47314C37.374 6.47314 38.2474 7.0459 38.6331 7.93286C38.751 8.20422 38.9901 8.40417 39.2783 8.47192C39.5662 8.53931 39.8694 8.46716 40.0961 8.27673C40.4103 8.0127 40.7933 7.87317 41.2046 7.87317C42.1556 7.87317 42.9294 8.64697 42.9294 9.59802C42.9294 10.5494 42.1556 11.3232 41.2046 11.3232H36.408C35.7601 11.3232 35.1511 11.0709 34.693 10.6128C34.2349 10.155 33.9829 9.54602 33.9829 8.89819C33.9829 7.56079 35.0709 6.47314 36.408 6.47314Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M5.66809 10.834C7.55591 10.834 9.0918 9.2981 9.0918 7.41028C9.0918 5.52246 7.55591 3.98657 5.66809 3.98657C4.75366 3.98657 3.8938 4.34253 3.24744 4.98926C2.60071 5.63599 2.24438 6.49585 2.24438 7.41028C2.24438 9.2981 3.78064 10.834 5.66809 10.834ZM4.57312 6.31531C4.86572 6.02271 5.25464 5.86157 5.66809 5.86157C6.52209 5.86157 7.2168 6.55627 7.2168 7.41028C7.2168 8.26428 6.52209 8.95899 5.66809 8.95899C4.81445 8.95899 4.11938 8.26428 4.11938 7.41028C4.11938 6.99646 4.28052 6.60754 4.57312 6.31531Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M0.468715 5.51193L0.908534 5.76571C1.05612 5.85104 1.21762 5.89169 1.37655 5.89169C1.70065 5.89169 2.01559 5.7236 2.18917 5.42257C2.44809 4.97433 2.29464 4.40084 1.84603 4.14193L1.40621 3.88815C0.957973 3.62924 0.384486 3.78268 0.125575 4.23129C-0.13297 4.67953 0.0204728 5.25302 0.468715 5.51193Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M10.8677 9.35055L10.4279 9.09677C9.97962 8.83785 9.40613 8.9913 9.14722 9.4399C8.88831 9.88815 9.04212 10.4616 9.49036 10.7205L9.93018 10.9743C10.0778 11.0597 10.2389 11.1003 10.3982 11.1003C10.7219 11.1003 11.0372 10.9322 11.2108 10.6312C11.4697 10.1829 11.3159 9.60946 10.8677 9.35055Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M0.938564 11.1003C1.0975 11.1003 1.259 11.0597 1.40658 10.9743L1.84603 10.7205C2.29464 10.4616 2.44809 9.88851 2.18917 9.4399C1.93026 8.9913 1.35714 8.83785 0.908534 9.09677L0.468715 9.35055C0.0204728 9.60946 -0.13297 10.1829 0.125575 10.6312C0.299525 10.9322 0.614467 11.1003 0.938564 11.1003Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M9.96021 5.89161C10.1191 5.89161 10.2803 5.85096 10.4279 5.766L10.8677 5.51185C11.3163 5.25294 11.4697 4.67982 11.2108 4.23121C10.9519 3.78296 10.3784 3.62916 9.93018 3.88807L9.49036 4.14185C9.04212 4.40076 8.88831 4.97425 9.14722 5.42286C9.32117 5.72352 9.63611 5.89161 9.96021 5.89161Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M5.66821 3.43982C6.18604 3.43982 6.60571 3.02014 6.60571 2.50232V1.96875C6.60571 1.45093 6.18604 1.03125 5.66821 1.03125C5.15039 1.03125 4.73071 1.45093 4.73071 1.96875V2.50232C4.73071 3.02014 5.15039 3.43982 5.66821 3.43982Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M4.73071 12.4054V12.939C4.73071 13.4568 5.15039 13.8765 5.66821 13.8765C6.18604 13.8765 6.60571 13.4568 6.60571 12.939V12.4054C6.60571 11.8876 6.18604 11.4679 5.66821 11.4679C5.15039 11.4679 4.73071 11.8879 4.73071 12.4054Z" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M41.836 29.7993C41.6847 29.4309 41.3002 29.1943 40.9032 29.2232C40.5136 29.2514 40.177 29.5253 40.0694 29.9003C39.9613 30.2764 40.1063 30.6917 40.4238 30.9199C40.737 31.1443 41.1698 31.1506 41.4899 30.9374C41.8579 30.6932 42.0059 30.2069 41.836 29.7993Z" className={classes.secondaryContrastTextForIcon}/>
              </svg>
              <Typography variant="h5" component="div" style={{marginBottom: '24px'}}>
                Voyager en apprenant , se&nbsp;former aux&nbsp;enjeux et métiers de la&nbsp;transition
              </Typography>
              <ul style={{paddingLeft: '22px', listStyle: 'none'}}>
                <ListGoals text={"Des parcours immersifs thématiques pour accéder facilement aux pratiques émergentes dans tous les domaines de la transition."}></ListGoals>
                <ListGoals text={"Des parcours avec plusieurs niveaux de découverte et d’apprentissage en faisant."}></ListGoals>
                <ListGoals text={"Liberté de créer ses propres chemins selon ses centres d’intérêts, ses disponibilités, le degré recherché d’apprentissage (découvrir, apprendre par le faire, se former aux métiers)."}></ListGoals>
                <ListGoals text={"Permettre la découverte, l’apprentissage des métiers de la transition au contact d’acteurs passionnés et engagés."}></ListGoals>
              </ul>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item sm={5} style={{alignSelf:'flex-end',padding:'0px'}}>
            </Grid>
            <Grid item sm={3} className={classes.goalsFourthText}>
              <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '24px'}}>
                  <path d="M42.7661 24.2617L1.2334 24.2617" className={classes.secondaryContrastTextForIconStroke} stroke-width="2.05607" stroke-linecap="round"/>
                  <path d="M32.7729 42.0151L11.2272 6.50813" className={classes.secondaryContrastTextForIconStroke} stroke-width="2.05607" stroke-linecap="round"/>
                  <path d="M11.2278 42.0149L32.7735 6.50788" className={classes.secondaryContrastTextForIconStroke} stroke-width="2.05607" stroke-linecap="round"/>
                  <circle cx="22.4113" cy="24.4673" r="4.72897" className={classes.secondaryContrastTextForIcon}/>
                  <circle cx="4.5232" cy="13.5703" r="2.46729" className={classes.secondaryContrastTextForIcon}/>
                  <circle cx="4.5232" cy="34.9534" r="2.46729" className={classes.secondaryContrastTextForIcon}/>
                  <circle cx="40.2991" cy="13.5703" r="2.46729" className={classes.secondaryContrastTextForIcon}/>
                  <circle cx="22.7266" cy="45.0989" r="2.46729" transform="rotate(-60 22.7266 45.0989)" className={classes.secondaryContrastTextForIcon}/>
                  <circle cx="22.0957" cy="3.42455" r="2.46729" transform="rotate(-60 22.0957 3.42455)" className={classes.secondaryContrastTextForIcon}/>
                  <circle cx="40.2991" cy="34.9534" r="2.46729" className={classes.secondaryContrastTextForIcon}/>
                  <path d="M35.9811 16.0468L8.22412 32.3567" className={classes.secondaryContrastTextForIconStroke} stroke-width="2.05607" stroke-linecap="round"/>
                  <path d="M8.22419 16.0468L35.9812 32.3567" className={classes.secondaryContrastTextForIconStroke} stroke-width="2.05607" stroke-linecap="round"/>
                  <path d="M22.1434 8.10476L22.0625 40.2988" className={classes.secondaryContrastTextForIconStroke} stroke-width="2.05607" stroke-linecap="round"/>
              </svg>
              <Typography variant="h5" component="div" style={{marginBottom: '24px'}}>
                Le voyageur comme pollinisateur de nouvelles pratiques
              </Typography>
              <ul style={{paddingLeft: '22px', listStyle: 'none'}}>
                <ListGoals text={"Contribuer à l’essaimage de projets à fort impact local et faire grandir l’écosystème de la transition."}></ListGoals>
                <ListGoals text={"Stimuler l’émergence de nouvelles initiatives"}></ListGoals>
                <ListGoals text={"Créer du lien grâce un espace d’échange et de partage d’informations, d’idées, de projets. "}></ListGoals>
                <ListGoals text={"Amplifier la transition écologique, par l’implication des citoyens dans la mise en œuvre des actions de transition"}></ListGoals>
                <ListGoals text={"Accroître la résilience du territoire grâce au développement de solutions locales."}></ListGoals>
              </ul>
            </Grid>
            <Grid item sm={4} style={{alignSelf:'flex-end'}}>
              <img src={process.env.PUBLIC_URL + '/pexels-gary-barnes-6231809.jpg'} width="100%" className={classes.goalsFirstImage} alt="illustration de deux agricultrices qui rient"/>
              <span dangerouslySetInnerHTML={{ __html: `<!-- Image : (Free to Use and no attribution required) Gary Barnes @pexels https://www.pexels.com/photo/happy-multiethnic-female-friends-sitting-on-green-field-in-countryside-6231809/-->` }}/>
            </Grid>
          </Grid>
        </Largecontainer>
      </Fullwidthbox>
    </Fullwidthbox>
  );
};

export default Goals;

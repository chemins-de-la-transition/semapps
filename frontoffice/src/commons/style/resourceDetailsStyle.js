import { makeStyles } from '@material-ui/core';

const resourceDetailsStyle = makeStyles((theme) => ({
  mainContainer: (props) => ({
    '& ul > li': {
      marginBottom: props.isVertical ? 0 : 4,
      '& > div > p': {
        display: props.isVertical ? 'flex' : 'block',
        flexDirection: props.isVertical ? 'column' : 'unset',
        '& > span > a, & > a' : {
          '& > span': {
            lineHeight: props.isVertical ? '130%' : 'unset',
            [theme.breakpoints.up('sm')]: {
              fontSize: props.isVertical ? '.95em' : 'unset',
            },
          },
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      },
    },
  }),
}));

export default resourceDetailsStyle;
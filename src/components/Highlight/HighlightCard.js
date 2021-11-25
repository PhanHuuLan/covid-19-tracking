import React from 'react';
import { CardContent, Typography, Card, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup';

const useStyles = makeStyles({
  wrapper: (props) => {
    console.log({ props });
    if (props.type === 'confirmed') return { borderLeft: '5px solid #6666ff'}  ;
    // if (props.type === 'confirmed')  return  <div style={{borderLeft: '5px solid #c9302c'}}></div>   ;
    if (props.type === 'recovered') return { borderLeft: '5px solid #00CC66' };
    if (props.type === 'death') return { borderLeft: '5px solid #F54D47' };
    if (props.type === 'todayRecovered') return { borderLeft: '5px solid #FF9918' };
    if (props.type === 'todayCases') return { borderLeft: '5px solid #B05DF3' };
    else return { borderLeft: '5px solid #D5120D' };



  },
  
    // icon: {
    // fontSize: 30,color: '#ffff', padding:15,borderRadius: '50%', width: '30px',
    // height: '30px', backgroundColor:'#6666ff'},
  title: { fontSize: 18, marginTop: 5, marginLeft: 20,color: 'gray', fontFamily: 'Roboto' },
  count: { fontWeight: '200', fontSize: 24 ,marginLeft: 25},
});

export default function HighlightCard({ title, count, type , icon}) {
  const classes = useStyles({ type });
  return (
    <Card className={classes.wrapper}>
      <CardContent>
      <Typography style={{display: 'flex',alignItems:'center'}}>
        <Typography variant='body2' component='icon'  className={classes.icon} >
              {icon}
            </Typography>
          <Typography >
            <Typography variant='body2' component='p'  className={classes.title}>
              {title}
            </Typography>
            <Typography variant='body2' component='span' className={classes.count}>
            <CountUp end={count} duration={3} separator=','/>
          </Typography>
          </Typography>
      </Typography>
      </CardContent>
    </Card>
  );
}
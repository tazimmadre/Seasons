import './SeasonDisplay.css';
import React  from 'react';

const seasonConfig={
  winter:{
    text:"Burr,it's chilly",
    iconName:'snowflake'
  },
  summer:{
    text:"Let's hit the beach",
    iconName:'sun'
  }
};

const getSeason=(lat,month)=>{
  if(month>2 && month<9){
    return lat>0?'winter':'summer';
  }else{
    return lat>0?'summer':'winter';
  }
};
const SeasonDisplay=(props)=>{
  const season= getSeason(props.lat,new Date().getMonth());
  // const text= season==='winter'?'Burr,its chilly':'Let\'s hit the beach';
  // const icon=season==='winter'?'snowflake':'sun';

  const {text,iconName}=seasonConfig[season];

    return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`}/>
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`}/>
      </div>
    );
};

export default SeasonDisplay;
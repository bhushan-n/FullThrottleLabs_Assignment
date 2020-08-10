import React from 'react';
import moment from 'moment';

//Component Level Styling
import classes from './Graph.module.css';

const Graph = (props) => {
  //just making sure we received the data that we need
  if ('data' in props && props.data !== undefined) {
    //sorting the active dates and then slicing the array
    //because I want render 7 most recent days
    //plotting their session durations
    const dataArr = props.data
      .sort(function (a, b) {
        var keyA = moment(a.start_date, 'DD MMM YYYY'),
          keyB = moment(b.start_date, 'DD MMM YYYY');
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      })
      .slice(0, 7);

    //finding the longest session among 7 most recent days
    //we'll later use this to plot each bar graph
    //I wanted to graphically show the increase and decrease of activity time
    //so the longestDuration will be 100% and other duration will be plotted accordingly
    //(duration / longestDuration) * 100
    const longestDuration = dataArr.reduce((longest, el) =>
      longest.duration < el.duration ? el : longest
    ).duration;
    return (
      <div className={classes.graph}>
        {dataArr.map((el) => {
          return (
            <div
              key={el.start_date}
              className={classes.bar}
              style={{ height: (el.duration / longestDuration) * 100 + '%' }}
            >
              {moment(el.start_date, 'DD MMM YYYY').format('D MMM')}
            </div>
          );
        })}
      </div>
    );
  } else return null;
};

export default Graph;

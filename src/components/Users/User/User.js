import React, { useState } from 'react';
import moment from 'moment';

//Component Level styling
import classes from './User.module.css';

//Simple Date Picker with up to date Documentation ✨
import DayPicker from 'react-day-picker';
//CSS for DayPicker
import 'react-day-picker/lib/style.css';

//Components
import Graph from '../../Graph/Graph';
import Aux from '../../../hoc/Aux';
import Modal from '../../UI/Modal/Modal';

const User = (props) => {
  const [state, setState] = useState({ show: false, selectedDay: '0' });
  let date;
  //Show and hide Modal
  const modalHandler = () => {
    setState({ ...state, show: !state.show });
  };
  //Triggered by DayPicker when a Day is selected
  //here we sync it with our state
  const dayChangedHandler = (day) => setState({ ...state, selectedDay: day });

  //To take advantage of an already available feature
  //of highlighting the dates we want
  //we will retrieve the dates on which a particular user was active
  const selectedDays = props.activity.map(
    (period) => (date = new Date(moment(period.start_date, 'DD MMM YYYY')))
  );

  return (
    <Aux>
      <Modal modalClosed={modalHandler} show={state.show}>
        <div>
          <h1>
            {state.selectedDay === '0'
              ? 'Please select a day.'
              : 'User Activity'}
          </h1>
          {state.selectedDay === '0'
            ? null
            : props.activity.map((el) => {
                if (
                  moment(state.selectedDay).format('DD MM YYYY') ===
                  moment(el.start_date).format('DD MM YYYY')
                ) {
                  return (
                    <div className={classes.activityTime} key={el.start_time}>
                      <div className={classes.startTime}>
                        {moment(el.start_time, 'MMM DD YYYY HH:mma').format(
                          'hh:mma'
                        )}
                      </div>
                      <div className={classes.endTime}>
                        {moment(el.end_time, 'MMM DD YYYY HH:mma').format(
                          'hh:mma'
                        )}
                      </div>
                    </div>
                  );
                } else return null;
              })}
        </div>
        <div>
          <DayPicker
            selectedDays={selectedDays}
            onDayClick={dayChangedHandler}
            month={new Date(2020, 2)}
          />
        </div>
      </Modal>
      <div className={classes.User} onClick={modalHandler}>
        <div className={classes.infoContainer}>
          <div className={classes.catContainer}>
            <span className={classes.cat} data-hover={'#' + props.id}>
              #{props.id}
            </span>
            <span className={classes.Country}>{props.country}</span>
          </div>
          <h1 className={classes.userName}>
            <span>{props.name}</span>
          </h1>
        </div>
        <div className={classes.graphContainer}>
          <Graph data={props.activity} className={classes.graph} />
        </div>
        <div className={classes.backgroundShape}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path d="M 5 5 L 62 44 C 135 108 173 99 203 74 C 318 -10 359 4 365 39 C 352 128 481 62 546 53 C 606 42.3 614 41 734 18 C 825 -7 846 42.3 906 74.3 C 966 106.3 1029 79 1090 73 C 1166 61 1206 149.3 1266 154.3 C 1326 159.3 1386 149.3 1416 143.6 L 1446 138.3 L 1445 372.3 L 1415 372.3 C 1385 372.3 1325 372.3 1265 372.3 C 1205 372.3 1145 372.3 1085 372.3 C 1025 372.3 965 372.3 905 372.3 C 845 372.3 785 372.3 725 372.3 C 665 372.3 605 372.3 545 372.3 C 485 372.3 425 372.3 365 372.3 C 305 372.3 245 372.3 185 372.3 C 125 372.3 65 372.3 35 372.3 L 3 374 Z"></path>
            <path
              style={{ opacity: '0.9' }}
              d="M 0 96 L 30 106.7 C 60 117 120 139 180 122.7 C 240 107 287 239 356 148 C 420 85 480 171 540 208 C 600 245 660 235 720 208 C 780 181 840 139 900 149.3 C 960 160 1020 224 1080 256 C 1140 288 1200 288 1260 272 C 1320 256 1380 224 1410 208 L 1440 192 L 1440 320 L 1410 320 C 1380 320 1320 320 1260 320 C 1200 320 1140 320 1080 320 C 1020 320 960 320 900 320 C 840 320 780 320 720 320 C 660 320 600 320 540 320 C 480 320 420 320 360 320 C 300 320 240 320 180 320 C 120 320 60 320 30 320 L 0 320 Z"
            ></path>
          </svg>
        </div>
      </div>
    </Aux>
  );
};

export default User;

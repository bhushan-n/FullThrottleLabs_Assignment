import React, { PureComponent } from 'react';
import moment from 'moment';
import Users from '../../components/Users/Users';
import tzToCountryEmoji from '../../utilities/tzToCountryEmoji';

//This class extends PureComponent to avoid unnecessary re-renders
class UserActivity extends PureComponent {
  state = {
    users: {},
  };
  //Getting Data received from props ready
  static getDerivedStateFromProps(props, state) {
    let users;
    let activity;
    //Calculating duration of sessions for each user
    if ('members' in props.json) {
      users = props.json.members.map((user) => {
        activity = user.activity_periods.map((period) => {
          return {
            duration: moment(period.end_time, 'MMM DD YYYY HH:mma').diff(
              moment(period.start_time, 'MMM DD YYYY HH:mma'),
              'minutes'
            ),
            end_time: period.end_time,
            start_time: period.start_time,
            start_date: moment(period.end_time, 'MMM DD YYYY HH:mma').format(
              'D MMM YYYY'
            ),
          };
        });
        return {
          ...user,
          //Wrote a utility function to convert timezones into flag emojis
          //please check out its logic to know how it works
          //returns false if invalid timezone provided
          CountryEmoji: tzToCountryEmoji(user.tz),
          activity_periods: activity,
        };
      });
    } else {
      users = [];
    }
    //updating the state with received and processed props.
    return { users: users };
  }
  render() {
    return (
      <div>
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default UserActivity;

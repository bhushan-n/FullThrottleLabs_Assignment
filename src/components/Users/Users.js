import React from 'react';
//Component level styling
import classes from './Users.module.css';
//Components
import User from './User/User';

//This Component is very simple
//it lists all the users and configures a grid
const Users = (props) => {
  return (
    <div className={classes.Users}>
      {props.users.map((user) => (
        <User
          key={user.id}
          name={user.real_name}
          id={user.id}
          country={user.CountryEmoji}
          activity={user.activity_periods}
        />
      ))}
    </div>
  );
};

export default Users;

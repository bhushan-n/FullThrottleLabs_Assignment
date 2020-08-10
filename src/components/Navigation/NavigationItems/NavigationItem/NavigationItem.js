import React from 'react';
//Component level Styling
import classes from './NavigationItem.module.css';
//Link Component for routing
import { Link } from 'react-router-dom';
const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <Link to={props.link}>{props.children}</Link>
    </li>
  );
};

export default NavigationItem;

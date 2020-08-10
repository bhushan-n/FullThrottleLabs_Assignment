import React from 'react';
//Component level Styling
import classes from './NavigationItems.module.css';
//Components
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">User Activity</NavigationItem>
      <NavigationItem link="/json">JSON Editor</NavigationItem>
    </ul>
  );
};

export default NavigationItems;

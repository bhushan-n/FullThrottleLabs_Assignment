import React from 'react';

//Component level styling
import classes from './SideDrawer.module.css';

//Logo Presentation Component
import Logo from '../../Logo/Logo';

//Components
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  //handling opening and closing
  if (props.open) attachedClasses = [classes.SideDrawer, classes.Open];
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;

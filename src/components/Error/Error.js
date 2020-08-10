import React from 'react';
import img from '../../assets/images/404.svg';
import classes from './Error.module.css';
import Aux from '../../hoc/Aux';
import Button from '../UI/Button/Button';
const Error = (props) => {
  return (
    <Aux>
      <img alt="404 Error" src={img} className={classes.ErrorImg} />
      <div className={classes.ErrorContainer}>
        <h1>Oops :( </h1>
        <h2>Page couldn't be found.</h2>
      </div>
      <div className={classes.ErrorButton}>
        <Button click={() => props.history.push('/')}>Go Home</Button>
      </div>
    </Aux>
  );
};

export default Error;

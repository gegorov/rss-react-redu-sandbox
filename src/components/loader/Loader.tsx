import React from 'react';
import classes from './Loader.module.css';

export const Loader = (): JSX.Element => (
  <div className={classes.wrapper}>

    <div className={classes.LdsSpinner}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

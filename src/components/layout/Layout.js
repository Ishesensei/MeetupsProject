import { Fragment } from 'react';
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css'
export default function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main} >{props.children}</main>
    </Fragment>
  );
}

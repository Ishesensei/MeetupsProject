import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../store/favourate-context';
function MainNavigation() {
  let count;
  const FavoritesCtx = useContext(FavoritesContext);
  FavoritesCtx.totalFavorites === 0
    ? (count = 0)
    : (count = FavoritesCtx.totalFavorites);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites <span className={classes.badge}>{count}</span> </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

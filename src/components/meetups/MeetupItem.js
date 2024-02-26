import { useContext } from 'react';
import FavoritesContext from '../store/favourate-context';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
function MeetupItem(props) {
  const FavoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = FavoritesCtx.itemIsFavorite(props.id);
  function toggleFavHandler() {
    if (itemIsFavorite) {
      return FavoritesCtx.removeFavorite(props.id);
    } else {
      return FavoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  }
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavHandler}>
            {itemIsFavorite ? `Remove favorites` : `Add Favorites`}
          </button>
        </div>
      </li>
    </Card>
  );
}
export default MeetupItem;

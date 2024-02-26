import { useContext } from 'react';
import FavoritesContext from '../components/store/favourate-context';
import MeetupList from '../components/meetups/MeetupList';
function FavoritesPage() {
  let content;
  const FavoritesCtx = useContext(FavoritesContext);
  FavoritesCtx.totalFavorites === 0
    ? (content = <p>Add some favorite, go shush!</p>)
    : (content = <MeetupList meetups={FavoritesCtx.favorites} />);
  return <>
  <h1>My favorite</h1>
  {content}</>;
}

export default FavoritesPage;

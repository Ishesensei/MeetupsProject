import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch('https://two-paths-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: { 'Content-Type': 'application/json' },
    }).then(()=>{
      return history.replace('/')
    });
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

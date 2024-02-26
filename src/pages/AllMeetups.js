import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
const FIREBASE = process.env.FIREBASE;
function AllMeetupsPage() {
  const [loadedMeetup, setLoadedMeetup] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://two-paths-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('!!data --->', data);

        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetup(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetup} />
    </section>
  );
}

export default AllMeetupsPage;

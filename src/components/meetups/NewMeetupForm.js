import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const meetupData = {
      title: titleInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
      image: imageInputRef.current.value,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">description</label>
          <textarea id="description" required ref={descriptionInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

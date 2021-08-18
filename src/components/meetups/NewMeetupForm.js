import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';
function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault(); //prevents the default submit
        const enteredTitle = titleInputRef.current.value; //for reading user input
        const enteredImage = imageInputRef.current.value;
        const enteredAdress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAdress,
        description: enteredDescription,
    };
   props.onAddMeetup(meetupData);
    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>
                    Meetup title
                </label>
                <input type='text' required id='title' ref={titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>
                    Meetup image
                </label>
                <input type='url' required id='image' ref={imageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>
                    Address
                </label>
                <input type='text' required id='address' ref={addressInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>
                    Description
                </label>
                <textarea id='description' required rows='5' ref={descriptionInputRef
                }></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}


export default NewMeetupForm;
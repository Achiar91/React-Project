import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from "react-router-dom";

function NewMeetup () {
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-project-18-default-rtdb.firebaseio.com/meetups.json', //first parameter firebase url
            {
              method:'POST', //posts the data instead of the get default
              body: JSON.stringify(meetupData),
              headers: {
                  'Content-type': 'application/json'
              }  
            } 
            ).then(()=>{
                history.replace('/'); // navigates after posting the data to the starting page
            }) ;
    }
    return <section>
        <h1>Add New Meetup</h1>

        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    }
    export default NewMeetup;
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup () {
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
            ); 
    }
    return <section>
        <h1>Add New Meetup</h1>

        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    }
    export default NewMeetup;
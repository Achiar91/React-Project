
import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';



function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);


    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-project-18-default-rtdb.firebaseio.com/meetups.json').then(response => {
            return response.json();// gives acces to the data
        }).then(data => {
            const meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup) //transforms the data from the object from firebase  to an array
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });

    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
};


export default AllMeetupsPage;
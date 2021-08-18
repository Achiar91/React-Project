import MeetupItem from '../components/meetups/MeetupItem';
import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz',
        address: 'LONDON, WESTMINSTER',
        description:
            'London is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in southeast England',
    },
    {
        id: 'm3',
        title: 'This is a third meetup',
        image:
            'https://static.dw.com/image/43901161_303.jpg',
        address: 'Berling,Germany',
        description:
            "One of Germany's sixteen constituent states, Berlin is surrounded by the State of Brandenburg and contiguous with Potsdam, Brandenburg's capital",
    },
];


function AllMeetupsPage() {
    return <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={DUMMY_DATA} />
        
        
        
    </section>
}
export default AllMeetupsPage;
import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList'

let dummyMeetups: object[] = [
    {
        id: 'm1',
        title: 'First',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Barcelona_Cathedral_Saint_Eulalia.jpg',
        address: 'Somewhere1',
        description: 'ff'
    },
    {
        id: 'm2',
        title: 'Second',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Barcelona_Cathedral_Saint_Eulalia.jpg',
        address: 'Somewhere2',
        description: 'fff'
    }
]

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    // useEffect(() => {
    //     setLoadedMeetups(dummyMeetups);
    // }, []);
    return <MeetupList meetups={dummyMeetups} />
}

export default HomePage;

// root 경로
import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList'

const dummyMeetups = [
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

// 두 번의 사이클을 돌면 NextJS는 두번째 사이클에 대한 것을 기다려주지 않는다.
// 문제는 그곳에 렌더링된 HTML 컨텐츠가 담겨져 있다.
// 첫번째 사이클의 HTML 컨텐츠에는 내용에 해당하는 HTML이 존재하지 않는다.
// 사전 렌더링이 요청한 데이터를 기다리지 않기 때문이다. 그러면 이것을 해결하려면? 
function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setLoadedMeetups(dummyMeetups);
    }, []);
    return <MeetupList meetups={loadedMeetups} />
}

export default HomePage;

// root 경로

// 
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
    return (
        <MeetupDetail 
        image="https://upload.wikimedia.org/wikipedia/commons/6/63/Barcelona_Cathedral_Saint_Eulalia.jpg"
        title="Meetup"
        address="Somewhere"
        description="meet" />
    );
}

export const getStaticPaths = async() => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export const getStaticProps = async(context) => {
    const meetupId = context.params.meetupId
    
    return {
        props: {
            image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Barcelona_Cathedral_Saint_Eulalia.jpg",
            id: meetupId,
            title: "Meetup",
            address: "Somewhere",
            description: "meet"
        }
    }
}

export default MeetupDetails;
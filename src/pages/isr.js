import React from 'react'
import axios from 'axios'

const ISR = ({ currentTime }) => {
    return (
        <div>
            This is ISR. Every five seconds, this will update via ISR. Just refresh! {currentTime.utc_datetime}
        </div>
    )
}

export default ISR




export async function getStaticProps() {
    const currentTime = await axios.get("http://worldtimeapi.org/api/timezone/Europe/Prague").then(response => response.data)

    return {
        props: { currentTime },
        revalidate: 5
    }
}


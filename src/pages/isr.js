import React from 'react'
import axios from 'axios'

const ISR = ({ plasmicData }) => {
    return (
        <div>
            This is ISR. Every five seconds, this will update via ISR. Just refresh! {plasmicData.utc_datetime}
            <ProductCard />
        </div>
    )
}

export default ISR




export async function getStaticProps() {
    const plasmicData = await axios.get("http://worldtimeapi.org/api/timezone/Europe/Prague").then(response => response.data)

    return {
        props: { plasmicData },
        revalidate: 5
    }
}


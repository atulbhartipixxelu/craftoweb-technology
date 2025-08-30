import React from 'react';
import Navbar from '@common/Header/Navbar';
import Service from '@components/HomePage/ServiceSection/service';
function Home() {

    return (
        <div className={'HomePageSection'}>
            <Navbar />
            <Service />
        </div>
    )
}


export default Home;

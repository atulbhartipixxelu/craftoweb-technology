import React from 'react';
import Navbar from '@common/Header/Navbar';
import Service from '@components/HomePage/ServiceSection/service';
import StatsSection from '@components/HomePage/StatsSection/statsSection'
import ProjectSection from '@components/HomePage/ProjectSection/projectSection'
import { Component } from 'lucide-react';

function Home() {

    return (
        <div className={'HomePageSection'}>
            <Navbar />
            <Service />
            <StatsSection />
            <ProjectSection />
        </div>
    )
}


export default Home;

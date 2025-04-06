import React from 'react'
import ServiceHero from '../components/ServiceHero'
import CompanyValue from '../components/CompanyValue'
import Serve from '../components/Serve'
import HealthcareServices from '../components/HealthCareServices'
import ProcessFlow from '../components/ProcessFlow'
import Trust from '../components/Trust'
import HeroBanner from '../components/HeroBanner'

const Services = () => {
    return (
        <div className='flex flex-col  w-full min-h-screen '>
            <ServiceHero/>
            <CompanyValue/>
            <Serve/>
            <HealthcareServices/>
            <ProcessFlow/>
            <Trust/>
            <HeroBanner heading={"Let’s Get You Modernized"} cta={"Book your Audit Now"} video={"/jnc-ser-banner.mp4"}/>
        </div>
    )
}

export default Services
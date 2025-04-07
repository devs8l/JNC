import React, { useRef } from 'react';
import ServiceHero from '../components/ServiceHero';
import CompanyValue from '../components/CompanyValue';
import Serve from '../components/Serve';
import ProcessFlow from '../components/ProcessFlow';
import Trust from '../components/Trust';
import HeroBanner from '../components/HeroBanner';
import ServiceCards from '../components/ServiceCards';

const Services = () => {
  const serviceCardsRef = useRef(null);

  const handleLearnMoreClick = () => {
    serviceCardsRef.current?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className='flex flex-col w-full min-h-screen'>
      <ServiceHero onLearnMoreClick={handleLearnMoreClick} />
      <CompanyValue />
      <Serve />
      <div ref={serviceCardsRef}>
        <ServiceCards />
      </div>
      <ProcessFlow />
      <Trust />
      <HeroBanner 
        heading={"Let's Get You Modernized"} 
        cta={"Book your Audit Now"} 
        video={"/jnc-ser-banner.mp4"} 
        formId={'w2oQAM'}
      />
    </div>
  );
};

export default Services;
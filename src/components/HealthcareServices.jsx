import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HealthcareCard = ({ card, index }) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-20">
      <div className="w-full md:w-2/5 p-4">
        <img src={card.image} alt={card.title} className="w-full h-auto object-contain" />
      </div>
      
      <div className="w-full md:w-3/4 p-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl  mb-14 card-title">
          {card.title}
        </h2>
        <p className="mb-4  card-text md:text-xl w-[90%]">
          {card.description}
        </p>
        
        <div className="mt-4">
          <p className="mb-2 card-text md:text-xl">
            {card.actionVerb}:
          </p>
          <ul className="space-y-2">
            {card.features.map((feature, idx) => (
              <li 
                key={idx}
                className="flex items-start card-text"
              >
                <span className="mr-2 md:text-xl">-</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const HealthcareServices = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  
  // Card data
  const cards = [
    {
      title: "Cloud Modernization & Data Migration",
      description: "Hospitals shouldn't be running on legacy servers and patchy backups. We migrate your data and workflows to cloud-native systems that are secure, scalable, and compliant.",
      image: "/cloud-icon.svg", // Replace with your actual image path
      features: [
        "Lift-and-shift from legacy to GCP / AWS / Azure",
        "HIPAA-ready infrastructure design",
        "Cost-efficient cloud architecture",
        "Built-in disaster recovery & backups",
        "Zero-downtime migration plans"
      ],
      actionVerb: "What we do"
    },
    {
      title: "Web & Patient Portal Development",
      description: "Your website is the digital front door. Your portals are the operational core. We make both seamless.",
      image: "/web-portal-icon.svg", // Replace with your actual image path
      features: [
        "Custom hospital & clinic systems",
        "Patient registration, appointment booking flows",
        "Secure doctor dashboards with analytics",
        "Lab report access & billing integration",
        "Fully responsive, mobile-optimized portals"
      ],
      actionVerb: "What we build"
    },
    {
      title: "Application Modernization",
      description: "Still using clunky, outdated EMRs or hospital software? We either rebuild or wrap modern interfaces around them — without interrupting your work.",
      image: "/integration-icon.svg", // Replace with your actual image path
      features: [
        "Legacy EMRs or hospital management tools",
        "Plug-and-play apps (pharmacy, lab, radiology modules)",
        "API-based architecture for easier scaling",
        "Real-time data synchronization",
        "Integrations with billing, EHRs, and diagnostics"
      ],
      actionVerb: "What we modernize:"
    },
    {
      title: "Security & Compliance Setup",
      description: "Healthcare data is a goldmine — and a liability. We make sure you’re always protected and audit-ready.",
      image: "/analytics-icon.svg", // Replace with your actual image path
      features: [
        "Full HIPAA compliance architecture",
        "End-to-end encryption & role-based access control",
        "Staff access logging & reporting",
        "Vulnerability scans and automated alerts",
        "NDHM/NHA compatibility for Indian systems"
      ],
      actionVerb: "What’s included:"
    },
    {
      title: "AI Readiness + MedCopilot Integration",
      description: "Once your data is structured and compliant, we plug in intelligence. MedCopilot becomes your doctor’s assistant — and your operations brain.",
      image: "/telehealth-icon.svg", // Replace with your actual image path
      features: [
        "Auto-generated summaries from patient history",
        "Risk prediction dashboards before every visit",
        "Smart note-taking tools for doctors",
        "Infra for future AI use cases (chatbots, analytics, automation)",
        "Works with Cerner, Epic, Practo, and any existing EMR"
      ],
      actionVerb: "Features unlocked:"
    }
  ];

  useEffect(() => {
    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Background color change animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%", // Trigger early
        end: "top 50%",
        onEnter: () => {
          // Quick background color change
          gsap.to(sectionRef.current, {
            backgroundColor: '#121820',
            duration: 0.3, // Fast transition
            ease: 'power1.in' // Quick easing
          });
          
          // Change text colors to white
          gsap.to('.header-title', {
            color: '#ffffff',
            duration: 0.3,
            ease: 'power1.in'
          });
          gsap.to('.header-text', {
            color: '#ffffff',
            duration: 0.3,
            ease: 'power1.in'
          });
          gsap.to('.card-title, .card-text', {
            color: '#ffffff',
            duration: 0.3,
            ease: 'power1.in'
          });
          // Keep the blue span blue
          gsap.to('.blue-text', {
            color: '#60a5fa', // Keep this blue
            duration: 0.3,
            ease: 'power1.in'
          });
        },
        onLeaveBack: () => {
          // Quick background color reversion
          gsap.to(sectionRef.current, {
            backgroundColor: '#ffffff',
            duration: 0.3, // Fast transition
            ease: 'power1.out' // Quick easing
          });
          
          // Revert text colors back
          gsap.to('.header-title', {
            color: '#000000',
            duration: 0.3,
            ease: 'power1.out'
          });
          gsap.to('.header-text', {
            color: '#000000',
            duration: 0.3,
            ease: 'power1.out'
          });
          gsap.to('.card-title, .card-text', {
            color: '#000000',
            duration: 0.3,
            ease: 'power1.out'
          });
          // Keep the blue span blue
          gsap.to('.blue-text', {
            color: '#60a5fa',
            duration: 0.3,
            ease: 'power1.out'
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative "
    >
      <div 
        ref={sectionRef}
        className="py-12"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full mb-12">
            Our Healthcare Tech Stack
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 header-title">
            The Seamless Healthcare Stack:
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            <span className="blue-text text-blue-400">Everything You Need.</span> <span className="header-text text-black">Nothing You Don't.</span>
          </h2>
          <p className="max-w-3xl mx-auto md:text-xl header-text">
            We've distilled the chaos of digital transformation into 5 essential services. No
            buzzwords. No bloat. Just the building blocks every modern healthcare system needs.
          </p>
        </div>

        {/* Cards Section */}
        <div className='w-[80%] mx-auto'>
          {cards.map((card, index) => (
            <HealthcareCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareServices;
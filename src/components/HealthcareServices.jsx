import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MobileCard = ({ card, isOpen, onClick }) => {
  return (
    <div className="mb-4 md:hidden">
      <div
        className={`rounded-xl overflow-hidden text-white p-6 ${isOpen ? 'min-h-[400px]' : 'h-16'}`}
        style={{ backgroundColor: isOpen?card.bg:'#FAFAFA'}}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start">
            <h2 className={`${isOpen?'text-2xl':'text-sm text-black'} font-medium`}>{card.title}</h2>
            <button
              onClick={onClick}
              className="p-2 rounded-full  bg-opacity-20"
            >
              <svg
                className={`w-5 h-5 transition-transform  duration-200 ${isOpen ? 'rotate-180' : 'text-black mt-[-10px]'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {isOpen ? (
            <>
              <div className="mt-4">
                <p className="mb-6 text-sm">{card.description}</p>
                <div className="mt-6">
                  <p className="font-medium mb-4">{card.actionVerb}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <img src={feature.icon} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative h-35 mt-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute bottom-5 right-0 w-48 h-48 object-contain"
                />
              </div>
            </>
          ) : (
            <div className="">
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const HealthcareCard = ({ card, index }) => {
  return (
    <div
      className={`hidden md:block rounded-xl overflow-hidden text-white p-6 md:p-20 my-10 sticky top-5 md:top-40`}
      style={{
        backgroundColor: card.bg,
        zIndex: card.z,
        marginBottom: index === 4 ? '100px' : '0px'
      }}
      data-card-id={`card-${index}`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            {card.title}
          </h2>
          <p className="mb-6 text-sm w-[70%] md:text-base">
            {card.description}
          </p>
          <div className="mt-6">
            <p className="font-medium mb-4">
              {card.actionVerb}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {card.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <img src={feature.icon} alt="" className="w-5 h-5" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center mt-8 md:mt-0">
          <div className="w-58 h-58 relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HealthcareServices = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const navRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);
  const [isMobileCardOpen, setIsMobileCardOpen] = useState(false);

  // Card data remains the same
  const cards = [
    {
      title: "Cloud Modernization & Data Migration",
      description: "Hospitals shouldn't be running on legacy servers and patchy backups. We migrate your data and workflows to cloud-native systems that are secure, scalable, and compliant.",
      image: "/stack-1.png",
      features: [
        { text: "Lift-and-shift from legacy to GCP / AWS / Azure", icon: "/c-1.svg" },
        { text: "HIPAA-ready infrastructure design", icon: "/c-2.svg" },
        { text: "Cost-efficient cloud architecture", icon: "/c-3.svg" },
        { text: "Built-in disaster recovery & backups", icon: "/c-4.svg" },
        { text: "Zero-downtime migration plans", icon: "/c-5.svg" }
      ],
      actionVerb: "What we do",
      bg: "#469FE1",
      z: "10",
    },
    {
      title: "Web & Patient Portal Development",
      description: "Your website is the digital front door. Your portals are the operational core. We make both seamless.",
      image: "/stack-2.png",
      features: [
        { text: "Custom hospital & clinic systems", icon: "/w-1.svg" },
        { text: "Patient registration, appointment booking flows", icon: "/w-2.svg" },
        { text: "Secure doctor dashboards with analytics", icon: "/w-3.svg" },
        { text: "Lab report access & billing integration", icon: "/w-4.svg" },
        { text: "Fully responsive, mobile-optimized portals", icon: "/w-5.svg" }
      ],
      actionVerb: "What we build:",
      bg: "#003ECB",
      z: "20",
    },
    {
      title: "Application Modernization",
      description: "Still using clunky, outdated EMRs or hospital software? We either rebuild or wrap modern interfaces around them — without interrupting your work.",
      image: "/stack-4.png",
      features: [
        { text: "Legacy EMRs or hospital management tools", icon: "/ap-1.svg" },
        { text: "Plug-and-play apps (pharmacy, lab, radiology modules)", icon: "/ap-2.svg" },
        { text: "API-based architecture for easier scaling", icon: "/ap-3.svg" },
        { text: "Real-time data synchronization", icon: "/ap-4.svg" },
        { text: "Integrations with billing, EHRs, and diagnostics", icon: "/ap-4.svg" }
      ],
      actionVerb: "What we modernize:",
      bg: "#5E80EB",
      z: "30",
    },
    {
      title: "Security & Compliance Setup",
      description: "Healthcare data is a goldmine — and a liability. We make sure you're always protected and audit-ready.",
      image: "/stack-3.png",
      features: [
        { text: "Full HIPAA compliance architecture", icon: "/s-1.svg" },
        { text: "End-to-end encryption & role-based access control", icon: "/s-2.svg" },
        { text: "Staff access logging & reporting", icon: "/s-3.svg" },
        { text: "Vulnerability scans and automated alerts", icon: "/s-4.svg" },
        { text: "NDHM/NHA compatibility for Indian systems", icon: "/s-5.svg" }
      ],
      actionVerb: "What's included:",
      bg: "#A1CB72",
      z: "40",
    },
    {
      title: "AI Readiness + MedCopilot Integration",
      description: "Once your data is structured and compliant, we plug in intelligence. MedCopilot becomes your doctor's assistant — and your operations brain.",
      image: "/stack-5.png",
      features: [
        { text: "Auto-generated summaries from patient history", icon: "/ai-1.svg" },
        { text: "Risk prediction dashboards before every visit", icon: "/ai-2.svg" },
        { text: "Smart note-taking tools for doctors", icon: "/ai-3.svg" },
        { text: "Infra for future AI use cases (chatbots, analytics, automation)", icon: "/ai-4.svg" },
        { text: "Works with Cerner, Epic, Practo, and any existing EMR", icon: "/ai-5.svg" }
      ],
      actionVerb: "Features unlocked:",
      bg: "#BF80A9",
      z: "50",
    }
  ];

  useEffect(() => {
    const handleScrollTrigger = () => {
      gsap.to(sectionRef.current, {
        backgroundColor: '#121820',
        duration: 0.3,
        ease: 'power1.in'
      });
      // gsap.to('.nav-div', {
      //   backgroundColor: '#121820',
      //   duration: 0.3,
      //   ease: 'power1.in'
      // });
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
    };

    const handleScrollTriggerBack = () => {
      gsap.to(sectionRef.current, {
        backgroundColor: '#ffffff',
        duration: 0.3,
        ease: 'power1.out'
      });
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
    };

    // Initialize GSAP for both desktop and mobile
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 50%",
        onEnter: handleScrollTrigger,
        onLeaveBack: handleScrollTriggerBack
      });

      if (window.innerWidth >= 768) {
        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: `[data-card-id="card-${index}"]`,
            start: "30% center",
            end: "bottom center",
            onEnter: () => setActiveTab(index),
            onEnterBack: () => setActiveTab(index),
          });
        });

        // Make nav sticky until the last card is reached
        ScrollTrigger.create({
          trigger: `[data-card-id="card-${cards.length - 1}"]`,
          start: "70% 20%",
          end: "bottom bottom",
          scrub: true,
          onEnter: () => {
            gsap.to(navRef.current, {
              position: 'relative',
              duration: 0.3,
              ease: 'power1.out'
            });
          },
          onLeaveBack: () => {
            gsap.to(navRef.current, {
              position: 'sticky',
              duration: 0.3,
              ease: 'power1.in'
            });
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleMobileDropdown = (index) => {
    setMobileOpenIndex(mobileOpenIndex === index ? null : index);
    setIsMobileCardOpen(mobileOpenIndex !== index);
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        ref={sectionRef}
        className="py-15"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header Section */}
        <div className="md:px-20 px-6 mb-16">
          <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full mb-12">
            Our Healthcare Tech Stack
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 header-title">
            The Seamless Healthcare Stack:
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            <span className="text-blue-400">Everything You Need.</span> <span className="header-text text-black">Nothing You Don't.</span>
          </h2>
          <p className="max-w-4xl md:text-xl header-text">
            We've distilled the chaos of digital transformation into 5 essential services. No
            buzzwords. No bloat. Just the building blocks every modern healthcare system needs.
          </p>
        </div>

        {/* Desktop Navigation Tabs */}
        {!isMobileCardOpen && (
          <div ref={navRef} className="hidden md:block sticky top-0 z-[10] bg-[transparent] nav-div">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-wrap justify-center gap-2 py-4">
                {cards.map((card, index) => (
                  <button
                    key={index}
                    className={`whitespace-nowrap px-3 py-2 text-sm rounded-full font-medium transition-colors ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {card.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Cards Section */}
        <div className="md:hidden px-6 space-y-4">
          {cards.map((card, index) => (
            <MobileCard
              key={index}
              card={card}
              isOpen={mobileOpenIndex === index}
              onClick={() => toggleMobileDropdown(index)}
            />
          ))}
        </div>

        {/* Desktop Cards Section */}
        <div className='hidden md:block w-[90%] mx-auto pt-8'>
          {cards.map((card, index) => (
            <HealthcareCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthcareServices;
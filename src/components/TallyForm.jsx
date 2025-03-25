import React, { useEffect } from 'react';

const TallyForm = () => {
  useEffect(() => {
    // Load Tally script dynamically if not already loaded
    if (!window.Tally) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        window.Tally.loadEmbeds();
      };
    } else {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/wA9vdy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="276"
      title="Contact form"
    ></iframe>
  );
};

export default TallyForm;
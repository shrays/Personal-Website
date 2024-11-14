import React, { useState, useEffect } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './Banner.css';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleScrollAndClose = (e) => {
    e.preventDefault();
    document.getElementById('lightbulb')?.scrollIntoView({ behavior: 'smooth' });
    setIsVisible(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const lightbulbSection = document.getElementById('lightbulb');
      if (lightbulbSection) {
        const rect = lightbulbSection.getBoundingClientRect();
        const isLightbulbVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isLightbulbVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lightbulb-flag">
      <button className="close-btn" onClick={handleClose}>
        <CloseRoundedIcon />
      </button>
      <span className="flag-content" onClick={handleScrollAndClose}>
        Check out my lamp controls!
      </span>
    </div>
  );
};

export default Banner;

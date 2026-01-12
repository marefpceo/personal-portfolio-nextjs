'use client'

import React, { useState, useEffect, useRef } from 'react';

export default function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setItems(React.Children.toArray(children));
  }, [children]);

  function nextSlide() {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  function prevSlide() {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container overflow-hidden w-full h-full relative">
      <div className="carousel-wrapper flex h-4/6 relative">
       
        <div ref={carouselRef} className='carousel-content-wrapper overflow-hidden w-full'>
          <div 
            className='carousel-content flex transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)`}}
          >
            {items.map((item, index) => (
              <div key={index} className='carousel-slide shrink-0 w-full'>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='my-12 h-1/4 items-center justify-center flex gap-16'>
        <button onClick={prevSlide} className='left-arrow w-16 p-2.5 z-50 rounded-4xl bg-nature-dark 
          border  border-nature-light/50 text-nature-accent shadow-[0_0_8px_0] 
          shadow-nature-accent'
        >
          &#10094;
        </button>
        <button onClick={nextSlide} className='right-arrow w-16 p-2.5 z-50 rounded-4xl bg-nature-dark
          border  border-nature-light/50 text-nature-accent shadow-[0_0_8px_0] 
          shadow-nature-accent'
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}
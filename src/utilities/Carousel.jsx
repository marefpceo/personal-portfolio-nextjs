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
    <div className="carousel-container overflow-hidden w-full relative">
      <div className="carousel-wrapper flex relative">
       
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
      <button onClick={prevSlide} className='left-arrow  bg-black
        text-white p-2.5 z-50'>
        &#10094;
      </button>
      <button onClick={nextSlide} className='right-arrow  bg-black
        text-white p-2.5 z-50'>
        &#10095;
      </button>
    </div>
  )

}
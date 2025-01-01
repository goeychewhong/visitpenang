import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import "../styles/TouristPage.css";
import image1 from '../assets/tourist1.jpg';
import image2 from '../assets/tourist2.jpg';
import image3 from '../assets/tourist3.jpg';
import touristbackground from '../assets/touristbackground.jpg';
import TouristLongCard from '../components/TouristLongCard';

function TouristSpotPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3];

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <>
      <div className="tourist-spot-page mt-24">
        <h1 className="page-title">TOP VACATION DESTINATION</h1>
        <div className="carousel w-full h-96 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item relative w-full h-full ${index === currentSlide ? 'block' : 'hidden'}`}
            >
              <img src={image} className="w-full h-full object-cover" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button className="btn btn-circle no-scroll" onClick={handlePrev}>❮</button>
                <button className="btn btn-circle no-scroll" onClick={handleNext}>❯</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img className="scaled-image" src={touristbackground} alt="touristbackground" />
        </div>
        <h1 className="text-4xl pt-12 text-black">Exploring Scenic Wonders</h1>
        <div className="flex justify-center pt-8">
          <TouristLongCard
            image={image1}
            title="Boracay"
            description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches."
          />
          <TouristLongCard
            image={image2}
            title="Boracay"
            description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches."
          />
        </div>
      </div>
    </>
  );
}

export default TouristSpotPage;
import React, { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import '../styles/styles.css';
import image1 from '../assets/Tourist/tourist1.jpg';
import image2 from '../assets/Tourist/tourist2.jpg';
import image3 from '../assets/Tourist/tourist3.jpg';
import touristbackground from '../assets/Tourist/touristbackground.jpg';
import TouristCard from '../components/TouristCard';

function TouristSpotPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [image1, image2, image3];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="bg-orange-50">
        <h1 className="page-title pt-20">TOP VACATION DESTINATION</h1>
        <div className="carousel w-full h-96 overflow-hidden">
          <div className="carousel-item relative w-full h-full">
            <img
              src={images[currentSlide]}
              className="w-full h-full object-cover"
              alt={`Slide ${currentSlide + 1}`}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={prevSlide} className="btn btn-circle no-scroll">❮</button>
              <button onClick={nextSlide} className="btn btn-circle no-scroll">❯</button>
            </div>
          </div>
        </div>
        <div>
          <img className="scaled-image" src={touristbackground} alt="touristbackground" />
        </div>
        <h1 className="text-4xl pt-12 text-black">Exploring Scenic Wonders</h1>
        <div className="flex justify-center pt-8">
          <TouristCard
            image={image1}
            title="Boracay"
            description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches."
          />
          <TouristCard
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
import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import '../styles/styles.css';
import image1 from '../assets/Tourist/tourist1.jpg';
import image2 from '../assets/Tourist/tourist2.jpg';
import image3 from '../assets/Tourist/tourist3.jpg';
import touristbackground from '../assets/Tourist/touristbackground.jpg';
import TouristCard from '../components/TouristCard';

function TouristSpotPage() {
  return (
    <><div className = "bg-orange-50">
      <h1 className="page-title mt-20">TOP VACATION DESTINATION</h1>
      <div className="carousel w-full h-96 overflow-hidden">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img
            src={image1}
            className="w-full h-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle no-scroll">❮</a>
            <a href="#slide2" className="btn btn-circle no-scroll">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img
            src={image2}
            className="w-full h-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle no-scroll">❮</a>
            <a href="#slide3" className="btn btn-circle no-scroll">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img
            src={image3}
            className="w-full h-full object-cover" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle no-scroll">❮</a>
            <a href="#slide1" className="btn btn-circle no-scroll">❯</a>
          </div>
        </div>
      </div>
      <div>
        <img className="scaled-image" src={touristbackground} alt="touristbackground" />
      </div>
      <h1 className="text-4xl pt-12 text-black">Exploring Scenic Wonders</h1>
      <div className="flex justify-center pt-8">
        <TouristCard image={image1}
          title="Boracay"
          description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches." />
        <TouristCard image={image2}
          title="Boracay"
          description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches." />
      </div>
    </div>
    </>
  );
}

export default TouristSpotPage;
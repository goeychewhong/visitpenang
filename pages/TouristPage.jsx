import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import "../styles/TouristPage.css";
import image1 from '../assets/tourist1.jpg';
import image2 from '../assets/tourist2.jpg';
import image3 from '../assets/tourist3.jpg';
import touristbackground from '../assets/touristbackground.jpg';
import TouristLongCard from '../components/TouristLongCard';

const slideImages = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
];

function TouristSpotPage() {
  return (
    <>
      <div className="tourist-spot-page mt-24">
        <h1 className="page-title">TOP VACATION DESTINATION</h1>
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
        <h1 className="text-4xl pt-12">Exploring Scenic Wonders</h1>
        <div className="flex justify-center pt-8">
          <TouristLongCard image={image1} title="Boracay" description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches." />
        </div>
      </div>
    </>
  );
}

export default TouristSpotPage;
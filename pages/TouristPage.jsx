import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
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
        <div className="slide-container">
          <Fade>
            {slideImages.map((each, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  <img src={each.url} alt={`slide${index + 1}`} />
                </div>
              </div>
            ))}
          </Fade>
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
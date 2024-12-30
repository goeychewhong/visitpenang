import React, { useRef } from 'react';
import TouristCard from '../components/TouristCard';
import "../styles/TouristPage.css";
import image1 from '../assets/tourist1.jpg';
import image2 from '../assets/tourist2.jpg';
import image3 from '../assets/tourist3.jpg';
import touristbackground from '../assets/touristbackground.jpg';
import TouristLongCard from '../components/TouristLongCard';

function scrollLeft(ref) {
  ref.current.scrollBy({ left: -ref.current.clientWidth, behavior: 'smooth' });
}

function scrollRight(ref) {
  ref.current.scrollBy({ left: ref.current.clientWidth, behavior: 'smooth' });
}

function TouristSpotPage() {
  const flowpaneRef = useRef(null);

  return (
    <>
      <div className="tourist-spot-page mt-24 ">
        <h1 className="page-title">TOP VACATION DESTINATION</h1>
        <div className="relative">
          <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef)}>&lt;</button>
          <div className="flowpane2" ref={flowpaneRef}>
            <TouristCard
              imageSrc={image1}
              name="Boracay"
              description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches."
              location="Malay, Aklan, Philippines"
              timeOpen="24/7"
              rating="4.5/5"
              className="tourist-card"
            />
            <TouristCard
              imageSrc={image2}
              name="Eiffel Tower"
              description="The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France."
              location="Paris, France"
              timeOpen="9 AM - 12 AM"
              rating="4.7/5"
              className="tourist-card"
            />
            <TouristCard
              imageSrc={image3}
              name="Great Wall of China"
              description="The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials."
              location="China"
              timeOpen="7 AM - 5 PM"
              rating="4.8/5"
              className="tourist-card"
            />
            {/* Add more TourismCard components as needed */}
          </div>
          <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef)}>&gt;</button>
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
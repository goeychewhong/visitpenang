import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../assets/video1.mp4';
import '../styles/Home.css'; // Import the new Home.css file
import foodicon from '../assets/foodicon.jpg';
import touristicon from '../assets/touristspot.png';
import accomodationicon from '../assets/accomodation.svg';
import Card from '../components/card';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';

function scrollLeft(ref) {
    ref.current.scrollBy({ left: -1200, behavior: 'smooth' });
}

function scrollRight(ref) {
    ref.current.scrollBy({ left: 1200, behavior: 'smooth' });
}

function HomePage() {
    const flowpaneRef1 = React.useRef(null);
    const flowpaneRef2 = React.useRef(null);
    const flowpaneRef3 = React.useRef(null);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="relative w-full h-screen overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-5xl font-extrabold mb-4">Welcome to Penang</h1>
                    <p className="text-lg">Discover the best places to visit, eat, and stay in Penang.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="relative w-full bg-orange-50 shadow-lg rounded-lg p-6 mt-[-32px] z-20">
                <div className="flex flex-col gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg shadow-sm">
                        <h2 className="text-5xl font-bold mb-2 text-black">Top Categories</h2>
                        <div className="flex justify-center gap-80 mt-4">
                            <Link to="/food-and-beverages">
                                <img src={foodicon} alt="f&b" className="w-20 h-20 object-contain bg-orange-50" />
                            </Link>
                            <Link to="/accommodations" >
                                <img src={accomodationicon} alt="accomodationicon" className="w-20 h-20 object-fill rounded-full bg-orange-50" />
                            </Link>
                            <Link to="/tourist-spots">
                                <img src={touristicon} alt="tourist" className="w-20 h-20 object-cover rounded-full bg-orange-50" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home-container">
                    <div className="section bg-orange-50 p-4 rounded-lg shadow-sm text-left">
                        <h2 className="text-3xl font-bold mb-2 text-black">Foods</h2>
                        <p className="text-black">Indulge in the diverse and delicious food scene, from street food to fine dining.</p>
                        <div className="relative">
                            <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef1)}>&lt;</button>
                            <div className="flowpane" ref={flowpaneRef1}>
                                <Card
                                    imageSrc={image1}
                                    imageName="Tourism Image 1"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                <Card
                                    imageSrc={image2}
                                    imageName="Tourism Image 2"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                <Card
                                    imageSrc={image3}
                                    imageName="Tourism Image 3"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                <Card
                                    imageSrc={image4}
                                    imageName="Tourism Image 4"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                <Card
                                    imageSrc={image5}
                                    imageName="Tourism Image 5"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                <Card
                                    imageSrc={image6}
                                    imageName="Tourism Image 6"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                {/* Add more Card components as needed */}
                            </div>
                            <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef1)}>&gt;</button>
                        </div>
                    </div>
                    <div className="section bg-orange-50 p-4 rounded-lg shadow-sm text-left">
                        <h2 className="text-3xl font-bold mb-2 text-black">Accommodations</h2>
                        <p className="text-black">Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses.</p>
                        <div className="relative">
                            <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef2)}>&lt;</button>
                            <div className="flowpane" ref={flowpaneRef2}>
                                <Card
                                    imageSrc={image6}
                                    imageName="Tourism Image 6"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                <Card
                                    imageSrc={image7}
                                    imageName="Tourism Image 7"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                <Card
                                    imageSrc={image8}
                                    imageName="Tourism Image 8"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                {/* Add more Card components as needed */}
                            </div>
                            <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef2)}>&gt;</button>
                        </div>
                    </div>
                    <div className="section bg-orange-50 p-4 rounded-lg shadow-sm text-left">
                        <h2 className="text-3xl font-bold mb-2 text-black">Tourism</h2>
                        <p className="text-black">Indulge in the diverse and delicious food scene, from street food to fine dining.</p>
                        <div className="relative">
                            <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef3)}>&lt;</button>
                            <div className="flowpane" ref={flowpaneRef3}>
                                <Card
                                    imageSrc={image5}
                                    imageName="Tourism Image 1"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                <Card
                                    imageSrc={image4}
                                    imageName="Tourism Image 2"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                <Card
                                    imageSrc={image9}
                                    imageName="Tourism Image 2"
                                    imageDescription="Find the perfect place to stay, whether you prefer luxury hotels or cozy guesthouses."
                                />
                                {/* Add more Card components as needed */}
                            </div>
                            <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef3)}>&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

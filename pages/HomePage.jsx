import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import video1 from '../assets/Home/video1.mp4';
import '../styles/styles.css';
import foodicon from '../assets/Home/foodicon.svg';
import touristicon from '../assets/Home/touristspot.svg';
import accomodationicon from '../assets/Home/accomodation.svg';
import FnBPage from './FnBPage';
import AccommodationsPage from './AccommodationsPage';
import TouristSpotsPage from './TouristPage';

function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center" id="home">
            <div className="relative w-full h-screen overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                    <h1 className="text-4xl mt-32 font-extrabold mb-4 text-center White">Welcome to Penang</h1>
                    <p className="text-l mb-12 text-center White">Discover the best places to visit, eat, and stay in Penang.</p>
                    <div className="p-7 rounded-3xl mx-4">
                        <h2 className="text-2xl font-bold mb-2 mt-24 text-white text-center">Top Categories</h2>
                        <div className="flex justify-center gap-8 mt-8">
                            <ScrollLink to="food-and-beverages" smooth={true} duration={500}>
                                <img src={foodicon} alt="f&b" className="w-16 h-16 rounded-3xl icon" />
                            </ScrollLink>
                            <ScrollLink to="accommodations" smooth={true} duration={500}>
                                <img src={accomodationicon} alt="accomodationicon" className="w-16 h-16 rounded-full icon" />
                            </ScrollLink>
                            <ScrollLink to="tourist-spots" smooth={true} duration={500}>
                                <img src={touristicon} alt="tourist" className="w-16 h-16 rounded-full icon" />
                            </ScrollLink>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-yellow-100 to-transparent"></div>
            </div>

            <div className="page-container bg-FBFAF5">
                <section id="food-and-beverages">
                    <FnBPage />
                </section>
            </div>
            <div className="page-container bg-FBFAF5">
                <section id="accommodations">
                    <AccommodationsPage />
                </section>
            </div>
            <div className="page-container bg-FBFAF5">
                <section id="tourist-spots">
                    <TouristSpotsPage />
                </section>
            </div>
        </div>
    );
}

export default HomePage;
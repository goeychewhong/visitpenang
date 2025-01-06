import React, { useState } from 'react';
import '../styles/styles.css';
import Bayview1 from '../assets/Accommodations/Bayview Beach Resort/Bayview1.Webp';
import Bayview2 from '../assets/Accommodations/Bayview Beach Resort/Bayview2.Webp';
import Bayview3 from '../assets/Accommodations/Bayview Beach Resort/Bayview3.Webp';
import Bayview4 from '../assets/Accommodations/Bayview Beach Resort/Bayview4.webp';
import Bayview5 from '../assets/Accommodations/Bayview Beach Resort/Bayview5.jpg';
import Eastern1 from '../assets/Accommodations/Eastern And Oriental Hotel/Eastern1.webp';
import Eastern2 from '../assets/Accommodations/Eastern And Oriental Hotel/Eastern2.webp';
import Eastern3 from '../assets/Accommodations/Eastern And Oriental Hotel/Eastern3.webp';
import Eastern4 from '../assets/Accommodations/Eastern And Oriental Hotel/Eastern4.webp';
import Eastern5 from '../assets/Accommodations/Eastern And Oriental Hotel/Eastern5.jpg';
import G1 from '../assets/Accommodations/G Hotel Gurney/G1.webp';
import G2 from '../assets/Accommodations/G Hotel Gurney/G2.webp';
import G3 from '../assets/Accommodations/G Hotel Gurney/G3.webp';
import G4 from '../assets/Accommodations/G Hotel Gurney/G4.webp';
import G5 from '../assets/Accommodations/G Hotel Gurney/G5.webp';
import Gur1 from '../assets/Accommodations/Gurney Bay Hotel/Gur1.webp';
import Gur2 from '../assets/Accommodations/Gurney Bay Hotel/Gur2.jpg';
import Gur3 from '../assets/Accommodations/Gurney Bay Hotel/Gur3.jpg';
import Gur4 from '../assets/Accommodations/Gurney Bay Hotel/Gur4.jpg';
import Gur5 from '../assets/Accommodations/Gurney Bay Hotel/Gur5.jpg';
import Hard1 from '../assets/Accommodations/Hard Rock Hotel Penang/Hard1.webp';
import Hard2 from '../assets/Accommodations/Hard Rock Hotel Penang/Hard2.webp';
import Hard3 from '../assets/Accommodations/Hard Rock Hotel Penang/Hard3.webp';
import Hard4 from '../assets/Accommodations/Hard Rock Hotel Penang/Hard4.jpg';
import Hard5 from '../assets/Accommodations/Hard Rock Hotel Penang/Hard5.jpg';
import Park1 from '../assets/Accommodations/Parkroyal Penang Resort/Park1.webp';
import Park2 from '../assets/Accommodations/Parkroyal Penang Resort/Park2.webp';
import Park3 from '../assets/Accommodations/Parkroyal Penang Resort/Park3.jpg';
import Park4 from '../assets/Accommodations/Parkroyal Penang Resort/Park4.webp';
import Shang1 from '../assets/Accommodations/Shangri-La Golden Sands, Penang/Shang1.webp';
import Shang2 from '../assets/Accommodations/Shangri-La Golden Sands, Penang/Shang2.webp';
import Shang3 from '../assets/Accommodations/Shangri-La Golden Sands, Penang/Shang3.webp';
import Shang4 from '../assets/Accommodations/Shangri-La Golden Sands, Penang/Shang4.jpg';
import Shang5 from '../assets/Accommodations/Shangri-La Golden Sands, Penang/Shang5.jpg';
import Sur1 from '../assets/Accommodations/Surprised Homestay Butterworth/Sur1.webp';
import Sur2 from '../assets/Accommodations/Surprised Homestay Butterworth/Sur2.jpg';
import Sur3 from '../assets/Accommodations/Surprised Homestay Butterworth/Sur3.jpg';
import Sur4 from '../assets/Accommodations/Surprised Homestay Butterworth/Sur4.jpg';
import Sur5 from '../assets/Accommodations/Surprised Homestay Butterworth/Sur5.webp';
import Val1 from '../assets/Accommodations/Value Inn Homestay/Val1.webp';
import Val2 from '../assets/Accommodations/Value Inn Homestay/Val2.jpg';
import Val3 from '../assets/Accommodations/Value Inn Homestay/Val3.jpg';
import Val4 from '../assets/Accommodations/Value Inn Homestay/Val4.jpg';
import Val5 from '../assets/Accommodations/Value Inn Homestay/Val5.webp';



import RoomCard from '../components/RoomCard';

const Accommodations = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [ratingRange, setRatingRange] = useState({ min: '', max: '' });
    const [showPriceRange, setShowPriceRange] = useState(false);
    const [showRatingRange, setShowRatingRange] = useState(false);
    const categories = ['All', 'Apartments', 'Hotels', 'Villas', 'Resorts'];

    const cards = [
        // Apartments
        {
            category: 'Apartments',
            title: 'Deluxe Apartment',
            description: 'A luxurious apartment with all the amenities you need for a comfortable stay.',
            images: [Bayview1,Bayview2, Bayview3, Bayview4, Bayview5],
            location: 'George Town',
            priceRange: 'RM100 - RM150',
            rating: 4,
        },
        // Hotels
        {
            category: 'Hotels',
            title: 'Deluxe Hotel Room',
            description: 'A luxurious hotel room with all the amenities you need for a comfortable stay.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4, Bayview5],
            location: 'George Town',
            priceRange: 'RM100 - RM150',
            rating: 4,
        },
        {
            category: 'Hotels',
            title: 'Superior Hotel Room',
            description: 'A spacious hotel room with modern decor and comfortable furnishings.',
            images: [Eastern1, Eastern2, Eastern3, Eastern4, Eastern5],
            location: 'Batu Ferringhi',
            priceRange: 'RM120 - RM170',
            rating: 5,
        },
        {
            category: 'Hotels',
            title: 'Standard Hotel Room',
            description: 'A cozy hotel room with all the basic amenities for a pleasant stay.',
            images: [G1, G2, G3, G4, G5],
            location: 'Tanjung Bungah',
            priceRange: 'RM80 - RM130',
            rating: 3,
        },
        {
            category: 'Hotels',
            title: 'Luxury Hotel Room',
            description: 'An elegant hotel room with premium amenities and stunning views.',
            images: [Gur1, Gur2, Gur3, Gur4, Gur5],
            location: 'Gurney Drive',
            priceRange: 'RM150 - RM200',
            rating: 5,
        },
        {
            category: 'Hotels',
            title: 'Budget Hotel Room',
            description: 'An affordable hotel room with essential amenities for a comfortable stay.',
            images: [Hard1, Hard2, Hard3, Hard4, Hard5],
            location: 'Air Itam',
            priceRange: 'RM50 - RM100',
            rating: 3,
        },
        {
            category: 'Hotels',
            title: 'Family Hotel Room',
            description: 'A spacious hotel room with multiple rooms, perfect for families.',
            images: [Park1, Park2, Park3, Park4],
            location: 'Bayan Lepas',
            priceRange: 'RM100 - RM150',
            rating: 4,
        },
        // Villas
        {
            category: 'Villas',
            title: 'Deluxe Villa',
            description: 'A luxurious villa with all the amenities you need for a comfortable stay.',
            images: [Shang1, Shang2, Shang3, Shang4, Shang5],
            location: 'George Town',
            priceRange: 'RM200 - RM250',
            rating: 4,
        },
        {
            category: 'Villas',
            title: 'Superior Villa',
            description: 'A spacious villa with modern decor and comfortable furnishings.',
            images: [Sur1, Sur2, Sur3, Sur4, Sur5],
            location: 'Batu Ferringhi',
            priceRange: 'RM200 - RM250',
            rating: 5,
        },
        {
            category: 'Villas',
            title: 'Standard Villa',
            description: 'A cozy villa with all the basic amenities for a pleasant stay.',
            images: [Val1, Val2, Val3, Val4, Val5],
            location: 'Tanjung Bungah',
            priceRange: 'RM150 - RM200',
            rating: 3,
        },
        {
            category: 'Villas',
            title: 'Luxury Villa',
            description: 'An elegant villa with premium amenities and stunning views.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4],
            location: 'Gurney Drive',
            priceRange: 'RM250 - RM300',
            rating: 5,
        },
        {
            category: 'Villas',
            title: 'Budget Villa',
            description: 'An affordable villa with essential amenities for a comfortable stay.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4],
            location: 'Air Itam',
            priceRange: 'RM100 - RM150',
            rating: 3,
        },
        {
            category: 'Villas',
            title: 'Family Villa',
            description: 'A spacious villa with multiple rooms, perfect for families.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4],
            location: 'Bayan Lepas',
            priceRange: 'RM200 - RM250',
            rating: 4,
        },
        // Resorts
        {
            category: 'Resorts',
            title: 'Deluxe Resort Room',
            description: 'A luxurious resort room with all the amenities you need for a comfortable stay.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4],
            location: 'George Town',
            priceRange: 'RM150 - RM200',
            rating: 4,
        },
        {
            category: 'Resorts',
            title: 'Superior Resort Room',
            description: 'A spacious resort room with modern decor and comfortable furnishings.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4],
            location: 'Batu Ferringhi',
            priceRange: 'RM200 - RM250',
            rating: 5,
        },
        {
            category: 'Resorts',
            title: 'Standard Resort Room',
            description: 'A cozy resort room with all the basic amenities for a pleasant stay.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4],
            location: 'Tanjung Bungah',
            priceRange: 'RM150 - RM200',
            rating: 3,
        },
        {
            category: 'Resorts',
            title: 'Luxury Resort Room',
            description: 'An elegant resort room with premium amenities and stunning views.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4],
            location: 'Gurney Drive',
            priceRange: 'RM200 - RM250',
            rating: 5,
        },
        {
            category: 'Resorts',
            title: 'Budget Resort Room',
            description: 'An affordable resort room with essential amenities for a comfortable stay.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4],
            location: 'Air Itam',
            priceRange: 'RM100 - RM150',
            rating: 3,
        },
        {
            category: 'Resorts',
            title: 'Family Resort Room',
            description: 'A spacious resort room with multiple rooms, perfect for families.',
            images: [Bayview1, Bayview2, Bayview3, Bayview4],
            location: 'Bayan Lepas',
            priceRange: 'RM150 - RM200',
            rating: 4,
        }
    ];

    const filterCards = (cards) => {
        return cards.filter(card => {
            const cardPriceRange = card.priceRange.match(/\d+/g).map(Number);
            const cardMinPrice = cardPriceRange[0];
            const cardMaxPrice = cardPriceRange[1];

            const minPrice = priceRange.min ? parseInt(priceRange.min) : 0;
            const maxPrice = priceRange.max ? parseInt(priceRange.max) : Infinity;

            const minRating = ratingRange.min ? parseInt(ratingRange.min) : 0;
            const maxRating = ratingRange.max ? parseInt(ratingRange.max) : 5;

            return (selectedCategory === 'All' || card.category === selectedCategory) &&
                (cardMinPrice >= minPrice && cardMaxPrice <= maxPrice) &&
                (card.rating >= minRating && card.rating <= maxRating);
        });
    };

    const luxuryCards = filterCards(cards.filter(card => card.title.includes('Deluxe') || card.title.includes('Luxury')));
    const standardCards = filterCards(cards.filter(card => card.title.includes('Standard')));
    const budgetCards = filterCards(cards.filter(card => card.title.includes('Budget')));

    return (
        <>
            <div className="bg-orange-50 p-6 pt-24">
                <h1 className="text-left text-3xl font-bold mb-4">Accommodations in Penang</h1>
                <p className="text-justify text-gray-800 mb-6">Discover the best resorts and hotels around Penang for a perfect stay.</p>
                <div className="flex justify-end mb-4">
                    <div className="flex items-center gap-2">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`p-2 rounded transition-colors duration-700 ${selectedCategory === category ? 'text-blue-950' : 'text-yellow-600'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setShowPriceRange(!showPriceRange)}
                                className="p-2 border border-gray-300 rounded bg-blue-950 text-white"
                            >
                                Price Range
                            </button>
                            <div className={`transition-opacity duration-500 ${showPriceRange ? 'opacity-100' : 'opacity-0'}`}>
                                {showPriceRange && (
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            placeholder="Min Price"
                                            value={priceRange.min}
                                            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Max Price"
                                            value={priceRange.max}
                                            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setShowRatingRange(!showRatingRange)}
                                className="p-2 border border-gray-300 rounded bg-blue-950 text-white"
                            >
                                Rating
                            </button>
                            <div className={`transition-opacity duration-500 ${showRatingRange ? 'opacity-100' : 'opacity-0'}`}>
                                {showRatingRange && (
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            placeholder="Min Rating"
                                            value={ratingRange.min}
                                            onChange={(e) => setRatingRange({ ...ratingRange, min: e.target.value })}
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Max Rating"
                                            value={ratingRange.max}
                                            onChange={(e) => setRatingRange({ ...ratingRange, max: e.target.value })}
                                            className="p-2 border border-gray-300 rounded"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start ml-[310px]">
                    <div className="text-left text-3xl text-blue-950">LUXURY</div>
                    <div className="text-left text-6xl text-blue-950">Accommodations</div>
                </div>
                <div className="flex flex-wrap justify-center gap-12 px-24">
                    {luxuryCards.map((card, index) => (
                        <RoomCard
                            key={index}
                            images={card.images}
                            title={card.title}
                            description={card.description}
                            location={card.location}
                            priceRange={card.priceRange}
                            rating={card.rating}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-start mt-20 ml-[310px]">
                    <div className="text-left text-3xl text-blue-950">STANDARD</div>
                    <div className="text-left text-6xl text-blue-950">Accommodations</div>
                </div>
                <div className="flex flex-wrap justify-center gap-12 px-24">
                    {standardCards.map((card, index) => (
                        <RoomCard
                            key={index}
                            images={card.images}
                            title={card.title}
                            description={card.description}
                            location={card.location}
                            priceRange={card.priceRange}
                            rating={card.rating}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-start mt-20 ml-[310px]">
                    <div className="text-left text-3xl text-blue-950">BUDGET</div>
                    <div className="text-left text-6xl text-blue-950">Accommodations</div>
                </div>
                <div className="flex flex-wrap justify-center gap-12 px-24">
                    {budgetCards.map((card, index) => (
                        <RoomCard
                            key={index}
                            images={card.images}
                            title={card.title}
                            description={card.description}
                            location={card.location}
                            priceRange={card.priceRange}
                            rating={card.rating}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Accommodations;
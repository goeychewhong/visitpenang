import React, { useState } from 'react';
import '../styles/styles.css';
import image1 from '../assets/Home/image1.jpg';
import image2 from '../assets/Home/image2.jpg';
import image3 from '../assets/Home/image3.jpg';
import image4 from '../assets/Home/image4.jpg';
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
            images: [image1, image2, image3, image4],
            location: 'George Town',
            priceRange: '$100 - $150',
            rating: 4,
        },
        {
            category: 'Apartments',
            title: 'Superior Apartment',
            description: 'A spacious apartment with modern decor and comfortable furnishings.',
            images: [image1, image2, image3, image4],
            location: 'Batu Ferringhi',
            priceRange: '$120 - $170',
            rating: 5,
        },
        {
            category: 'Apartments',
            title: 'Standard Apartment',
            description: 'A cozy apartment with all the basic amenities for a pleasant stay.',
            images: [image1, image2, image3, image4],
            location: 'Tanjung Bungah',
            priceRange: '$80 - $130',
            rating: 3,
        },
        {
            category: 'Apartments',
            title: 'Luxury Apartment',
            description: 'An elegant apartment with premium amenities and stunning views.',
            images: [image1, image2, image3, image4],
            location: 'Gurney Drive',
            priceRange: '$150 - $200',
            rating: 5,
        },
        {
            category: 'Apartments',
            title: 'Budget Apartment',
            description: 'An affordable apartment with essential amenities for a comfortable stay.',
            images: [image1, image2, image3, image4],
            location: 'Air Itam',
            priceRange: '$50 - $100',
            rating: 3,
        },
        {
            category: 'Apartments',
            title: 'Family Apartment',
            description: 'A spacious apartment with multiple rooms, perfect for families.',
            images: [image1, image2, image3, image4],
            location: 'Bayan Lepas',
            priceRange: '$100 - $150',
            rating: 4,
        },
        // Hotels
        {
            category: 'Hotels',
            title: 'Deluxe Hotel Room',
            description: 'A luxurious hotel room with all the amenities you need for a comfortable stay.',
            images: [image1, image2, image3, image4],
            location: 'George Town',
            priceRange: '$100 - $150',
            rating: 4,
        },
        {
            category: 'Hotels',
            title: 'Superior Hotel Room',
            description: 'A spacious hotel room with modern decor and comfortable furnishings.',
            images: [image1, image2, image3, image4],
            location: 'Batu Ferringhi',
            priceRange: '$120 - $170',
            rating: 5,
        },
        {
            category: 'Hotels',
            title: 'Standard Hotel Room',
            description: 'A cozy hotel room with all the basic amenities for a pleasant stay.',
            images: [image1, image2, image3, image4],
            location: 'Tanjung Bungah',
            priceRange: '$80 - $130',
            rating: 3,
        },
        {
            category: 'Hotels',
            title: 'Luxury Hotel Room',
            description: 'An elegant hotel room with premium amenities and stunning views.',
            images: [image1, image2, image3, image4],
            location: 'Gurney Drive',
            priceRange: '$150 - $200',
            rating: 5,
        },
        {
            category: 'Hotels',
            title: 'Budget Hotel Room',
            description: 'An affordable hotel room with essential amenities for a comfortable stay.',
            images: [image1, image2, image3, image4],
            location: 'Air Itam',
            priceRange: '$50 - $100',
            rating: 3,
        },
        {
            category: 'Hotels',
            title: 'Family Hotel Room',
            description: 'A spacious hotel room with multiple rooms, perfect for families.',
            images: [image1, image2, image3, image4],
            location: 'Bayan Lepas',
            priceRange: '$100 - $150',
            rating: 4,
        },
        // Villas
        {
            category: 'Villas',
            title: 'Deluxe Villa',
            description: 'A luxurious villa with all the amenities you need for a comfortable stay.',
            images: [image1, image2, image3, image4],
            location: 'George Town',
            priceRange: '$200 - $250',
            rating: 4,
        },
        {
            category: 'Villas',
            title: 'Superior Villa',
            description: 'A spacious villa with modern decor and comfortable furnishings.',
            images: [image1, image2, image3, image4],
            location: 'Batu Ferringhi',
            priceRange: '$200 - $250',
            rating: 5,
        },
        {
            category: 'Villas',
            title: 'Standard Villa',
            description: 'A cozy villa with all the basic amenities for a pleasant stay.',
            images: [image1, image2, image3, image4],
            location: 'Tanjung Bungah',
            priceRange: '$150 - $200',
            rating: 3,
        },
        {
            category: 'Villas',
            title: 'Luxury Villa',
            description: 'An elegant villa with premium amenities and stunning views.',
            images: [image1, image2, image3, image4],
            location: 'Gurney Drive',
            priceRange: '$250 - $300',
            rating: 5,
        },
        {
            category: 'Villas',
            title: 'Budget Villa',
            description: 'An affordable villa with essential amenities for a comfortable stay.',
            images: [image1, image2, image3, image4],
            location: 'Air Itam',
            priceRange: '$100 - $150',
            rating: 3,
        },
        {
            category: 'Villas',
            title: 'Family Villa',
            description: 'A spacious villa with multiple rooms, perfect for families.',
            images: [image1, image2, image3, image4],
            location: 'Bayan Lepas',
            priceRange: '$200 - $250',
            rating: 4,
        },
        // Resorts
        {
            category: 'Resorts',
            title: 'Deluxe Resort Room',
            description: 'A luxurious resort room with all the amenities you need for a comfortable stay.',
            images: [image1, image2, image3, image4],
            location: 'George Town',
            priceRange: '$150 - $200',
            rating: 4,
        },
        {
            category: 'Resorts',
            title: 'Superior Resort Room',
            description: 'A spacious resort room with modern decor and comfortable furnishings.',
            images: [image1, image2, image3, image4],
            location: 'Batu Ferringhi',
            priceRange: '$200 - $250',
            rating: 5,
        },
        {
            category: 'Resorts',
            title: 'Standard Resort Room',
            description: 'A cozy resort room with all the basic amenities for a pleasant stay.',
            images: [image1, image2, image3, image4],
            location: 'Tanjung Bungah',
            priceRange: '$150 - $200',
            rating: 3,
        },
        {
            category: 'Resorts',
            title: 'Luxury Resort Room',
            description: 'An elegant resort room with premium amenities and stunning views.',
            images: [image1, image2, image3, image4],
            location: 'Gurney Drive',
            priceRange: '$200 - $250',
            rating: 5,
        },
        {
            category: 'Resorts',
            title: 'Budget Resort Room',
            description: 'An affordable resort room with essential amenities for a comfortable stay.',
            images: [image1, image2, image3, image4],
            location: 'Air Itam',
            priceRange: '$100 - $150',
            rating: 3,
        },
        {
            category: 'Resorts',
            title: 'Family Resort Room',
            description: 'A spacious resort room with multiple rooms, perfect for families.',
            images: [image1, image2, image3, image4],
            location: 'Bayan Lepas',
            priceRange: '$150 - $200',
            rating: 4,
        },
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
                    <div className="text-left text-6xl text-blue-950">ACCOMODATIONS</div>
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
                    <div className="text-left text-6xl text-blue-950">ACCOMODATIONS</div>
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
                    <div className="text-left text-6xl text-blue-950">ACCOMODATIONS</div>
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
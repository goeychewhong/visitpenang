import React, { useState } from 'react';
import '../styles/styles.css';
import image1 from '../assets/Home/image1.jpg';
import image2 from '../assets/Home/image2.jpg';
import image3 from '../assets/Home/image3.jpg';
import image4 from '../assets/Home/image4.jpg';
import RoomCard from '../components/RoomCard';

const Accommodations = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPriceRange, setSelectedPriceRange] = useState('All');
    const [selectedRating, setSelectedRating] = useState('All');
    const [hoveredFilter, setHoveredFilter] = useState(null);

    const categories = ['All', 'Apartments', 'Hotels', 'Villas', 'Resorts'];
    const priceRanges = ['All', '$50 - $100', '$100 - $150', '$150 - $200', '$200 - $250', '$250 - $300'];
    const ratings = ['All', '1', '2', '3', '4', '5'];

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
            priceRange: '$60 - $100',
            rating: 3,
        },
        {
            category: 'Apartments',
            title: 'Family Apartment',
            description: 'A spacious apartment with multiple rooms, perfect for families.',
            images: [image1, image2, image3, image4],
            location: 'Bayan Lepas',
            priceRange: '$130 - $180',
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
            priceRange: '$60 - $100',
            rating: 3,
        },
        {
            category: 'Hotels',
            title: 'Family Hotel Room',
            description: 'A spacious hotel room with multiple rooms, perfect for families.',
            images: [image1, image2, image3, image4],
            location: 'Bayan Lepas',
            priceRange: '$130 - $180',
            rating: 4,
        },
        // Villas
        {
            category: 'Villas',
            title: 'Deluxe Villa',
            description: 'A luxurious villa with all the amenities you need for a comfortable stay.',
            images: [image1, image2, image3, image4],
            location: 'George Town',
            priceRange: '$200 - $300',
            rating: 4,
        },
        {
            category: 'Villas',
            title: 'Superior Villa',
            description: 'A spacious villa with modern decor and comfortable furnishings.',
            images: [image1, image2, image3, image4],
            location: 'Batu Ferringhi',
            priceRange: '$220 - $320',
            rating: 5,
        },
        {
            category: 'Villas',
            title: 'Standard Villa',
            description: 'A cozy villa with all the basic amenities for a pleasant stay.',
            images: [image1, image2, image3, image4],
            location: 'Tanjung Bungah',
            priceRange: '$180 - $250',
            rating: 3,
        },
        {
            category: 'Villas',
            title: 'Luxury Villa',
            description: 'An elegant villa with premium amenities and stunning views.',
            images: [image1, image2, image3, image4],
            location: 'Gurney Drive',
            priceRange: '$250 - $350',
            rating: 5,
        },
        {
            category: 'Villas',
            title: 'Budget Villa',
            description: 'An affordable villa with essential amenities for a comfortable stay.',
            images: [image1, image2, image3, image4],
            location: 'Air Itam',
            priceRange: '$150 - $200',
            rating: 3,
        },
        {
            category: 'Villas',
            title: 'Family Villa',
            description: 'A spacious villa with multiple rooms, perfect for families.',
            images: [image1, image2, image3, image4],
            location: 'Bayan Lepas',
            priceRange: '$230 - $300',
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
            priceRange: '$170 - $220',
            rating: 5,
        },
        {
            category: 'Resorts',
            title: 'Standard Resort Room',
            description: 'A cozy resort room with all the basic amenities for a pleasant stay.',
            images: [image1, image2, image3, image4],
            location: 'Tanjung Bungah',
            priceRange: '$130 - $180',
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
            priceRange: '$180 - $230',
            rating: 4,
        },
    ];

    const luxuryCards = cards.filter(card => card.priceRange.includes('$150') || card.priceRange.includes('$200') || card.priceRange.includes('$250') || card.priceRange.includes('$300'));
    const standardCards = cards.filter(card => card.priceRange.includes('$100') || card.priceRange.includes('$130'));
    const budgetCards = cards.filter(card => card.priceRange.includes('$50') || card.priceRange.includes('$60') || card.priceRange.includes('$80'));

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
                                    className={`p-2 border border-gray-300 rounded ${selectedCategory === category ? 'bg-gray-300' : ''}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <select
                            value={selectedPriceRange}
                            onChange={(e) => setSelectedPriceRange(e.target.value)}
                            className="p-2 border border-gray-300 rounded"
                            onMouseEnter={() => setHoveredFilter('price')}
                            onMouseLeave={() => setHoveredFilter(null)}
                        >
                            <option value="All">Price Range</option>
                            {priceRanges.map((range) => (
                                <option key={range} value={range}>
                                    {range}
                                </option>
                            ))}
                        </select>
                        <select
                            value={selectedRating}
                            onChange={(e) => setSelectedRating(e.target.value)}
                            className="p-2 border border-gray-300 rounded"
                            onMouseEnter={() => setHoveredFilter('rating')}
                            onMouseLeave={() => setHoveredFilter(null)}
                        >
                            <option value="All">Rating</option>
                            {ratings.map((rating) => (
                                <option key={rating} value={rating}>
                                    {rating}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex flex-col items-start ml-[310px]">
                    <div className="text-left text-3xl text-blue-950">LUXURY</div>
                    <div className="text-left text-6xl text-blue-950">ACCOMODATIONS</div>
                </div>
                <div className="flex flex-wrap justify-center gap-12 px-24">
                    {luxuryCards
                        .filter((card) => selectedCategory === 'All' || card.category === selectedCategory)
                        .filter((card) => selectedPriceRange === 'All' || card.priceRange === selectedPriceRange)
                        .filter((card) => selectedRating === 'All' || card.rating === parseInt(selectedRating))
                        .map((card, index) => (
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
                    {standardCards
                        .filter((card) => selectedCategory === 'All' || card.category === selectedCategory)
                        .filter((card) => selectedPriceRange === 'All' || card.priceRange === selectedPriceRange)
                        .filter((card) => selectedRating === 'All' || card.rating === parseInt(selectedRating))
                        .map((card, index) => (
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
                    {budgetCards
                        .filter((card) => selectedCategory === 'All' || card.category === selectedCategory)
                        .filter((card) => selectedPriceRange === 'All' || card.priceRange === selectedPriceRange)
                        .filter((card) => selectedRating === 'All' || card.rating === parseInt(selectedRating))
                        .map((card, index) => (
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
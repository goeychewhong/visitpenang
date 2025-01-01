import '../styles/styles.css';
import image1 from '../assets/Home/image1.jpg';
import image2 from '../assets/Home/image2.jpg';
import image3 from '../assets/Home/image3.jpg';
import image4 from '../assets/Home/image4.jpg';
import RoomCard from '../components/RoomCard';

const Accommodations = () => {
    return (
        <>
            <div className="bg-orange-50 p-6 pt-24">
                <h1 className="text-left text-3xl font-bold mb-4">Accommodations in Penang</h1>
                <p className="text-justify text-gray-800 mb-6">Discover the best resorts and hotels around Penang for a perfect stay.</p>
                <div className="flex flex-wrap justify-center gap-12 px-24">
                    <RoomCard
                        images={[image1, image2, image3, image4]}
                        title="Deluxe Room"
                        description="A luxurious room with all the amenities you need for a comfortable stay."
                    />
                    <RoomCard
                        images={[image1, image2, image3, image4]}
                        title="Deluxe Room"
                        description="A luxurious room with all the amenities you need for a comfortable stay."
                    />
                    <RoomCard
                        images={[image1, image2, image3, image4]}
                        title="Deluxe Room"
                        description="A luxurious room with all the amenities you need for a comfortable stay."
                    />
                    <RoomCard
                        images={[image1, image2, image3, image4]}
                        title="Deluxe Room"
                        description="A luxurious room with all the amenities you need for a comfortable stay."
                    />
                    <RoomCard
                        images={[image1, image2, image3, image4]}
                        title="Deluxe Room"
                        description="A luxurious room with all the amenities you need for a comfortable stay."
                    />
                </div>
            </div>
            <div className = "text-3xl text-blue-950 " >LUXURY </div>
            <div className = "text-6xl text-blue-950 ">ACCOMODATIONS</div>
            <div>
                
            </div>
        </>
    );
};

export default Accommodations;
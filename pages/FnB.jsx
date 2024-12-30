import React from 'react';
import { Link } from 'react-router-dom';
import foodImage1 from '../assets/food1.jpg';
import foodImage2 from '../assets/food2.jpg';
import foodImage3 from '../assets/food3.jpg';
import foodImage4 from '../assets/food4.jpg'; 
import foodImage5 from '../assets/food5.jpg';
import bannerVideo from '../assets/banner.mp4'; // Import the banner video
import StarRating from '../components/StarRating'; // Import the StarRating component

function scrollLeft(ref) {
    ref.current.scrollBy({ left: -1200, behavior: 'smooth' });
}

function scrollRight(ref) {
    ref.current.scrollBy({ left: 1200, behavior: 'smooth' });
}

function FnBPage() {
  const flowpaneRef1 = React.useRef(null);
  const flowpaneRef2 = React.useRef(null);
  const flowpaneRef3 = React.useRef(null);

  return (
    <div className="min-h-screen bg-peach-100 flex flex-col items-center justify-center p-6">
      <video className="w-full h-64 object-cover mb-6" autoPlay loop muted>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> {/* Add the banner video */}
      <div className="w-full bg-orange-50 shadow-2xl rounded-lg p-8">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-yellow-700">Beverages and Food</h1>
        <p className="text-3xl text-gray-800 mb-8 text-center font-mountainsChristmas">
          Indulge in the diverse and delicious food scene in Penang. From street food to fine dining, there's something for everyone.
        </p>
        <h2 className="text-6xl mb-8 mt-40 text-center font-bold text-yellow-700 font-barriecito">Food You Must Try in Penang</h2>
        <p className="text-3xl text-gray-800 mb-8 text-center font-mountainsChristmas">
          Penang is a food lover’s paradise, offering a rich blend of flavors from its diverse cultures. The island’s culinary scene is a vibrant mix of unique dishes that reflect its Malay, Chinese, and Indian influences, making it a must-visit destination for food enthusiasts.
        </p>
        <div className="section bg-orange-50 p-4 rounded-2xl shadow-2xl text-left">
          <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-black">Foods</h2>
          <p className="text-black pl-6 text-xl">Indulge in the diverse and delicious food scene, from street food to fine dining.</p>
          <div className="relative">
            <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef1)}>&lt;</button>
            <div className="flowpane" ref={flowpaneRef1}>
              <Link to="/food-posts/1" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage1} alt="Food 1" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Curry Noodle</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Penang curry noodles are a spicy, coconut-based noodle soup topped with prawns, cockles, tofu puffs, and sambal, offering a rich and flavorful taste.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/2" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage2} alt="Food 2" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-900">Char Kuey Teow</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-black ">
                    Char Kuey Teow is a smoky, stir-fried flat rice noodle dish from Penang, cooked with prawns, cockles, egg, bean sprouts, and Chinese chives in a savory soy sauce.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/3" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage3} alt="Food 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Cendol</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Cendol is a refreshing Malaysian dessert made of shaved ice, pandan-flavored green jelly, coconut milk, and gula melaka which is a palm sugar syrup.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/4" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage1} alt="Food 4" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Curry Noodle</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Penang curry noodles are a spicy, coconut-based noodle soup topped with prawns, cockles, tofu puffs, and sambal, offering a rich and flavorful taste.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/5" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage2} alt="Food 5" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-900">Char Kuey Teow</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-black ">
                    Char Kuey Teow is a smoky, stir-fried flat rice noodle dish from Penang, cooked with prawns, cockles, egg, bean sprouts, and Chinese chives in a savory soy sauce.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/6" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage3} alt="Food 6" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Cendol</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Cendol is a refreshing Malaysian dessert made of shaved ice, pandan-flavored green jelly, coconut milk, and gula melaka which is a palm sugar syrup.
                  </p>
                </div>
              </Link>
              {/* Add more Card components as needed */}
            </div>
            <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef1)}>&gt;</button>
          </div>
        </div>
        <div className="section bg-orange-50 p-4 rounded-2xl shadow-2xl text-left">
          <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-black">Desserts</h2>
          <p className="text-black pl-6 text-xl">Explore more delicious dessert options in Penang.</p>
          <div className="relative">
            <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef2)}>&lt;</button>
            <div className="flowpane" ref={flowpaneRef2}>
              <Link to="/food-posts/7" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage4} alt="Food 7" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Laksa</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Laksa is a spicy noodle soup with a rich, flavorful broth made from fish, tamarind, and spices, topped with fresh herbs and vegetables.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/8" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage5} alt="Food 8" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-900">Hokkien Mee</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-black ">
                    Hokkien Mee is a flavorful noodle dish made with a rich prawn broth, served with prawns, pork, egg, and bean sprouts.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/9" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage3} alt="Food 9" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Nasi Kandar</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Nasi Kandar is a popular Malaysian dish consisting of steamed rice served with a variety of curries and side dishes.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/10" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage4} alt="Food 10" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Laksa</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Laksa is a spicy noodle soup with a rich, flavorful broth made from fish, tamarind, and spices, topped with fresh herbs and vegetables.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/11" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage5} alt="Food 11" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-900">Hokkien Mee</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-black ">
                    Hokkien Mee is a flavorful noodle dish made with a rich prawn broth, served with prawns, pork, egg, and bean sprouts.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/12" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage3} alt="Food 12" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Nasi Kandar</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Nasi Kandar is a popular Malaysian dish consisting of steamed rice served with a variety of curries and side dishes.
                  </p>
                </div>
              </Link>
              {/* Add more Card components as needed */}
            </div>
            <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef2)}>&gt;</button>
          </div>
        </div>
        <div className="section bg-orange-50 p-4 rounded-2xl shadow-2xl text-left">
          <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-black">Drinks</h2>
          <p className="text-black pl-6 text-xl">Explore a variety of refreshing drinks in Penang.</p>
          <div className="relative">
            <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef3)}>&lt;</button>
            <div className="flowpane" ref={flowpaneRef3}>
              <Link to="/food-posts/13" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage4} alt="Drink 1" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Teh Tarik</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Teh Tarik is a popular Malaysian milk tea with a rich, creamy flavor, made by "pulling" the tea to create a frothy top.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/14" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage5} alt="Drink 2" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-900">Cendol</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-black ">
                    Cendol is a refreshing Malaysian dessert drink made of shaved ice, pandan-flavored green jelly, coconut milk, and gula melaka.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/9" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage3} alt="Drink 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Air Batu Campur</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Air Batu Campur, also known as ABC, is a popular Malaysian dessert drink made of shaved ice, red beans, sweet corn, grass jelly, and various syrups.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/13" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage4} alt="Drink 1" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Teh Tarik</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Teh Tarik is a popular Malaysian milk tea with a rich, creamy flavor, made by "pulling" the tea to create a frothy top.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/14" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage5} alt="Drink 2" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-900">Cendol</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-black ">
                    Cendol is a refreshing Malaysian dessert drink made of shaved ice, pandan-flavored green jelly, coconut milk, and gula melaka.
                  </p>
                </div>
              </Link>
              <Link to="/food-posts/9" className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage3} alt="Drink 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-48">
                  <span className="text-xl font-bold text-yellow-100">Air Batu Campur</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-sm mt-6 text-white">
                    Air Batu Campur, also known as ABC, is a popular Malaysian dessert drink made of shaved ice, red beans, sweet corn, grass jelly, and various syrups.
                  </p>
                </div>
              </Link>
              {/* Add more Card components as needed */}
            </div>
            <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef3)}>&gt;</button>
          </div>
        </div>
        <h2 className="text-6xl mt-12 text-center font-bold text-yellow-700 font-barriecito">Penang Special</h2>
        <p className="text-3xl text-gray-800 mb-8 text-center font-mountainsChristmas">
          Discover the unique and special dishes that Penang has to offer. These are the must-try foods that you can't miss!
        </p>
        <div className="flex flex-col items-center gap-6">
          <Link to="/special-posts/1" className="block w-full md:w-3/4">
            <div className="relative overflow-hidden rounded-lg shadow-lg flex w-200 h-96">
              <div className="w-1/2 h-48 flex-shrink-0">
                <img src={foodImage4} alt="Special Food 1" className="w-full h-81 object-cover " />
              </div>
              <div className="flex flex-col justify-center p-4 w-1/2 bg-yellow-200 ">
                <span className="text-3xl font-bold text-amber-900 font-playfair">New Lane Hawker Center</span>
                <p className="text-sm mt-2 font-bold text-black font-merriweather">
                  New Lane Hawker Center opens at 4 pm every day when Georgetown’s Lorong Baru closes down to vehicular traffic. Automobiles are required to find alternate routes to their destination because the street turns into a thriving outdoor hawker food center. Hawkers furiously fry up their specialties, which include char kway teow (flat rice noodles with cockles, prawns, chili and bean sprouts), and chee cheong fun (rice noodle rolls).
                  <br /><br />
                  Expect to sit on colorful plastic tables and chairs on the roadside. Our favorite dish here is congee, a Chinese oatmeal made with rice instead of oats, which makes for a filling, hearty meal. Flavored with a variety of side dishes, anything from fresh crab and eggs to pork and ginger chicken, this is basically Chinese comfort food.
                  <br /><br />
                  Location: Lorong Baru, 10450 George Town, Penang, Malaysia
                  <br />
                  Open: Daily from 4 pm to 2 am
                </p>
              </div>
            </div>
          </Link>
          <Link to="/special-posts/2" className="block w-full md:w-3/4">
            <div className="relative overflow-hidden rounded-lg shadow-lg flex w-200 h-96">
              <div className="w-1/2 h-48 flex-shrink-0">
                <img src={foodImage5} alt="Special Food 2" className="w-full h-81 object-cover" />
              </div>
              <div className="flex flex-col justify-center p-4 w-1/2 bg-amber-900">
                <span className="text-3xl font-bold text-yellow-200 font-playfair">Gurney Drive Hawker Center</span>
                <p className="text-sm mt-2 font-bold text-white font-merriweather">
                  Home to the biggest variety of street food in Penang, Persiaran Gurney’s busy and iconic Gurney Drive Hawker Center, right beside Gurney Plaza Mall, is a great place to sample some of the best local dishes on the island. We recommend the char koay kak, soft white radish stir-fried with crunchy bean sprouts, chili, egg and pork lard, which is simply delicious, but also recommended is the barbecue roasting station (particularly the beef meatballs) which will please even the pickiest eater.
                  <br /><br />
                  The cafeteria-style seating is a little cramped, so the first thing to do is to find seats before ordering your food – in fact, copy the locals by standing behind diners who seem to be near finishing, then be ready to grab their soon-to-be-vacant seat.
                  <br /><br />
                  Location: 172, Solok Gurney 1, Pulau Tikus, 10250 Jelutong, Penang, Malaysia
                  <br />
                  Open: Daily from 6 pm to midnight
                </p>
              </div>
            </div>
          </Link>
          <Link to="/special-posts/1" className="block w-full md:w-3/4">
            <div className="relative overflow-hidden rounded-lg shadow-lg flex w-200 h-96">
              <div className="w-1/2 h-48 flex-shrink-0">
                <img src={foodImage4} alt="Special Food 1" className="w-full h-81 object-cover" />
              </div>
              <div className="flex flex-col justify-center p-4 w-1/2 bg-yellow-200 ">
                <span className="text-3xl font-bold text-amber-900 font-playfair">New Lane Hawker Center</span>
                <p className="text-sm mt-2 font-bold text-black font-merriweather">
                  New Lane Hawker Center opens at 4 pm every day when Georgetown’s Lorong Baru closes down to vehicular traffic. Automobiles are required to find alternate routes to their destination because the street turns into a thriving outdoor hawker food center. Hawkers furiously fry up their specialties, which include char kway teow (flat rice noodles with cockles, prawns, chili and bean sprouts), and chee cheong fun (rice noodle rolls).
                  <br /><br />
                  Expect to sit on colorful plastic tables and chairs on the roadside. Our favorite dish here is congee, a Chinese oatmeal made with rice instead of oats, which makes for a filling, hearty meal. Flavored with a variety of side dishes, anything from fresh crab and eggs to pork and ginger chicken, this is basically Chinese comfort food.
                  <br /><br />
                  Location: Lorong Baru, 10450 George Town, Penang, Malaysia
                  <br />
                  Open: Daily from 4 pm to 2 am
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FnBPage;
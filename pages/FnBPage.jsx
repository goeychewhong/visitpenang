import React from 'react';
import { Link } from 'react-router-dom';
import foodImage1 from '../assets/Fnb/food1.jpg';
import foodImage2 from '../assets/Fnb/food2.jpg';
import foodImage3 from '../assets/Fnb/food3.jpg';
import foodImage4 from '../assets/Fnb/food4.jpg';
import foodImage5 from '../assets/Fnb/food5.jpg';
import foodImage6 from '../assets/Fnb/food6.jpg';
import drinkImage1 from '../assets/Fnb/drink1.jpg';
import drinkImage2 from '../assets/Fnb/drink2.jpg';
import '../styles/styles.css';
import drinkImage3 from '../assets/Fnb/drink3.jpg';
import drinkImage4 from '../assets/Fnb/drink4.jpg';
import drinkImage5 from '../assets/Fnb/drink5.jpg';
import drinkImage6 from '../assets/Fnb/drink6.jpg';
import dessertImage1 from '../assets/Fnb/dessert1.jpg';
import dessertImage2 from '../assets/Fnb/dessert2.jpg';
import dessertImage3 from '../assets/Fnb/dessert3.jpg';
import dessertImage4 from '../assets/Fnb/dessert4.jpg';
import dessertImage5 from '../assets/Fnb/dessert5.jpg';
import dessertImage6 from '../assets/Fnb/dessert6.jpg';
import hawkerImage1 from '../assets/Fnb/hawker1.jpg';
import hawkerImage2 from '../assets/Fnb/hawker2.jpg';
import hawkerImage3 from '../assets/Fnb/hawker3.jpg';
import bannerVideo from '../assets/Fnb/banner.mp4'; // Import the banner video
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
      <video className="w-full h-72 object-cover mb-6 mt-24" autoPlay loop muted>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> {/* Add the banner video */}
      <div className="w-full bg-orange-50 shadow-2xl rounded-lg p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-left text-yellow-700">Food and Beverages</h1>
        <p className="text-2xl text-gray-800 mb-8 text-justify font-mountainsChristmas">
          Indulge in the diverse and delicious food scene in Penang. From street food to fine dining, there's something for everyone.           Penang is a food lover’s paradise, offering a rich blend of flavors from its diverse cultures. The island’s culinary scene is a vibrant mix of unique dishes that reflect its Malay, Chinese, and Indian influences, making it a must-visit destination for food enthusiasts.
        </p>

        <h2 className="text-4xl mb-8 mt-15 text-center font-bold text-yellow-700 font-barriecito">Food You Must Try in Penang</h2>
        <div className="section bg-orange-200 p-4 rounded-2xl shadow-2xl text-left">
          <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-yellow-900">Foods</h2>
          <p className="text-yellow-900 pl-6 text-xl">Indulge in the diverse and delicious food scene, from street food to fine dining.</p>
          <div className="relative">
            <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef1)}>&lt;</button>
            <div className="flowpane" ref={flowpaneRef1}>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage1} alt="Food 1" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-100 text-center block">Curry Noodle</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-white">
                    Penang curry noodles are a spicy, coconut-based noodle soup topped with prawns, cockles, tofu puffs, and sambal, offering a rich and flavorful taste.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage2} alt="Food 2" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-900 text-center block">Char Kuey Teow</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-black ">
                    Char Kuey Teow is a smoky, stir-fried flat rice noodle dish from Penang, cooked with prawns, cockles, egg, bean sprouts, and Chinese chives in a savory soy sauce.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage3} alt="Food 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-100 text-center block">Nasi Kandar</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-white">
                    Steamed rice served with a variety of flavorful curries, meats, and vegetables. A signature Malaysian-Indian fusion meal.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage4} alt="Food 5" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-900 text-center block">Hokkien Mee</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-black ">
                    A prawn noodle soup with a rich broth made from prawns and pork ribs, served with egg noodles, seafood, and sambal.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage5} alt="Food 6" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-100 text-center block">Oyster Omelette</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-white">
                    Also known as Orh Jian, it is a crispy and savory omelet cooked with plump oysters, eggs, and starch for a chewy texture.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={foodImage6} alt="Food 5" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-900 text-center block">Asam Laksa</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-black ">
                    A tangy and spicy noodle soup, it features thick rice noodles in a flavorful tamarind-based broth. The bold, sour, and slightly spicy taste makes it a beloved dish in Penang
                  </p>
                </div>
              </div>
              {/* Add more Card components as needed */}
            </div>
            <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef1)}>&gt;</button>
          </div>
        </div>
        <div className="section bg-yellow-800 p-4 rounded-2xl shadow-2xl text-left">
          <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-yellow-100">Desserts</h2>
          <p className="text-yellow-100 pl-6 text-xl">Explore more delicious dessert options in Penang.</p>
          <div className="relative">
            <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef2)}>&lt;</button>
            <div className="flowpane" ref={flowpaneRef2}>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={dessertImage1} alt="Food 7" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-100 text-center block">Cendol</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-white">
                    Cendol is a refreshing Malaysian dessert drink made of shaved ice, pandan-flavored green jelly, coconut milk, and gula melaka.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={dessertImage2} alt="Food 8" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-900 text-center block">Ais Kacang</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-black ">
                    A colorful mix of shaved ice, jelly, red beans, sweet corn, and syrup, often topped with ice cream or peanuts.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={dessertImage3} alt="Food 9" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-100 text-center block">Bubur Cha Cha</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-white">
                    A popular Malaysian dessert made with coconut milk, sweet potato, yam, and sago pearls. It's a warm, comforting treat with a mix of textures and natural sweetness.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={dessertImage4} alt="Food 8" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-900 text-center block">Tong Sui</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-black ">
                    A traditional Chinese dessert often served warm or chilled. It consists of a variety of sweet ingredients like black sesame, red beans, lotus seeds, or mung beans, flavored with rock sugar.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={dessertImage5} alt="Food 12" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-100 text-center block">Tau Hua</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-white">
                    A silky smooth tofu pudding served with sweet syrup, often flavored with gula melaka or simple sugar syrup. This dessert is popular in Penang and can be served warm or cold.
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={dessertImage6} alt="Food 8" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-900 text-center block">Rojak</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-black ">
                    A sweet and tangy fruit and vegetable salad with a sticky shrimp paste dressing, topped with crushed peanuts.
                  </p>
                </div>
              </div>
            </div>
            <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef2)}>&gt;</button>
          </div>
        </div>
        <div className="section bg-orange-200  p-4 rounded-2xl shadow-2xl text-left">
          <h2 className="text-3xl font-bold mb-2 pt-6 pl-6 text-yellow-900">Drinks</h2>
          <p className="text-yellow-900 pl-6 text-xl">Explore a variety of refreshing drinks in Penang.</p>
          <div className="relative">
            <button className="scroll-button left" onClick={() => scrollLeft(flowpaneRef3)}>&lt;</button>
            <div className="flowpane p-6" ref={flowpaneRef3}>
              <div className="block ">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={drinkImage3} alt="Drink 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-100 text-center block">Penang Black Coffee</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> 
                  </div>
                  <p className="text-lg mt-6 text-white">
                    A strong and aromatic local coffee brewed using traditional methods. It is typically served black, with a rich, bold flavor and a smooth finish.
                  </p>
                </div>
              </div>
              <div className="block ">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={drinkImage4} alt="Drink 2" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-61">
                  <span className="text-xl font-bold text-yellow-900 text-center block">Penang White Coffee</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-black ">
                    A smooth and creamy coffee made from beans roasted at a lower temperature, giving it a milder and less bitter taste compared to traditional black coffee typically served with condensed milk,
                  </p>
                </div>
              </div>
              <div className="block ">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={drinkImage5} alt="Drink 3" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-900 p-4 rounded-lg shadow-lg mt-2 w-96 h-70">
                  <span className="text-xl font-bold text-yellow-100 text-center block">Sugar Cane Juice</span>
                  <div className="flex justify-center">
                    <StarRating rating={4} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-white">
                    A refreshing, naturally sweet drink made by extracting juice from fresh sugar cane stalks. Often served chilled with a splash of lime or lemon
                  </p>
                </div>
              </div>
              <div className="block ">
                <div className="relative overflow-hidden rounded-lg shadow-lg w-96 h-96">
                  <img src={drinkImage6} alt="Drink 2" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mt-2 w-96 h-60">
                  <span className="text-xl font-bold text-yellow-900 text-center block">Coconut Shake</span>
                  <div className="flex justify-center">
                    <StarRating rating={5} /> {/* Add star rating */}
                  </div>
                  <p className="text-lg mt-6 text-black ">
                    Blended coconut water, flesh, and ice, served with a scoop of ice cream for a tropical treat.
                  </p>
                </div>
              </div>
              {/* Add more Card components as needed */}
            </div>
            <button className="scroll-button right" onClick={() => scrollRight(flowpaneRef3)}>&gt;</button>
          </div>
        </div>
        <h2 className="text-4xl mt-12 text-center font-bold text-yellow-700 font-barriecito">Penang Special</h2>
        <p className="text-xl text-gray-800 mb-8 text-center font-mountainsChristmas">
          Discover the unique and special dishes that Penang has to offer. These are the must-try foods that you can't miss!
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg flex w-full h-auto ">
            <div className="w-1/2 h-full flex-shrink-0">
              <img src={hawkerImage1} alt="New Lane Hawker Centre" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center text-justify p-6 w-1/2 bg-yellow-200 ">
              <span className="text-3xl font-bold text-amber-900 font-playfair">New Lane Hawker Centre</span>
              <p className="text-lg mt-2 font-bold text-black font-merriweather">
                New Lane Hawker Centre opens at 4 pm every day when Georgetown’s Lorong Baru closes down to vehicular traffic. Automobiles are required to find alternate routes to their destination because the street turns into a thriving outdoor hawker food centre. Hawkers furiously fry up their specialties, which include char kway teow (flat rice noodles with cockles, prawns, chili and bean sprouts), and chee cheong fun (rice noodle rolls).
                <br /><br />
                Expect to sit on colorful plastic tables and chairs on the roadside. Our favorite dish here is congee, a Chinese oatmeal made with rice instead of oats, which makes for a filling, hearty meal. Flavored with a variety of side dishes, anything from fresh crab and eggs to pork and ginger chicken, this is basically Chinese comfort food.
                <br /><br />
                Location: Lorong Baru, 10450 George Town, Penang, Malaysia
                <br />
                Open: Daily from 4 pm to 2 am
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg flex w-full h-auto">
            <div className="flex flex-col justify-center text-justify p-6 w-1/2 bg-amber-900">
              <span className="text-3xl font-bold text-yellow-200 font-playfair">Gurney Drive Hawker Centre</span>
              <p className="text-lg mt-2 font-bold text-white font-merriweather">
                Home to the biggest variety of street food in Penang, Persiaran Gurney’s busy and iconic Gurney Drive Hawker Centre, right beside Gurney Plaza Mall, is a great place to sample some of the best local dishes on the island. We recommend the char koay kak, soft white radish stir-fried with crunchy bean sprouts, chili, egg and pork lard, which is simply delicious, but also recommended is the barbecue roasting station (particularly the beef meatballs) which will please even the pickiest eater.
                <br /><br />
                The cafeteria-style seating is a little cramped, so the first thing to do is to find seats before ordering your food – in fact, copy the locals by standing behind diners who seem to be near finishing, then be ready to grab their soon-to-be-vacant seat.
                <br /><br />
                Location: 172, Solok Gurney 1, Pulau Tikus, 10250 Jelutong, Penang, Malaysia
                <br />
                Open: Daily from 6 pm to midnight
              </p>
            </div>
            <div className="w-1/2 h-full flex-shrink-0">
              <img src={hawkerImage2} alt="Gurney Drive Hawker Centre" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg flex w-full h-auto">
            <div className="w-1/2 h-full flex-shrink-0">
              <img src={hawkerImage3} alt="New World Park Hawker Centre" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center text-justify p-6 w-1/2 bg-yellow-200">
              <span className="text-3xl font-bold text-amber-900 font-playfair">New World Park Hawker Centre</span>
              <p className="text-lg mt-2 font-bold text-black font-merriweather">
                This is one of the largest and most impressive Penang Hawkers. New World Park is also conveniently located in Georgetown and has a wide range of local and international cuisine available. If you have your own car – there is a reasonably large car park outside. It costs a few ringgits to park here.
                <br /><br />
                The prices at New World Park are very good and comparable to most other Hawker centres in Penang. New World Park has a wide variety of food available. Here are a few examples to wet your apetite: Laksa, Otak Otak, Char Koay Teow. You can find Indian food, Chinese food and traditional Malaysian dishes at New World Park. Some of the more unique dishes include dim sum (which is more rare to find in Penang Hawkers)
                <br /><br />
                Location: New World Park, 102, Jalan Burma, 10050 George Town, Penang, Malaysia
                <br />
                Open: Daily from 10 am to 10 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FnBPage;
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.avif";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.avif";
import img14 from "../assets/img14.avif";
import img15 from "../assets/img15.jpg";

import bgImg1 from './bgImg1.png'
import cris from './cris.webp'
import exp1  from  './exp1.png'
import exp2  from  './exp2.png'
import exp3 from  './exp3.png'
import exp4  from  './exp4.png'
import exp5  from  './exp5.png'
import exp6  from  './exp6.png'

import land1 from  './land1.png'
import land2 from  './land2.png'

import lap1 from './lap1.jpeg'

import blg1 from './blg1.png'
import blg2 from './blg2.png'
import blg3 from './blg3.png'

import log1  from './log1.png'
import log2  from './log2.png'

import about1 from './about1.png'
import about2 from  './about2.png'

import team1 from './team1.png'
import team2 from './team2.png'
import team3 from './team3.png'
import team4 from './team4.png'





import certified1 from './certified1.jpeg'
import benz1 from './benz1.png'
import benz2 from './benz2.png'
import benz3 from './benz3.png'
import benz4 from './benz4.png'
import benz5 from './benz5.png'




export const assets = {
     bgImg1,
     cris,
     exp1,
     exp2,
     exp3,
     exp4,
     exp5,
     exp6,
     land1,
     land2,
     lap1,
     blg1,
     blg2,
     blg3,
     log1,
     log2,
     about1,
     about2,
     team1,
     team2,
     team3,
     team4,
     certified1,
     benz1,
     benz2,
     benz3,
     benz4,
     benz5,
}


export const cars = [
  
    {
      "id": 1,
      "name": "Chevrolet Suburban 2021",
      "brand": "Chevrolet",
      "model": "Suburban",
      "type": "used",
      "year": 2021,
      "price_per_day": 2700000,
      "original_price":3680000,
      "fuel_type": "Petrol",
      "mileage": "90 km",
      "transmission": "Auto",
      "cylinders": 2,
      "engine_size": "5.0 L",
      "seats": 7,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Silver",
      "city_mpg": 22,
      "highway_mpg": 26,
      "image": img1,
      "featured": true,
      "description": "The Chevrolet Suburban 2021 is a powerful full-size SUV with a spacious interior and advanced features. It offers a smooth ride with a V8 engine, ample cargo space, and a luxurious cabin. With high-tech safety features and modern infotainment options, it ensures a comfortable journey. Ideal for long trips and family travel, it combines performance and practicality. The bold exterior design and sturdy build make it a reliable choice. Equipped with an automatic transmission, it provides effortless handling. The fuel-efficient engine balances power and economy. This used model is well-maintained, making it a great value for its segment."
    },
    {
      "id": 2,
      "name": "Tesla Model S",
      "brand": "Tesla",
      "model": "Model S",
      "type": "new",
      "year": 2022,
      "price_per_day": 3500000,
      "original_price":4560000,
      "fuel_type": "Electric",
      "mileage": "400 km",
      "transmission": "Auto",
      "cylinders": null,
      "engine_size": null,
      "seats": 5,
      "doors": 4,
      "drive_type": "AWD",
      "colour": "White",
      "city_mpg": 120,
      "highway_mpg": 110,
      "image": img2,
      "featured": false,
      "description": "The Tesla Model S is a premium electric sedan offering an impressive range and cutting-edge technology. With a sleek aerodynamic design, it delivers exceptional speed and acceleration. The spacious interior features a minimalist dashboard with a massive touchscreen display. Advanced driver assistance features ensure a safe and smooth drive. The dual-motor all-wheel drive system provides superior traction and performance. With fast charging capabilities, it is perfect for long-distance travel. The premium cabin materials enhance comfort, while over-the-air updates keep the software up-to-date. Ideal for those seeking luxury, innovation, and sustainability in one package."
    },
    {
      "id": 3,
      "name": "Ford Mustang GT",
      "brand": "Ford",
      "model": "Mustang GT",
      "type": "used",
      "year": 2020,
      "price_per_day": 8000000,
      "original_price":1000000,
      "fuel_type": "Petrol",
      "mileage": "150 km",
      "transmission": "Manual",
      "cylinders": 8,
      "engine_size": "5.0 L",
      "seats": 4,
      "doors": 2,
      "drive_type": "RWD",
      "colour": "Yellow",
      "city_mpg": 15,
      "highway_mpg": 24,
      "image": img3,
      "featured": true,
      "description": "The Ford Mustang GT is a legendary muscle car known for its high performance and aggressive styling. Powered by a V8 engine, it delivers exhilarating speed and power. The retro-modern design is complemented by advanced technology inside the cabin. The sporty seats and driver-centric cockpit provide an immersive experience. With a manual transmission, it offers complete driving control. The robust chassis ensures a smooth yet thrilling ride. Packed with modern infotainment features, it is both fun and functional. A great option for car enthusiasts looking for power, heritage, and an engaging driving experience."
    },
    {
      "id": 4,
      "name": "BMW X5",
      "brand": "BMW",
      "model": "X5",
      "type": "new",
      "year": 2021,
      "price_per_day": 4200000,
      "original_price":5200000,
      "fuel_type": "Diesel",
      "mileage": "120 km",
      "transmission": "Auto",
      "cylinders": 6,
      "engine_size": "3.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "AWD",
      "colour": "Blue",
      "city_mpg": 22,
      "highway_mpg": 29,
      "image": img4,
      "featured": false,
      "description": "The BMW X5 is a luxury midsize SUV that combines power, sophistication, and technology. It boasts a robust diesel engine that ensures fuel efficiency without compromising performance. With a spacious, high-end interior, it provides comfort and convenience for both driver and passengers. The all-wheel drive system enhances stability on various terrains. Its advanced safety features and intuitive infotainment system make every journey seamless. The striking design, dynamic handling, and premium feel set it apart in its class. Perfect for those who seek a balance of power, comfort, and style in a modern SUV."
    },
    {
      "id": 5,
      "name": "Audi Q7",
      "brand": "Audi",
      "model": "Q7",
      "type": "used",
      "year": 2023,
      "price_per_day": 3300000,
      "original_price":5000000,
      "fuel_type": "Petrol",
      "mileage": "110 km",
      "transmission": "Auto",
      "cylinders": 6,
      "engine_size": "3.0 L",
      "seats": 7,
      "doors": 4,
      "drive_type": "AWD",
      "colour": "Silver",
      "city_mpg": 19,
      "highway_mpg": 25,
      "image": img5,
      "featured": true,
      "description": "The Audi Q7 is a premium SUV known for its stylish design and luxurious features. It offers a spacious cabin with high-quality materials and cutting-edge technology. The petrol engine ensures a smooth yet powerful ride, making it ideal for both city and highway driving. Its Quattro all-wheel drive system provides excellent traction. Equipped with modern safety features, it ensures a secure journey. The intuitive infotainment system keeps passengers entertained. This used model is well-maintained, making it a fantastic choice for those seeking luxury, comfort, and performance in a family SUV."
    },
    {
      "id": 6,
      "name": "Mercedes-Benz C-Class",
      "brand": "Mercedes-Benz",
      "model": "C-Class",
      "type": "new",
      "year": 2022,
      "price_per_day": 8000000,
      "original_price":1000000,
      "fuel_type": "Diesel",
      "mileage": "130 km",
      "transmission": "Auto",
      "cylinders": 4,
      "engine_size": "2.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Silver",
      "city_mpg": 25,
      "highway_mpg": 35,
      "image": img6,
      "featured": false,
      "description": "The Mercedes-Benz C-Class is a luxury sedan that epitomizes elegance and performance. Powered by a diesel engine, it ensures a refined driving experience with excellent fuel efficiency. The sleek exterior design is complemented by a premium interior with cutting-edge technology and comfortable seating. Advanced safety features enhance driver and passenger security. The automatic transmission ensures smooth gear shifts for effortless driving. With a state-of-the-art infotainment system, every ride is enjoyable. Its blend of sophistication, comfort, and performance makes it an ideal choice for professionals and luxury enthusiasts alike."
    },

    {
      "id": 7,
      "name": "Hyundai Creta",
      "brand": "Hyundai",
      "model": "Creta",
      "type": "used",
      "year": 2022,
      "price_per_day": 1800000,
      "original_price":2400000,
      "fuel_type": "Petrol",
      "mileage": "100 km",
      "transmission": "Manual",
      "cylinders": 2,
      "engine_size": "4.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "LFT",
      "colour": "Red",
      "city_mpg": 25,
      "highway_mpg": 35,
      "image": [img7],
      "featured": false,
      "description": "The Hyundai Creta 2022 is a stylish and reliable compact SUV, perfect for city drives and long road trips. Powered by a petrol engine, it offers a smooth manual transmission for an engaging driving experience. With a mileage of 100 km, this used Creta maintains excellent performance. The modern design, spacious cabin, and advanced features make it a popular choice among SUV enthusiasts. Its robust build quality ensures durability and safety. Whether you're looking for a daily commuter or a weekend adventure vehicle, the Hyundai Creta provides a perfect balance of comfort, efficiency, and affordability."
    },
    {
      "id": 8,
      "name": "Toyota Fortuner",
      "brand": "Toyota",
      "model": "Fortuner",
      "type": "new",
      "year": 2021,
      "price_per_day": 2900000,
      "original_price":4500000,
      "fuel_type": "Diesel",
      "mileage": "95 km",
      "transmission": "Auto",
      "cylinders": 4,
      "engine_size": "3.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Silver",
      "city_mpg": 20,
      "highway_mpg": 35,
      "image": [img8],
      "featured": true,
      "description": "The Toyota Fortuner 2021 is a premium SUV known for its commanding presence and powerful performance. Equipped with a diesel engine and automatic transmission, it ensures a smooth and effortless drive. This brand-new model delivers exceptional off-road capabilities, making it ideal for both urban and adventure trips. With a mileage of 95 km, it promises efficiency without compromising power. The spacious and luxurious interior, coupled with advanced safety features, provides ultimate comfort. Whether you're seeking a stylish city ride or a rugged off-roader, the Fortuner stands out as a reliable and high-performance vehicle."
    },
    {
      "id": 9,
      "name": "Honda Civic",
      "brand": "Honda",
      "model": "Civic",
      "type": "used",
      "year": 2020,
      "price_per_day": 2000000,
      "original_price":3680000,
      "fuel_type": "Petrol",
      "mileage": "110 km",
      "transmission": "Manual",
      "cylinders": 4,
      "engine_size": "2.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Black",
      "city_mpg": 25,
      "highway_mpg": 35,
      "image": [img9],
      "featured": false,
      "description": "The Honda Civic 2020 is a sleek and sporty sedan offering a thrilling driving experience. This used model, powered by a petrol engine, features a manual transmission for greater control. With a mileage of 110 km, it remains a fuel-efficient option. The Civic is known for its aerodynamic design, comfortable seating, and cutting-edge technology. Whether you're commuting daily or heading on long drives, its refined interior and smooth handling make every journey enjoyable. A perfect blend of performance, safety, and style, the Honda Civic remains a top choice for sedan lovers."
    },
    {
      "id": 10,
      "name": "Jeep Wrangler",
      "brand": "Jeep",
      "model": "Wrangler",
      "type": "new",
      "year": 2023,
      "price_per_day": 2000000,
      "original_price":2800000,
      "fuel_type": "Petrol",
      "mileage": "85 km",
      "transmission": "Auto",
      "cylinders": 4,
      "engine_size": "2.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Black",
      "city_mpg": 25,
      "highway_mpg": 35,
      "image": [img10],
      "featured": true,
      "description": "The Jeep Wrangler 2023 is an iconic off-road SUV built for adventure seekers. This brand-new model features a petrol engine with an automatic transmission, delivering power and convenience. With a mileage of 85 km, it ensures efficiency for rugged terrains. Its bold design, removable roof, and superior 4x4 capability make it a perfect choice for thrill-seekers. The Wrangler’s spacious interior, advanced tech features, and high ground clearance make it ideal for extreme adventures. Whether you're navigating city streets or conquering mountains, the Jeep Wrangler offers unmatched performance and durability."
    },
    
    {
      "id": 11,
      "name": "Nissan Altima",
      "brand": "Nissan",
      "model": "Altima",
      "type": "used",
      "year": 2021,
      "price_per_day": 2100000,
      "original_price":2700000,
      "fuel_type": "Petrol",
      "mileage": "105 km",
      "transmission": "Auto",
      "cylinders": 4,
      "engine_size": "2.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Black",
      "city_mpg": 25,
      "highway_mpg": 35,
      "image": [img11],
      "featured": false,
      "description": "The Nissan Altima 2021 is a stylish midsize sedan offering a smooth and comfortable ride. This used model comes with an automatic transmission and a petrol engine, ensuring fuel efficiency and reliability. With a mileage of 105 km, it delivers excellent performance for city commutes and highway drives. The Altima’s sleek exterior, spacious cabin, and advanced technology make it an ideal choice for those seeking a blend of luxury and affordability. Its safety features and refined design enhance the driving experience, making it a great option for both families and professionals looking for a dependable sedan."
    },
    {
      "id": 12,
      "name": "Volkswagen Tiguan",
      "brand": "Volkswagen",
      "model": "Tiguan",
      "type": "new",
      "year": 2022,
      "price_per_day": 2500000,
      "original_price":3680000,
      "fuel_type": "Diesel",
      "mileage": "115 km",
      "transmission": "Auto",
      "cylinders": 4,
      "engine_size": "2.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Black",
      "city_mpg": 25,
      "highway_mpg": 35,
      "image": [img12],
      "featured": false,
      "description": "The Volkswagen Tiguan 2022 is a premium SUV known for its robust design and powerful diesel engine. This brand-new model features an automatic transmission and a mileage of 115 km, making it both efficient and high-performing. The Tiguan offers a spacious, well-crafted interior with modern tech features, ensuring a comfortable ride. With excellent safety ratings and superior handling, it is perfect for both city and off-road adventures. Whether you're looking for a family-friendly SUV or a stylish everyday ride, the Volkswagen Tiguan stands out as a reliable, fuel-efficient, and feature-packed option."
    },
    {
      "id": 13,
      "name": "Mazda CX-5",
      "brand": "Mazda",
      "model": "CX-5",
      "type": "used",
      "year": 2021,
      "price_per_day": 2200000,
      "original_price":3000000,
      "fuel_type": "Petrol",
      "mileage": "125 km",
      "transmission": "Manual",
      "cylinders": 4,
      "engine_size": "2.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Black",
      "city_mpg": 25,
      "highway_mpg": 35,
      "image": [img13],
      "featured": false,
      "description": "The Mazda CX-5 2021 is a dynamic compact SUV designed for an exhilarating drive. This used model features a petrol engine with a manual transmission, offering precise control and an engaging driving experience. With a mileage of 125 km, it remains efficient and powerful. The CX-5 is known for its sleek design, premium interior, and advanced safety features. Whether tackling urban streets or countryside roads, its responsive handling and fuel economy make it a practical yet stylish choice. Perfect for those who seek a balance of performance, comfort, and reliability in a versatile SUV."
    },
    {
      "id": 14,
      "name": "Subaru Outback",
      "brand": "Subaru",
      "model": "Outback",
      "type": "new",
      "year": 2022,
      "price_per_day": 3300000,
      "original_price":4380000,
      "fuel_type": "Petrol",
      "mileage": "120 km",
      "transmission": "Auto",
      "cylinders": 4,
      "engine_size": "2.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Black",
      "city_mpg": 25,
      "highway_mpg": 35,
      "image": [img14],
      "featured": false,
      "description": "The Subaru Outback 2022 is a rugged and adventure-ready crossover built for all terrains. This brand-new model features an automatic transmission and a petrol engine, delivering a mileage of 120 km. With its all-wheel-drive capability, high ground clearance, and advanced safety systems, the Outback is perfect for outdoor enthusiasts and daily commuters alike. The spacious cabin, comfortable seating, and intuitive infotainment system enhance long drives. Whether you’re heading for an off-road adventure or a family road trip, the Subaru Outback provides reliability, durability, and superior comfort in every journey."
    },
    {
      "id": 15,
      "name": "Lexus RX",
      "brand": "Lexus",
      "model": "RX",
      "type": "used",
      "year": 2021,
      "price_per_day": 7200000,
      "original_price":5480000,
      "fuel_type": "Hybrid",
      "mileage": "140 km",
      "transmission": "Auto",
      "cylinders": 4,
      "engine_size": "2.0 L",
      "seats": 5,
      "doors": 4,
      "drive_type": "RWD",
      "colour": "Black",
      "city_mpg": 25,
      "highway_mpg": 35,
      "image": [img15],
      "featured": true,
      "description": "The Lexus RX 2021 is a luxurious hybrid SUV that combines performance with eco-friendliness. This used model features an automatic transmission and a hybrid engine, ensuring fuel efficiency and a smooth ride. With a mileage of 140 km, it offers reliability for both city and highway driving. The RX boasts a premium interior, advanced safety features, and cutting-edge technology for an elevated driving experience. Whether you seek comfort, power, or fuel savings, this SUV delivers it all. As a featured vehicle, the Lexus RX stands out with its elegance, innovative design, and superior driving dynamics."
    }
    
];

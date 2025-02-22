import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";

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
     blg3
}


export const cars = [
  {
    "id": 1,
    "name": "Chevrolet Suburban 2021",
    "brand": "Chevrolet",
    "model": "Suburban",
    "year": 2021,
    "price_per_day": 27000,
    "fuel_type": "Petrol",
    "mileage": "90 km",
    "transmission": "Auto",
    "image": img1,
    "featured": true
  },
  {
    "id": 2,
    "name": "Tesla Model S",
    "brand": "Tesla",
    "model": "Model S",
    "year": 2022,
    "price_per_day": 35000,
    "fuel_type": "Electric",
    "mileage": "400 km",
    "transmission": "Auto",
    "image": img2,
    "featured": false
  },
  {
    "id": 3,
    "name": "Ford Mustang GT",
    "brand": "Ford",
    "model": "Mustang GT",
    "year": 2020,
    "price_per_day": 30000,
    "fuel_type": "Petrol",
    "mileage": "150 km",
    "transmission": "Manual",
    "image": img3,
    "featured": true
  },
  {
    "id": 4,
    "name": "BMW X5",
    "brand": "BMW",
    "model": "X5",
    "year": 2021,
    "price_per_day": 32000,
    "fuel_type": "Diesel",
    "mileage": "120 km",
    "transmission": "Auto",
    "image": img4,
    "featured": false
  },
  {
    "id": 5,
    "name": "Audi Q7",
    "brand": "Audi",
    "model": "Q7",
    "year": 2023,
    "price_per_day": 33000,
    "fuel_type": "Petrol",
    "mileage": "110 km",
    "transmission": "Auto",
    "image": img5,
    "featured": true
  },
  {
    "id": 6,
    "name": "Mercedes-Benz C-Class",
    "brand": "Mercedes-Benz",
    "model": "C-Class",
    "year": 2022,
    "price_per_day": 34000,
    "fuel_type": "Diesel",
    "mileage": "130 km",
    "transmission": "Auto",
    "image": img6,
    "featured": false
  },
  {
    "id": 7,
    "name": "Hyundai Creta",
    "brand": "Hyundai",
    "model": "Creta",
    "year": 2022,
    "price_per_day": 18000,
    "fuel_type": "Petrol",
    "mileage": "100 km",
    "transmission": "Manual",
    "image": img7,
    "featured": false
  },
  {
    "id": 8,
    "name": "Toyota Fortuner",
    "brand": "Toyota",
    "model": "Fortuner",
    "year": 2021,
    "price_per_day": 29000,
    "fuel_type": "Diesel",
    "mileage": "95 km",
    "transmission": "Auto",
    "image": img8,
    "featured": true
  },
  {
    "id": 9,
    "name": "Honda Civic",
    "brand": "Honda",
    "model": "Civic",
    "year": 2020,
    "price_per_day": 20000,
    "fuel_type": "Petrol",
    "mileage": "110 km",
    "transmission": "Manual",
    "image": img9,
    "featured": false
  },
  {
    "id": 10,
    "name": "Jeep Wrangler",
    "brand": "Jeep",
    "model": "Wrangler",
    "year": 2023,
    "price_per_day": 36000,
    "fuel_type": "Petrol",
    "mileage": "85 km",
    "transmission": "Auto",
    "image": img10,
    "featured": true
  },
  {
    "id": 11,
    "name": "Nissan Altima",
    "brand": "Nissan",
    "model": "Altima",
    "year": 2021,
    "price_per_day": 21000,
    "fuel_type": "Petrol",
    "mileage": "105 km",
    "transmission": "Auto",
    "image": img11,
    "featured": false
  },
  {
    "id": 12,
    "name": "Volkswagen Tiguan",
    "brand": "Volkswagen",
    "model": "Tiguan",
    "year": 2022,
    "price_per_day": 25000,
    "fuel_type": "Diesel",
    "mileage": "115 km",
    "transmission": "Auto",
    "image": img12,
    "featured": false
  },
  {
    "id": 13,
    "name": "Mazda CX-5",
    "brand": "Mazda",
    "model": "CX-5",
    "year": 2021,
    "price_per_day": 22000,
    "fuel_type": "Petrol",
    "mileage": "125 km",
    "transmission": "Manual",
    "image": img13,
    "featured": false
  },
  {
    "id": 14,
    "name": "Subaru Outback",
    "brand": "Subaru",
    "model": "Outback",
    "year": 2022,
    "price_per_day": 23000,
    "fuel_type": "Petrol",
    "mileage": "120 km",
    "transmission": "Auto",
    "image": img14,
    "featured": false
  },
  {
    "id": 15,
    "name": "Lexus RX",
    "brand": "Lexus",
    "model": "RX",
    "year": 2021,
    "price_per_day": 31000,
    "fuel_type": "Hybrid",
    "mileage": "140 km",
    "transmission": "Auto",
    "image": img15,
    "featured": true
  }
];
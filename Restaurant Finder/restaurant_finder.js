const restaurants = [
    {
        "image": "img3.avif",
        "name": "Farm to Table",
        "rating": 2,
        "food_type": "Korean",
        "Price_for_two": 293,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "6.1m",
        "offers": "6% off",
        "Alcohol": true,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 23
    },
    {
        "image": "img1.avif",
        "name": "Fusion Fiesta",
        "rating": 5,
        "food_type": "Indian",
        "Price_for_two": 2406,
        "location": "Khan Market",
        "Distance_from_Customer_house": "8.7m",
        "offers": "11% off",
        "Alcohol": true,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "img5.avif",
        "name": "Golden Wok",
        "rating": 4,
        "food_type": "Indian",
        "Price_for_two": 543,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "8.9m",
        "offers": "0% off",
        "Alcohol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "img7.avif",
        "name": "Pasta Paradise",
        "rating": 4,
        "food_type": "Chinese",
        "Price_for_two": 764,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "3.1m",
        "offers": "13% off",
        "Alcohol": false,
        "Restaurant_open_time": 19,
        "Restaurant_close_time": 7
    },
    {
        "image": "img4.avif",
        "name": "The Chocolate Box",
        "rating": 4,
        "food_type": "Thai",
        "Price_for_two": 1289,
        "location": "Chandni Chowk",
        "Distance_from_Customer_house": "5.3m",
        "offers": "23% off",
        "Alcohol": false,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "img3.avif",
        "name": "Spice Symphony",
        "rating": 5,
        "food_type": "Korean",
        "Price_for_two": 525,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "1.3m",
        "offers": "27% off",
        "Alcohol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "img1.avif",
        "name": "Street Eats",
        "rating": 5,
        "food_type": "Indian",
        "Price_for_two": 1889,
        "location": "Dwarka",
        "Distance_from_Customer_house": "5.0m",
        "offers": "10% off",
        "Alcohol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "img2.avif",
        "name": "Farm to Table",
        "rating": 4,
        "food_type": "Indian",
        "Price_for_two": 2367,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "9.4m",
        "offers": "9% off",
        "Alcohol": true,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 19
    },
    {
        "image": "img1.avif",
        "name": "Golden Wok",
        "rating": 5,
        "food_type": "French",
        "Price_for_two": 1574,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "6.5m",
        "offers": "8% off",
        "Alcohol": false,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Sushi Spot",
        "rating": 5,
        "food_type": "Thai",
        "Price_for_two": 1923,
        "location": "Dwarka",
        "Distance_from_Customer_house": "3.8m",
        "offers": "15% off",
        "Alcohol": true,
        "Restaurant_open_time": 8,
        "Restaurant_close_time": 20
    },
    {
        "image": "img3.avif",
        "name": "Breakfast Club",
        "rating": 1,
        "food_type": "Thai",
        "Price_for_two": 1452,
        "location": "Karol Bagh",
        "Distance_from_Customer_house": "8.5m",
        "offers": "2% off",
        "Alcohol": false,
        "Restaurant_open_time": 19,
        "Restaurant_close_time": 7
    },
    {
        "image": "img6.avif",
        "name": "The Gourmet Haven",
        "rating": 2,
        "food_type": "Korean",
        "Price_for_two": 1808,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "5.0m",
        "offers": "27% off",
        "Alcohol": false,
        "Restaurant_open_time": 19,
        "Restaurant_close_time": 7
    },
    {
        "image": "img6.avif",
        "name": "Golden Wok",
        "rating": 4,
        "food_type": "Indian",
        "Price_for_two": 1655,
        "location": "Dwarka",
        "Distance_from_Customer_house": "4.1m",
        "offers": "5% off",
        "Alcohol": false,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "img6.avif",
        "name": "Fusion Fiesta",
        "rating": 3,
        "food_type": "Italian",
        "Price_for_two": 144,
        "location": "Saket",
        "Distance_from_Customer_house": "4.4m",
        "offers": "12% off",
        "Alcohol": true,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "img2.avif",
        "name": "Mediterranean Magic",
        "rating": 4,
        "food_type": "Japanese",
        "Price_for_two": 1432,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "2.9m",
        "offers": "25% off",
        "Alcohol": true,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "img2.avif",
        "name": "Fusion Fiesta",
        "rating": 1,
        "food_type": "Indian",
        "Price_for_two": 602,
        "location": "Saket",
        "Distance_from_Customer_house": "6.4m",
        "offers": "19% off",
        "Alcohol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Sunset Grill",
        "rating": 3,
        "food_type": "Italian",
        "Price_for_two": 817,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "1.4m",
        "offers": "25% off",
        "Alcohol": false,
        "Restaurant_open_time": 16,
        "Restaurant_close_time": 4
    },
    {
        "image": "img2.avif",
        "name": "Sushi Spot",
        "rating": 3,
        "food_type": "Thai",
        "Price_for_two": 2034,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "6.5m",
        "offers": "2% off",
        "Alcohol": true,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 21
    },
    {
        "image": "img3.avif",
        "name": "Pasta Paradise",
        "rating": 2,
        "food_type": "Mediterranean",
        "Price_for_two": 1966,
        "location": "Saket",
        "Distance_from_Customer_house": "8.2m",
        "offers": "11% off",
        "Alcohol": true,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Ocean Delights",
        "rating": 5,
        "food_type": "French",
        "Price_for_two": 326,
        "location": "Karol Bagh",
        "Distance_from_Customer_house": "1.2m",
        "offers": "17% off",
        "Alcohol": false,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 19
    },
    {
        "image": "img5.avif",
        "name": "Ocean Delights",
        "rating": 5,
        "food_type": "French",
        "Price_for_two": 696,
        "location": "Dwarka",
        "Distance_from_Customer_house": "1.9m",
        "offers": "24% off",
        "Alcohol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "img1.avif",
        "name": "Fusion Fiesta",
        "rating": 1,
        "food_type": "Mexican",
        "Price_for_two": 1104,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "3.8m",
        "offers": "9% off",
        "Alcohol": false,
        "Restaurant_open_time": 8,
        "Restaurant_close_time": 20
    },
    {
        "image": "img2.avif",
        "name": "Urban Bites",
        "rating": 2,
        "food_type": "French",
        "Price_for_two": 1372,
        "location": "Karol Bagh",
        "Distance_from_Customer_house": "9.8m",
        "offers": "9% off",
        "Alcohol": true,
        "Restaurant_open_time": 12,
        "Restaurant_close_time": 0
    },
    {
        "image": "img3.avif",
        "name": "Savory Street",
        "rating": 4,
        "food_type": "Chinese",
        "Price_for_two": 635,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "10.0m",
        "offers": "7% off",
        "Alcohol": false,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 21
    },
    {
        "image": "img7.avif",
        "name": "The Gourmet Haven",
        "rating": 4,
        "food_type": "Mediterranean",
        "Price_for_two": 2323,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "3.3m",
        "offers": "8% off",
        "Alcohol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 17
    },
    {
        "image": "img6.avif",
        "name": "Golden Wok",
        "rating": 1,
        "food_type": "Italian",
        "Price_for_two": 1241,
        "location": "Khan Market",
        "Distance_from_Customer_house": "7.2m",
        "offers": "26% off",
        "Alcohol": false,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "img6.avif",
        "name": "Spice Symphony",
        "rating": 3,
        "food_type": "Chinese",
        "Price_for_two": 1045,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "6.3m",
        "offers": "28% off",
        "Alcohol": false,
        "Restaurant_open_time": 1,
        "Restaurant_close_time": 13
    },
    {
        "image": "img1.avif",
        "name": "Mediterranean Magic",
        "rating": 4,
        "food_type": "Chinese",
        "Price_for_two": 397,
        "location": "Dwarka",
        "Distance_from_Customer_house": "8.8m",
        "offers": "2% off",
        "Alcohol": false,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 19
    },
    {
        "image": "img2.avif",
        "name": "Breakfast Club",
        "rating": 3,
        "food_type": "Mediterranean",
        "Price_for_two": 471,
        "location": "Dwarka",
        "Distance_from_Customer_house": "7.8m",
        "offers": "1% off",
        "Alcohol": false,
        "Restaurant_open_time": 16,
        "Restaurant_close_time": 4
    },
    {
        "image": "img7.avif",
        "name": "Pasta Paradise",
        "rating": 1,
        "food_type": "Indian",
        "Price_for_two": 2360,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "5.5m",
        "offers": "20% off",
        "Alcohol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "img7.avif",
        "name": "Bistro Bliss",
        "rating": 1,
        "food_type": "French",
        "Price_for_two": 1227,
        "location": "Saket",
        "Distance_from_Customer_house": "2.2m",
        "offers": "20% off",
        "Alcohol": true,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Ocean Delights",
        "rating": 1,
        "food_type": "Mexican",
        "Price_for_two": 798,
        "location": "Karol Bagh",
        "Distance_from_Customer_house": "6.0m",
        "offers": "28% off",
        "Alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "img2.avif",
        "name": "Urban Bites",
        "rating": 2,
        "food_type": "Italian",
        "Price_for_two": 1066,
        "location": "Khan Market",
        "Distance_from_Customer_house": "5.4m",
        "offers": "1% off",
        "Alcohol": false,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "img3.avif",
        "name": "Farm to Table",
        "rating": 2,
        "food_type": "Chinese",
        "Price_for_two": 1999,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "5.5m",
        "offers": "25% off",
        "Alcohol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "img4.avif",
        "name": "The Chocolate Box",
        "rating": 2,
        "food_type": "Korean",
        "Price_for_two": 259,
        "location": "Vasant Kunj",
        "Distance_from_Customer_house": "1.3m",
        "offers": "21% off",
        "Alcohol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "img4.avif",
        "name": "Urban Bites",
        "rating": 2,
        "food_type": "Mexican",
        "Price_for_two": 1576,
        "location": "Khan Market",
        "Distance_from_Customer_house": "6.1m",
        "offers": "10% off",
        "Alcohol": true,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 17
    },
    {
        "image": "Restuarant.jpeg",
        "name": "The Gourmet Haven",
        "rating": 2,
        "food_type": "Indian",
        "Price_for_two": 649,
        "location": "Chandni Chowk",
        "Distance_from_Customer_house": "8.2m",
        "offers": "19% off",
        "Alcohol": false,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "img3.avif",
        "name": "The Green Plate",
        "rating": 4,
        "food_type": "Japanese",
        "Price_for_two": 395,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "2.6m",
        "offers": "13% off",
        "Alcohol": true,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 17
    },
    {
        "image": "img6.avif",
        "name": "Ocean Delights",
        "rating": 2,
        "food_type": "Chinese",
        "Price_for_two": 643,
        "location": "Khan Market",
        "Distance_from_Customer_house": "9.2m",
        "offers": "9% off",
        "Alcohol": false,
        "Restaurant_open_time": 12,
        "Restaurant_close_time": 0
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Farm to Table",
        "rating": 4,
        "food_type": "Chinese",
        "Price_for_two": 913,
        "location": "Khan Market",
        "Distance_from_Customer_house": "1.2m",
        "offers": "9% off",
        "Alcohol": false,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 21
    },
    {
        "image": "img2.avif",
        "name": "The Green Plate",
        "rating": 1,
        "food_type": "Mediterranean",
        "Price_for_two": 1940,
        "location": "Saket",
        "Distance_from_Customer_house": "9.2m",
        "offers": "4% off",
        "Alcohol": false,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 23
    },
    {
        "image": "img6.avif",
        "name": "The Cozy Corner",
        "rating": 3,
        "food_type": "American",
        "Price_for_two": 104,
        "location": "Dwarka",
        "Distance_from_Customer_house": "3.3m",
        "offers": "16% off",
        "Alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "img3.avif",
        "name": "The Chocolate Box",
        "rating": 2,
        "food_type": "Chinese",
        "Price_for_two": 1756,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "9.0m",
        "offers": "0% off",
        "Alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "img6.avif",
        "name": "Spice Symphony",
        "rating": 1,
        "food_type": "Korean",
        "Price_for_two": 292,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "2.7m",
        "offers": "23% off",
        "Alcohol": false,
        "Restaurant_open_time": 15,
        "Restaurant_close_time": 3
    },
    {
        "image": "img3.avif",
        "name": "Spice Symphony",
        "rating": 4,
        "food_type": "Mediterranean",
        "Price_for_two": 2196,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "4.9m",
        "offers": "16% off",
        "Alcohol": true,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "img4.avif",
        "name": "Sunset Grill",
        "rating": 2,
        "food_type": "French",
        "Price_for_two": 610,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "8.2m",
        "offers": "28% off",
        "Alcohol": false,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "img5.avif",
        "name": "Savory Street",
        "rating": 2,
        "food_type": "Korean",
        "Price_for_two": 1173,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "9.8m",
        "offers": "1% off",
        "Alcohol": true,
        "Restaurant_open_time": 1,
        "Restaurant_close_time": 13
    },
    {
        "image": "img1.avif",
        "name": "Burger Bliss",
        "rating": 4,
        "food_type": "Indian",
        "Price_for_two": 1656,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "9.9m",
        "offers": "13% off",
        "Alcohol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "img5.avif",
        "name": "Bistro Bliss",
        "rating": 5,
        "food_type": "Italian",
        "Price_for_two": 1474,
        "location": "Dwarka",
        "Distance_from_Customer_house": "7.6m",
        "offers": "8% off",
        "Alcohol": false,
        "Restaurant_open_time": 16,
        "Restaurant_close_time": 4
    },
    {
        "image": "img6.avif",
        "name": "Pasta Paradise",
        "rating": 3,
        "food_type": "Chinese",
        "Price_for_two": 2431,
        "location": "Dwarka",
        "Distance_from_Customer_house": "7.3m",
        "offers": "15% off",
        "Alcohol": false,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "img2.avif",
        "name": "Breakfast Club",
        "rating": 4,
        "food_type": "Japanese",
        "Price_for_two": 1583,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "4.8m",
        "offers": "10% off",
        "Alcohol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "img7.avif",
        "name": "The Cozy Corner",
        "rating": 1,
        "food_type": "Chinese",
        "Price_for_two": 761,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "4.8m",
        "offers": "2% off",
        "Alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "img7.avif",
        "name": "Golden Wok",
        "rating": 4,
        "food_type": "French",
        "Price_for_two": 662,
        "location": "Saket",
        "Distance_from_Customer_house": "2.7m",
        "offers": "2% off",
        "Alcohol": false,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 23
    },
    {
        "image": "img2.avif",
        "name": "Breakfast Club",
        "rating": 4,
        "food_type": "Mexican",
        "Price_for_two": 1400,
        "location": "Chandni Chowk",
        "Distance_from_Customer_house": "1.5m",
        "offers": "8% off",
        "Alcohol": false,
        "Restaurant_open_time": 16,
        "Restaurant_close_time": 4
    },
    {
        "image": "img3.avif",
        "name": "The Rustic Table",
        "rating": 2,
        "food_type": "Korean",
        "Price_for_two": 1248,
        "location": "Vasant Kunj",
        "Distance_from_Customer_house": "6.3m",
        "offers": "10% off",
        "Alcohol": false,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "img6.avif",
        "name": "The Gourmet Haven",
        "rating": 2,
        "food_type": "French",
        "Price_for_two": 352,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "10.4m",
        "offers": "19% off",
        "Alcohol": true,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "img3.avif",
        "name": "Street Eats",
        "rating": 2,
        "food_type": "Japanese",
        "Price_for_two": 586,
        "location": "Khan Market",
        "Distance_from_Customer_house": "4.9m",
        "offers": "1% off",
        "Alcohol": false,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "img7.avif",
        "name": "Burger Bliss",
        "rating": 2,
        "food_type": "American",
        "Price_for_two": 1433,
        "location": "Karol Bagh",
        "Distance_from_Customer_house": "8.9m",
        "offers": "12% off",
        "Alcohol": false,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 22
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Sushi Spot",
        "rating": 4,
        "food_type": "French",
        "Price_for_two": 2228,
        "location": "Vasant Kunj",
        "Distance_from_Customer_house": "4.9m",
        "offers": "0% off",
        "Alcohol": false,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "img6.avif",
        "name": "Street Eats",
        "rating": 1,
        "food_type": "Indian",
        "Price_for_two": 1585,
        "location": "Dwarka",
        "Distance_from_Customer_house": "1.7m",
        "offers": "23% off",
        "Alcohol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "img7.avif",
        "name": "The Chocolate Box",
        "rating": 2,
        "food_type": "Chinese",
        "Price_for_two": 1505,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "6.7m",
        "offers": "14% off",
        "Alcohol": false,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 19
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Sunset Grill",
        "rating": 1,
        "food_type": "Japanese",
        "Price_for_two": 2437,
        "location": "Chandni Chowk",
        "Distance_from_Customer_house": "9.8m",
        "offers": "5% off",
        "Alcohol": false,
        "Restaurant_open_time": 17,
        "Restaurant_close_time": 5
    },
    {
        "image": "img1.avif",
        "name": "Golden Wok",
        "rating": 5,
        "food_type": "Mexican",
        "Price_for_two": 106,
        "location": "Chandni Chowk",
        "Distance_from_Customer_house": "10.5m",
        "offers": "24% off",
        "Alcohol": false,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 22
    },
    {
        "image": "img7.avif",
        "name": "The Rustic Table",
        "rating": 2,
        "food_type": "American",
        "Price_for_two": 1342,
        "location": "Khan Market",
        "Distance_from_Customer_house": "1.1m",
        "offers": "7% off",
        "Alcohol": false,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 21
    },
    {
        "image": "img7.avif",
        "name": "Spice Symphony",
        "rating": 3,
        "food_type": "Mediterranean",
        "Price_for_two": 2487,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "7.7m",
        "offers": "17% off",
        "Alcohol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "img5.avif",
        "name": "Street Eats",
        "rating": 2,
        "food_type": "Korean",
        "Price_for_two": 1949,
        "location": "Saket",
        "Distance_from_Customer_house": "3.8m",
        "offers": "1% off",
        "Alcohol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "img6.avif",
        "name": "Burger Bliss",
        "rating": 4,
        "food_type": "Mexican",
        "Price_for_two": 282,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "10.6m",
        "offers": "2% off",
        "Alcohol": false,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "img3.avif",
        "name": "The Chocolate Box",
        "rating": 3,
        "food_type": "American",
        "Price_for_two": 1490,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "8.8m",
        "offers": "24% off",
        "Alcohol": true,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "img6.avif",
        "name": "Street Eats",
        "rating": 4,
        "food_type": "Japanese",
        "Price_for_two": 420,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "3.5m",
        "offers": "15% off",
        "Alcohol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "Restuarant.jpeg",
        "name": "The Cozy Corner",
        "rating": 5,
        "food_type": "Chinese",
        "Price_for_two": 1809,
        "location": "Karol Bagh",
        "Distance_from_Customer_house": "5.8m",
        "offers": "1% off",
        "Alcohol": true,
        "Restaurant_open_time": 11,
        "Restaurant_close_time": 23
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Fusion Fiesta",
        "rating": 3,
        "food_type": "Thai",
        "Price_for_two": 2233,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "6.3m",
        "offers": "28% off",
        "Alcohol": false,
        "Restaurant_open_time": 16,
        "Restaurant_close_time": 4
    },
    {
        "image": "img3.avif",
        "name": "Urban Bites",
        "rating": 5,
        "food_type": "Japanese",
        "Price_for_two": 1747,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "10.0m",
        "offers": "15% off",
        "Alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "img3.avif",
        "name": "Spice Symphony",
        "rating": 4,
        "food_type": "Mediterranean",
        "Price_for_two": 2461,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "7.5m",
        "offers": "8% off",
        "Alcohol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "img5.avif",
        "name": "The Cozy Corner",
        "rating": 3,
        "food_type": "Thai",
        "Price_for_two": 472,
        "location": "Khan Market",
        "Distance_from_Customer_house": "9.1m",
        "offers": "5% off",
        "Alcohol": false,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "img4.avif",
        "name": "Savory Street",
        "rating": 4,
        "food_type": "Chinese",
        "Price_for_two": 1508,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "8.6m",
        "offers": "16% off",
        "Alcohol": false,
        "Restaurant_open_time": 20,
        "Restaurant_close_time": 8
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Pasta Paradise",
        "rating": 2,
        "food_type": "Italian",
        "Price_for_two": 520,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "5.6m",
        "offers": "18% off",
        "Alcohol": false,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "img7.avif",
        "name": "Sushi Spot",
        "rating": 2,
        "food_type": "Mexican",
        "Price_for_two": 750,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "8.5m",
        "offers": "10% off",
        "Alcohol": true,
        "Restaurant_open_time": 19,
        "Restaurant_close_time": 7
    },
    {
        "image": "img5.avif",
        "name": "Savory Street",
        "rating": 1,
        "food_type": "Mexican",
        "Price_for_two": 1565,
        "location": "Khan Market",
        "Distance_from_Customer_house": "5.6m",
        "offers": "19% off",
        "Alcohol": false,
        "Restaurant_open_time": 9,
        "Restaurant_close_time": 21
    },
    {
        "image": "img5.avif",
        "name": "Mediterranean Magic",
        "rating": 5,
        "food_type": "Mediterranean",
        "Price_for_two": 1008,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "6.1m",
        "offers": "4% off",
        "Alcohol": true,
        "Restaurant_open_time": 1,
        "Restaurant_close_time": 13
    },
    {
        "image": "img1.avif",
        "name": "The Chocolate Box",
        "rating": 3,
        "food_type": "Italian",
        "Price_for_two": 710,
        "location": "Vasant Kunj",
        "Distance_from_Customer_house": "5.4m",
        "offers": "4% off",
        "Alcohol": false,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "img2.avif",
        "name": "Urban Bites",
        "rating": 3,
        "food_type": "Japanese",
        "Price_for_two": 749,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "8.2m",
        "offers": "29% off",
        "Alcohol": false,
        "Restaurant_open_time": 16,
        "Restaurant_close_time": 4
    },
    {
        "image": "img3.avif",
        "name": "Fusion Fiesta",
        "rating": 2,
        "food_type": "French",
        "Price_for_two": 2453,
        "location": "Dwarka",
        "Distance_from_Customer_house": "6.5m",
        "offers": "21% off",
        "Alcohol": false,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "img4.avif",
        "name": "Spice Symphony",
        "rating": 4,
        "food_type": "French",
        "Price_for_two": 2211,
        "location": "Saket",
        "Distance_from_Customer_house": "1.6m",
        "offers": "4% off",
        "Alcohol": true,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "img1.avif",
        "name": "Spice Symphony",
        "rating": 3,
        "food_type": "Thai",
        "Price_for_two": 1729,
        "location": "Khan Market",
        "Distance_from_Customer_house": "3.8m",
        "offers": "16% off",
        "Alcohol": true,
        "Restaurant_open_time": 4,
        "Restaurant_close_time": 16
    },
    {
        "image": "img1.avif",
        "name": "Urban Bites",
        "rating": 4,
        "food_type": "Thai",
        "Price_for_two": 1912,
        "location": "Rajouri Garden",
        "Distance_from_Customer_house": "8.1m",
        "offers": "29% off",
        "Alcohol": false,
        "Restaurant_open_time": 23,
        "Restaurant_close_time": 11
    },
    {
        "image": "img6.avif",
        "name": "Golden Wok",
        "rating": 1,
        "food_type": "Japanese",
        "Price_for_two": 768,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "10.7m",
        "offers": "15% off",
        "Alcohol": true,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "img7.avif",
        "name": "Sunset Grill",
        "rating": 4,
        "food_type": "French",
        "Price_for_two": 758,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "10.1m",
        "offers": "14% off",
        "Alcohol": false,
        "Restaurant_open_time": 17,
        "Restaurant_close_time": 5
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Golden Wok",
        "rating": 5,
        "food_type": "Italian",
        "Price_for_two": 1224,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "3.8m",
        "offers": "0% off",
        "Alcohol": true,
        "Restaurant_open_time": 6,
        "Restaurant_close_time": 18
    },
    {
        "image": "img4.avif",
        "name": "The Rustic Table",
        "rating": 5,
        "food_type": "Indian",
        "Price_for_two": 287,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "5.2m",
        "offers": "15% off",
        "Alcohol": false,
        "Restaurant_open_time": 3,
        "Restaurant_close_time": 15
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Mediterranean Magic",
        "rating": 4,
        "food_type": "Mediterranean",
        "Price_for_two": 752,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "1.0m",
        "offers": "9% off",
        "Alcohol": true,
        "Restaurant_open_time": 13,
        "Restaurant_close_time": 1
    },
    {
        "image": "img4.avif",
        "name": "Sunset Grill",
        "rating": 5,
        "food_type": "Mexican",
        "Price_for_two": 1684,
        "location": "Lajpat Nagar",
        "Distance_from_Customer_house": "9.6m",
        "offers": "17% off",
        "Alcohol": false,
        "Restaurant_open_time": 5,
        "Restaurant_close_time": 17
    },
    {
        "image": "img1.avif",
        "name": "Mediterranean Magic",
        "rating": 5,
        "food_type": "American",
        "Price_for_two": 2156,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "11.0m",
        "offers": "23% off",
        "Alcohol": false,
        "Restaurant_open_time": 18,
        "Restaurant_close_time": 6
    },
    {
        "image": "img7.avif",
        "name": "Street Eats",
        "rating": 2,
        "food_type": "Italian",
        "Price_for_two": 1180,
        "location": "Hauz Khas Village",
        "Distance_from_Customer_house": "7.1m",
        "offers": "9% off",
        "Alcohol": true,
        "Restaurant_open_time": 7,
        "Restaurant_close_time": 19
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Spice Symphony",
        "rating": 3,
        "food_type": "Mediterranean",
        "Price_for_two": 1130,
        "location": "Khan Market",
        "Distance_from_Customer_house": "10.7m",
        "offers": "20% off",
        "Alcohol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    },
    {
        "image": "img2.avif",
        "name": "Street Eats",
        "rating": 1,
        "food_type": "Mexican",
        "Price_for_two": 1155,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "6.8m",
        "offers": "16% off",
        "Alcohol": true,
        "Restaurant_open_time": 14,
        "Restaurant_close_time": 2
    },
    {
        "image": "img2.avif",
        "name": "Ocean Delights",
        "rating": 2,
        "food_type": "Thai",
        "Price_for_two": 2138,
        "location": "Dwarka",
        "Distance_from_Customer_house": "9.2m",
        "offers": "22% off",
        "Alcohol": true,
        "Restaurant_open_time": 21,
        "Restaurant_close_time": 9
    },
    {
        "image": "Restuarant.jpeg",
        "name": "Burger Bliss",
        "rating": 3,
        "food_type": "Italian",
        "Price_for_two": 641,
        "location": "Dwarka",
        "Distance_from_Customer_house": "5.7m",
        "offers": "28% off",
        "Alcohol": true,
        "Restaurant_open_time": 0,
        "Restaurant_close_time": 12
    },
    {
        "image": "img3.avif",
        "name": "Spice Symphony",
        "rating": 4,
        "food_type": "Italian",
        "Price_for_two": 1054,
        "location": "Khan Market",
        "Distance_from_Customer_house": "6.0m",
        "offers": "23% off",
        "Alcohol": false,
        "Restaurant_open_time": 1,
        "Restaurant_close_time": 13
    },
    {
        "image": "img6.avif",
        "name": "Fusion Fiesta",
        "rating": 2,
        "food_type": "Italian",
        "Price_for_two": 815,
        "location": "Connaught Place",
        "Distance_from_Customer_house": "2.8m",
        "offers": "23% off",
        "Alcohol": false,
        "Restaurant_open_time": 10,
        "Restaurant_close_time": 22
    },
    {
        "image": "img2.avif",
        "name": "The Cozy Corner",
        "rating": 4,
        "food_type": "American",
        "Price_for_two": 948,
        "location": "Saket",
        "Distance_from_Customer_house": "2.9m",
        "offers": "25% off",
        "Alcohol": false,
        "Restaurant_open_time": 22,
        "Restaurant_close_time": 10
    }
] 



function getrestaurant(restaurants)
{
    const root=document.getElementById("root");

    restaurants.forEach(restaurant => 
    {
        //create a card
        const card=document.createElement('div');
        card.classList.add('card');

        //1.image
        const image=document.createElement('img');
        image.src=restaurant.image;
 
        // 2.card_content
        const Card_content=document.createElement('div');
        Card_content.classList.add('card-content');

            // i.Card_header (Name and rating)
        const Card_header=document.createElement('div');
        Card_header.classList.add('card-header');

        const h3=document.createElement('h3');
        h3.textContent=restaurant.name;

        const rating=document.createElement('span');
        rating.textContent="Rating: " +restaurant.rating;
        rating.classList.add('rating');

        Card_header.appendChild(h3);
        Card_header.appendChild(rating);

            // ii:Card_footer (food_type and price)
        const Card_footer=document.createElement('div');
        Card_footer.classList.add('card-footer'); 

        const food=document.createElement('span');
        food.textContent=restaurant.food_type;

        const price=document.createElement('span');
        price.textContent=`$${restaurant.Price_for_two}`;

        Card_footer.appendChild(food);
        Card_footer.appendChild(price);

            // iii.Card_location (Restaurant Location and user distance)
        const Card_location=document.createElement('div');
        Card_location.classList.add('card-location');

        const location=document.createElement('span');
        location.textContent=restaurant.location;

        const distance=document.createElement('span');
        distance.textContent=restaurant.Distance_from_Customer_house;

        Card_location.appendChild(location);
        Card_location.appendChild(distance);

        Card_content.appendChild(Card_header);
        Card_content.appendChild(Card_footer);
        Card_content.appendChild(Card_location);

        card.appendChild(image);
        card.appendChild(Card_content);
        
        root.appendChild(card);
       
    });
} 

getrestaurant(restaurants);

document.getElementById('Alcohol').addEventListener('click',()=>
{
    const result=restaurants.filter((obj)=>obj.Alcohol);
    document.getElementById('root').replaceChildren();
    getrestaurant(result);
})

document.getElementById('Rating').addEventListener('click',()=>
{
    const result=restaurants.filter((obj)=>obj.rating>4.5);
    document.getElementById('root').replaceChildren();
    getrestaurant(result);
})

document.getElementById('Offers').addEventListener('click',()=>
{
    const result=restaurants.filter((obj)=>obj.offers);
    document.getElementById('root').replaceChildren();
    getrestaurant(result);
})

document.getElementById('Open').addEventListener('click',()=>
{
    console.log("Entered here!");
    const now=new Date();
    const result = restaurants.filter((obj)=>obj.Restaurant_open_time<=now.getHours() && now.getHours()<=obj.Restaurant_close_time);
    document.getElementById('root').replaceChildren();
    getrestaurant(result);
})




document.getElementById('Filters').addEventListener('click',()=>
{
    document.getElementById('filterPopup').classList.remove("hidden");
    
})

document.getElementById('applyFilter').addEventListener('click',()=>
{
    const element=document.querySelector('input[name=filterOption]:checked');
    const answer=element.value ;

    if(answer=="rating")
    {
        restaurants.sort((a,b)=>b.rating-a.rating);
    }
    else if(answer=="highLow")
    {
        restaurants.sort((a,b)=>b.Price_for_two-a.Price_for_two);
    }
    else if(answer=="costLowHigh")
    {
        restaurants.sort((a,b)=>a.Price_for_two-b.Price_for_two);

    }
    else if(answer=="distance")
    {
        restaurants.sort((a,b)=>parseFloat(a.Distance_from_Customer_house)-parseFloat(b.Distance_from_Customer_house));
    }

    document.getElementById('root').replaceChildren();
    document.getElementById('filterPopup').classList.add("hidden");

    getrestaurant(restaurants); 
})


document.getElementById('closeFilter').addEventListener('click',()=>
{
    document.getElementById('filterPopup').classList.add("hidden");
    
})
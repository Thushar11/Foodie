export const MOCK_USER = {
  name: "Thushar Shetty",
  phone: "+91 6364735373",
  email: "shettythushar3@gmail.com",
  address: "Hosamane, Sanoor, Udupi, Karnataka - 574110",
  avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
};

export const RESTAURANTS = [
  {
    id: "r1",
    name: "The Rusty Spoon",
    cuisine: "Multi-cuisine",
    rating: 4.6,
    deliveryTime: "15-25 min",
    deliveryFee: 30.0,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80",
    address: "Food Court, DLF Mall",
    menu: [
      {
        id: "m1",
        restaurantId: "r1",
        name: "Classic Cheeseburger",
        description: "Juicy beef patty with melted cheese, lettuce, and our secret sauce.",
        price: 299.0,
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80",
        category: "Burgers",
        isVegetarian: false
      },
      {
        id: "m2",
        restaurantId: "r1",
        name: "Margherita Pizza",
        description: "Classic pizza with San Marzano tomato sauce, mozzarella, and basil.",
        price: 399.0,
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&q=80",
        category: "Pizza",
        isVegetarian: true
      },
      {
        id: "m3",
        restaurantId: "r1",
        name: "Chicken Tacos",
        description: "Soft shell tacos with grilled chicken, salsa, and sour cream.",
        price: 250.0,
        imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=200&q=80",
        category: "Mexican",
        isVegetarian: false
      }
    ]
  },
  {
    id: "r2",
    name: "Starlight Diner",
    cuisine: "Multi-cuisine",
    rating: 4.8,
    deliveryTime: "30-40 min",
    deliveryFee: 50.0,
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&q=80",
    address: "Sector 18, High Street",
    menu: [
      {
        id: "m4",
        restaurantId: "r2",
        name: "Veggie Supreme Burger",
        description: "Plant-based patty with fresh veggies and vegan mayo.",
        price: 249.0,
        imageUrl: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=200&q=80",
        category: "Burgers",
        isVegetarian: true
      },
      {
        id: "m5",
        restaurantId: "r2",
        name: "Chicken Tikka Masala",
        description: "Roasted marinated chicken chunks in a spiced curry sauce.",
        price: 450.0,
        imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&q=80",
        category: "Indian",
        isVegetarian: false
      },
      {
        id: "m6",
        restaurantId: "r2",
        name: "Hakka Noodles",
        description: "Wok-tossed noodles with julienned vegetables.",
        price: 210.0,
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&q=80",
        category: "Asian",
        isVegetarian: true
      }
    ]
  },
  {
    id: "r3",
    name: "The Wandering Chef",
    cuisine: "Multi-cuisine",
    rating: 4.9,
    deliveryTime: "35-45 min",
    deliveryFee: 40.0,
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80",
    address: "Connaught Place",
    menu: [
      {
        id: "m7",
        restaurantId: "r3",
        name: "Pepperoni Passion",
        description: "Loaded with premium pepperoni and double cheese.",
        price: 549.0,
        imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&q=80",
        category: "Pizza",
        isVegetarian: false
      },
      {
        id: "m8",
        restaurantId: "r3",
        name: "Vegetable Biryani",
        description: "Aromatic basmati rice cooked with mixed vegetables and exotic spices.",
        price: 320.0,
        imageUrl: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&q=80",
        category: "Indian",
        isVegetarian: true
      },
      {
        id: "m9",
        restaurantId: "r3",
        name: "Chilli Chicken",
        description: "Spicy and tangy stir-fried chicken with bell peppers.",
        price: 350.0,
        imageUrl: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=200&q=80",
        category: "Asian",
        isVegetarian: false
      }
    ]
  },
  {
    id: "r4",
    name: "Midnight Cravings",
    cuisine: "Multi-cuisine",
    rating: 4.4,
    deliveryTime: "25-35 min",
    deliveryFee: 35.0,
    imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&q=80",
    address: "Cyber Hub",
    menu: [
      {
        id: "m10",
        restaurantId: "r4",
        name: "Veggie Quesadilla",
        description: "Grilled tortilla filled with melted cheese, beans, and corn.",
        price: 220.0,
        imageUrl: "https://images.unsplash.com/photo-1615486171448-4fd6d17df704?w=200&q=80",
        category: "Mexican",
        isVegetarian: true
      },
      {
        id: "m11",
        restaurantId: "r4",
        name: "Paneer Butter Masala",
        description: "Cottage cheese cubes in a rich and creamy tomato gravy.",
        price: 380.0,
        imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=200&q=80",
        category: "Indian",
        isVegetarian: true
      },
      {
        id: "m12",
        restaurantId: "r4",
        name: "BBQ Bacon Burger",
        description: "Beef patty with crispy bacon, BBQ sauce, and cheddar.",
        price: 349.0,
        imageUrl: "https://images.unsplash.com/photo-1594212202999-928cc944cbf8?w=200&q=80",
        category: "Burgers",
        isVegetarian: false
      }
    ]
  },
  {
    id: "r5",
    name: "The Azure Lounge",
    cuisine: "Multi-cuisine",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: 45.0,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80",
    address: "Food Street, 5th Avenue",
    menu: [
      {
        id: "m13",
        restaurantId: "r5",
        name: "Nachos Supreme",
        description: "Tortilla chips loaded with cheese sauce, jalapenos, and pico de gallo.",
        price: 280.0,
        imageUrl: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200&q=80",
        category: "Mexican",
        isVegetarian: true
      },
      {
        id: "m14",
        restaurantId: "r5",
        name: "Veg Spring Rolls",
        description: "Crispy rolls stuffed with mixed vegetables.",
        price: 180.0,
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=80",
        category: "Asian",
        isVegetarian: true
      },
      {
        id: "m15",
        restaurantId: "r5",
        name: "BBQ Chicken Pizza",
        description: "Tangy BBQ sauce topped with grilled chicken and red onions.",
        price: 499.0,
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80",
        category: "Pizza",
        isVegetarian: false
      }
    ]
  }
];

export const CATEGORIES = [
  { id: 'c1', name: 'Burgers', icon: 'fast-food' },
  { id: 'c2', name: 'Pizza', icon: 'pizza' },
  { id: 'c3', name: 'Indian', icon: 'restaurant' },
  { id: 'c4', name: 'Asian', icon: 'cafe' },
  { id: 'c5', name: 'Mexican', icon: 'flame' },
];

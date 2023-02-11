import images from "./images";
const specials = [
  {
    name: "Greek Salad",
    img: images.greekSalad,
    price: 12.99,
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese garnished with crunchy garlic and rosemary croutons",
  },
  {
    name: "Bruschetta",
    img: images.bruschetta,
    price: 5.99,
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    img: images.lemonDessert,
    price: 5.0,
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const feedbacks = [
  {
    rating: "⭐⭐⭐⭐⭐",
    img: images.review1,
    name: "Amanda",
    review: "Had an amazing time at restaurant. The taste was mindblowing",
  },
  {
    rating: "⭐⭐⭐⭐",
    img: images.review2,
    name: "Angela",
    review: "Had an amazing time at restaurant. The taste was mindblowing",
  },
  {
    rating: "⭐⭐⭐⭐",
    img: images.review3,
    name: "Jacob",
    review: "Had an amazing time at restaurant. The taste was mindblowing",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    img: images.review4,
    name: "Nate",
    review: "Had an amazing time at restaurant. The taste was mindblowing",
  },
];

const links = {
  doormat: ["Home", "About", "Menu", "Reservations", "Order Online", "Login"],
  contact: ["Address", "Phone Number", "Email"],
  socialMedia: ["Facebook", "Instagram", "YouTube", "Twitter"],
};

export { specials, feedbacks, links };

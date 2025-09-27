// src/data/drinks.ts
import { Drink } from "../types";

export const initialDrinks: Drink[] = [
  {
    id: "1",
    name: "Honey Almondmilk Cold Brew",
    description: "Starbucks Coffee Milk Cold Brew lightly sweetened",
    price: 45.2,
    imageUrl: require("../../assets/images/drink1.png"),
  },
  {
    id: "2",
    name: "Caramel Macchiato",
    description: "Classic Starbucks caramel macchiato with rich espresso",
    price: 50.0,
    imageUrl: require("../../assets/images/drink2.jpg"),
  },
  {
    id: "3",
    name: "Iced Latte",
    description: "Smooth espresso mixed with fresh milk over ice",
    price: 40.0,
    imageUrl: require("../../assets/images/drink3.jpg"),
  },
  {
    id: "4",
    name: "Mocha Frappuccino",
    description: "Blended mocha coffee topped with whipped cream",
    price: 55.0,
    imageUrl: require("../../assets/images/drink4.jpg"),
  },
  {
    id: "5",
    name: "Vanilla Latte",
    description: "Espresso and milk with classic vanilla syrup",
    price: 48.0,
    imageUrl: require("../../assets/images/drink2.jpg"),
  },
  {
    id: "6",
    name: "Cold Brew Coffee",
    description: "Slow-steeped cold brew with smooth, rich flavor",
    price: 42.0,
    imageUrl: require("../../assets/images/drink1.png"),
  },
  {
    id: "7",
    name: "Cappuccino",
    description: "Bold espresso with steamed milk and foam",
    price: 47.0,
    imageUrl: require("../../assets/images/drink3.jpg"),
  },
  {
    id: "8",
    name: "Double Espresso",
    description: "Strong double shot of rich espresso",
    price: 35.0,
    imageUrl: require("../../assets/images/drink4.jpg"),
  },
];

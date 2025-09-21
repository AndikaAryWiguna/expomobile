import { Category } from "../types";

export const initialCategories: Category[] = [
  { name: "Hot Coffee", icon: require("../../assets/images/hotcoffe.png"), isSelected: true },
  { name: "Big Burger", icon: require("../../assets/images/burger.png"), isSelected: false },
  { name: "Ice Coffee", icon: require("../../assets/images/icecoffe.png"), isSelected: false },
  { name: "Pastry", icon: require("../../assets/images/pastry.png"), isSelected: false },
];

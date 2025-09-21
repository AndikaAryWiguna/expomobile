// src/types.ts
export type Category = {
  name: string;
  icon: any; // gambar dari require
  isSelected: boolean;
};

import { ImageSourcePropType } from "react-native";

export type Drink = {
  name: string;
  description: string;
  price: number;
  imageUrl: ImageSourcePropType; // ✅ bukan string lagi
};

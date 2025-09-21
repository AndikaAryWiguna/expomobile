import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Drink } from "../types";

const { width } = Dimensions.get("window");

type Props = {
  drink: Drink;
};

export default function DrinkCard({ drink }: Props) {
  return (
    <View style={styles.drinkCard}>
      <Image source={{ uri: drink.imageUrl }} style={styles.drinkImage} />

      <View style={styles.textWrapper}>
        <Text style={styles.drinkName}>{drink.name}</Text>
        <Text style={styles.drinkDesc}>{drink.description}</Text>

        <View style={styles.bottomRow}>
          <Text style={styles.drinkPrice}>${drink.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drinkCard: {
    width: width * 0.9, // 90% dari layar, biar responsif
    borderRadius: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginVertical: 10,
    alignSelf: "center",
    overflow: "hidden", // penting biar image ikut rounded
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  drinkImage: {
    width: "40%",
    aspectRatio: 1, // biar square (otomatis sesuai width)
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textWrapper: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  drinkName: {
    fontSize: 15,
    fontFamily: "Poppins",
    fontWeight: "500",
    color: "#000",
  },
  drinkDesc: {
    fontSize: 12,
    fontFamily: "Poppins",
    color: "#777",
    marginVertical: 6,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  drinkPrice: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "600",
    color: "#F79321",
  },
  addButton: {
    width: 36,
    height: 36,
    backgroundColor: "#F79321",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

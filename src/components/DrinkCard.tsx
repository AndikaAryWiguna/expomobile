import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Drink } from "../types";

type Props = {
  drink: Drink;
};

export default function DrinkCard({ drink }: Props) {
  return (
    <View style={styles.drinkCard}>
      <Image source={{ uri: drink.imageUrl }} style={styles.drinkImage} />
      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.drinkName}>{drink.name}</Text>
        <Text style={styles.drinkDesc}>{drink.description}</Text>
        <Text style={styles.drinkPrice}>${drink.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drinkCard: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  drinkImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  drinkName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  drinkDesc: {
    fontSize: 12,
    color: "#777",
    marginVertical: 4,
  },
  drinkPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  addButton: {
    width: 36,
    height: 36,
    backgroundColor: "#F79321",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

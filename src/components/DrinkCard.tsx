import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Drink } from "../types";

type Props = {
  drink: Drink;
};

export default function DrinkCard({ drink }: Props) {
  return (
    <View style={styles.drinkCard}>
      {/* Image menyatu dengan card */}
      <Image source={drink.imageUrl} style={styles.drinkImage} />

      {/* Content */}
      <View style={styles.textWrapper}>
        <Text style={styles.drinkName}>{drink.name}</Text>
        <Text style={styles.drinkDesc}>{drink.description}</Text>

        {/* Price + Button sejajar */}
        <View style={styles.bottomRow}>
          <Text style={styles.drinkPrice}>${drink.price.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() =>
              router.push({
                pathname: "/drink/[id]", // ✅ static path
                params: { id: String(drink.id) }, // ✅ param diteruskan
              })
            }>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drinkCard: {
    height: 182,
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden", // penting biar image nyatu dengan card
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  drinkImage: {
    width: 140,
    height: "100%",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  textWrapper: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  drinkName: {
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "500", // Medium
    lineHeight: 20,
    color: "#000",
  },
  drinkDesc: {
    fontSize: 12,
    color: "#777",
    fontFamily: "Poppins",
    marginVertical: 2,
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
    lineHeight: 20,
  },
});

import BottomNav from "@/src/components/BottomNav";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../../src/components/Header";
import { initialDrinks } from "../../src/data/drinks";

export default function DrinkDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const drink = initialDrinks.find((d) => d.id === id);

  const [size, setSize] = useState<"Small" | "Medium" | "Large">("Medium");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"Size" | "Description">("Size");

  if (!drink) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFound}>Drink not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Detail" onCartPress={() => console.log("Go to cart")} />

      {/* Section 1: Image */}
      <View style={styles.imageWrapper}>
        <ImageBackground source={require("../../assets/images/backgrounddetail.png")} style={styles.bgImage} resizeMode="cover">
          <Image source={drink.imageUrl} style={styles.drinkImageCircle} />
        </ImageBackground>
      </View>

      {/* Section 2: Nama + Harga */}
      <View style={styles.drinkHeader}>
        <Text style={styles.drinkName}>{drink.name}</Text>
        <Text style={styles.drinkPrice}>${drink.price.toFixed(2)}</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        <TouchableOpacity style={[styles.tabItem, activeTab === "Size" && styles.tabActive]} onPress={() => setActiveTab("Size")}>
          <Text style={[styles.tabText, activeTab === "Size" && styles.tabTextActive]}>Size Options</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, activeTab === "Description" && styles.tabActive]}
          onPress={() => setActiveTab("Description")}>
          <Text style={[styles.tabText, activeTab === "Description" && styles.tabTextActive]}>Description</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {activeTab === "Size" ? (
        <View style={styles.sizeRow}>
          {["Small", "Medium", "Large"].map((s) => {
            const isActive = size === s;
            return (
              <View key={s} style={styles.sizeWrapper}>
                <TouchableOpacity
                  style={[styles.sizeOption, isActive ? styles.sizeOptionActive : styles.sizeOptionInactive]}
                  onPress={() => setSize(s as "Small" | "Medium" | "Large")}>
                  <Image
                    source={
                      isActive
                        ? require("../../assets/images/detail/sizeiconaktif.png")
                        : require("../../assets/images/detail/sizeicon.png")
                    }
                    style={styles.sizeIcon}
                  />
                </TouchableOpacity>
                <Text style={styles.sizeText}>{s}</Text>
              </View>
            );
          })}
        </View>
      ) : (
        <Text style={styles.drinkDesc}>{drink.description}</Text>
      )}

      {/* Section 5: Quantity + Add to Cart */}
      <View style={styles.bottomRow}>
        <View style={styles.qtyWrapper}>
          <TouchableOpacity style={styles.qtyButton} onPress={() => setQuantity((q) => Math.max(1, q - 1))}>
            <Text style={styles.qtyButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity}</Text>
          <TouchableOpacity style={styles.qtyButton} onPress={() => setQuantity((q) => q + 1)}>
            <Text style={styles.qtyButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={() => console.log("Add to Cart", { drink, size, quantity })}>
          <Text style={styles.addText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavWrapper}>
        <BottomNav />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },

  notFound: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    color: "#333",
  },

  // Image
  imageWrapper: { alignItems: "center", marginTop: 20 },
  bgImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingBottom: Platform.OS === "web" ? 90 : 30, // extra padding di web
  },
  drinkImageCircle: {
    width: 185,
    height: 185,
    borderRadius: 185 / 2,
    resizeMode: "cover",
    overflow: "hidden",
    backgroundColor: "#fff",
  },

  // Header
  drinkHeader: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "web" ? 40 : 20, // di web kasih jarak lebih besar
    marginHorizontal: 20,
  },

  drinkName: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 27,
    color: "#000",
    flex: 1,
  },
  drinkPrice: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 22,
    color: "#F79321",
  },

  // Tabs
  tabRow: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  tabItem: { marginHorizontal: 20, paddingBottom: 6 },
  tabActive: { borderBottomWidth: 2, borderBottomColor: "#EA811CCC" },
  tabText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    color: "#777",
  },
  tabTextActive: { color: "#000", fontWeight: "600" },

  // Size Options
  sizeRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  sizeWrapper: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  sizeOption: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    justifyContent: "center",
    alignItems: "center",

    // Box Shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 20,

    // Box Shadow (Android)
    elevation: 6,
  },
  sizeOptionInactive: {
    backgroundColor: "rgba(234,129,28,0.1)", // tipis
  },
  sizeOptionActive: {
    backgroundColor: "#EA811CCC", // solid
  },
  sizeIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  sizeText: {
    marginTop: 8,
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    color: "#666666", // tetap abu-abu
  },

  // Description
  drinkDesc: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 16,
    color: "#777",
  },

  // Bottom Row
  bottomRow: {
    position: "absolute", // selalu nempel bawah
    bottom: 80, // kasih jarak biar ga tabrakan sama BottomNav
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 36,
    paddingVertical: 20,
  },

  qtyWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  qtyButton: {
    width: 30,
    height: 30,
    borderRadius: 15, // biar bulat
    backgroundColor: "rgba(234, 129, 28, 0.8)", // #EA811CCC dengan opacity 80%
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },

  qtyButtonText: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 17, // kecil supaya pas di lingkaran 20x20
    color: "#fff", // kontras dengan background orange
    textAlign: "center",
  },

  qtyText: {
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 8,
    color: "#000",
  },

  addButton: {
    backgroundColor: "#F79321",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  addText: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },

  // Bottom Nav
  bottomNavWrapper: {
    position: Platform.OS === "web" ? "fixed" : "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 9999,
    elevation: 10,
    backgroundColor: "transparent",
  },
});

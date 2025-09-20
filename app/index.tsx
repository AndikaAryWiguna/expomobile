import React, { useState } from "react";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Banner from "../src/components/Banner";
import BottomNav from "../src/components/BottomNav";
import CategoryList from "../src/components/CategoryList";
import DrinkCard from "../src/components/DrinkCard";
import SearchBar from "../src/components/SearchBar";

import { initialCategories } from "../src/data/categories";
import { initialDrinks } from "../src/data/drinks";
import { Category } from "../src/types";

export default function App() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const selectCategory = (selected: Category) => {
    setCategories(
      categories.map((c: Category) => ({
        ...c,
        isSelected: c.name === selected.name,
      }))
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header di luar scroll */}
      <Banner />
      <SearchBar />
      <CategoryList categories={categories} onSelect={selectCategory} />

      {/* Drinks scrollable */}
      <View style={styles.drinksWrapper}>
        <ScrollView contentContainerStyle={{ paddingBottom: 140 }}>
          {initialDrinks.map((item, index) => (
            <DrinkCard key={index} drink={item} />
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation fix di bawah */}
      <View style={styles.bottomNavWrapper}>
        <BottomNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  drinksWrapper: {
    flex: 5, // FlatList ambil ruang tersisa & bisa scroll
  },
  // khusus web supaya FlatList bisa discroll
  webScrollWrapper: {
    maxHeight: "100%",
    overflow: "scroll", // pakai scroll, bukan auto
  },
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

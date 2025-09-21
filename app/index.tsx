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
    <View style={styles.container}>
      {/* SafeArea hanya untuk bagian atas */}
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
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
      </SafeAreaView>

      {/* Bottom Navigation fix di bawah */}
      <View style={styles.bottomNavWrapper}>
        <BottomNav />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  drinksWrapper: {
    flex: 1, // ambil ruang sisa & bisa scroll
  },
  webScrollWrapper: {
    maxHeight: "100%",
    overflow: "scroll", // khusus web
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

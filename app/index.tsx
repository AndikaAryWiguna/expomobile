import React, { useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Banner from "../src/components/Banner";
import BottomNav from "../src/components/BottomNav";
import CategoryList from "../src/components/CategoryList";
import DrinkCard from "../src/components/DrinkCard";
import SearchBar from "../src/components/SearchBar";

import { initialCategories } from "../src/data/categories";
import { initialDrinks } from "../src/data/drinks";
import { Category, Drink } from "../src/types";

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
      {/* Konten utama */}
      <View style={styles.content}>
        <FlatList
          data={initialDrinks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }: { item: Drink }) => <DrinkCard drink={item} />}
          ListHeaderComponent={
            <View>
              <Banner />
              <SearchBar />
              <CategoryList categories={categories} onSelect={selectCategory} />
            </View>
          }
          contentContainerStyle={{ paddingBottom: 140 }} // beri ruang buat nav
          showsVerticalScrollIndicator={true}
        />
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
  content: {
    flex: 1,
  },
  bottomNavWrapper: {
    position: Platform.OS === "web" ? "fixed" : "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 9999, // pastikan tampil di atas
    elevation: 10, // untuk Android
    backgroundColor: "transparent",
  },
});

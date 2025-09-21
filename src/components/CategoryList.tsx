import React from "react";
import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Category } from "../types";

type Props = {
  categories: Category[];
  onSelect: (selected: Category) => void;
};

export default function CategoryList({ categories, onSelect }: Props) {
  // 👉 Jika platform Web, pakai ScrollView
  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ overflow: "scroll" }}
          contentContainerStyle={styles.scrollContent}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={[styles.categoryChip, item.isSelected && styles.categoryChipSelected]}
              onPress={() => onSelect(item)}>
              <View style={styles.iconWrapper}>
                <Image source={item.icon} style={styles.iconImage} resizeMode="contain" />
              </View>
              <Text style={[styles.categoryText, item.isSelected && styles.categoryTextSelected]}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  // 👉 Jika mobile, pakai FlatList
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.categoryChip, item.isSelected && styles.categoryChipSelected]} onPress={() => onSelect(item)}>
            <View style={styles.iconWrapper}>
              <Image source={item.icon} style={styles.iconImage} resizeMode="contain" />
            </View>
            <Text style={[styles.categoryText, item.isSelected && styles.categoryTextSelected]}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60, // tinggi wrapper
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  categoryChip: {
    width: 129,
    height: 37,
    flexDirection: "row", // icon + text horizontal
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginRight: 8,
    opacity: 1,
  },
  categoryChipSelected: {
    backgroundColor: "#F79321",
    opacity: 0.8, // 80% transparansi
  },
  iconWrapper: {
    width: 29,
    height: 29,
    borderRadius: 29 / 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  categoryText: {
    color: "#333",
    fontWeight: "600",
  },
  categoryTextSelected: {
    color: "#fff",
  },
});

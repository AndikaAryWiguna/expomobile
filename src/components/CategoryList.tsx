import React from "react";
import { FlatList, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
          style={{ overflow: "scroll" }} // wajib biar scroll jalan di web
          contentContainerStyle={styles.scrollContent}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={[styles.categoryChip, item.isSelected && styles.categoryChipSelected]}
              onPress={() => onSelect(item)}>
              <Text style={[styles.categoryText, item.isSelected && styles.categoryTextSelected]}>
                {item.icon} {item.name}
              </Text>
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
            <Text style={[styles.categoryText, item.isSelected && styles.categoryTextSelected]}>
              {item.icon} {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60, // ✅ tinggi fixed supaya scroll area jelas
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 16,
  },
  categoryChip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginRight: 8,
  },
  categoryChipSelected: {
    backgroundColor: "#F79321",
  },
  categoryText: {
    color: "#333",
    fontWeight: "600",
  },
  categoryTextSelected: {
    color: "#fff",
  },
});

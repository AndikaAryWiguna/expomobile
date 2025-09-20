import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Category } from "../types";

type Props = {
  categories: Category[];
  onSelect: (selected: Category) => void;
};

export default function CategoryList({ categories, onSelect }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity style={[styles.categoryChip, item.isSelected && styles.categoryChipSelected]} onPress={() => onSelect(item)}>
          <Text style={[styles.categoryText, item.isSelected && styles.categoryTextSelected]}>
            {item.icon} {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
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

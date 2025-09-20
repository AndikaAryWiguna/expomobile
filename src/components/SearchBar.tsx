import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <TextInput placeholder="Search.." style={styles.searchInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 15,
    paddingHorizontal: 12,
  },
  searchInput: {
    height: 40,
  },
});

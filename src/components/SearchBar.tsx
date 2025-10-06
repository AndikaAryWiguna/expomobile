import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." placeholderTextColor="#6b6b6b" style={styles.input} />
      <TouchableOpacity style={styles.iconWrapper}>
        <Ionicons name="search" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    paddingHorizontal: 10,
    height: 50,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginHorizontal: 16,
  },
  iconWrapper: {
    backgroundColor: "#F7941D",
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});

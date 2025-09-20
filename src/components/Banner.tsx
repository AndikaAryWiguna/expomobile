import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const placeholderImage = "https://www.gstatic.com/flutter-onestack-prototype/genui/example_1.jpg";

export default function HeaderBanner() {
  return (
    <View style={styles.banner}>
      <View style={styles.bannerContent}>
        <Text style={styles.bannerText}>Discover a world of{"\n"}Coffee delight at</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>Try to test</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: placeholderImage }} style={styles.bannerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    margin: 16,
    borderRadius: 20,
    backgroundColor: "#F79321",
    height: 180,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  bannerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  bannerButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  bannerButtonText: {
    color: "#F79321",
    fontWeight: "bold",
  },
  bannerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
  },
});

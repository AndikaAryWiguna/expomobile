import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HeaderBanner() {
  return (
    <View style={styles.bannerWrapper}>
      <View style={styles.banner}>
        {/* Kiri: teks + button */}
        <View style={styles.bannerContent}>
          <Text style={styles.bannerText}>Discover a world of{"\n"}Coffee delight at</Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Try to test</Text>
          </TouchableOpacity>
        </View>

        {/* Kanan: gambar banner tetap */}
        <View style={styles.imageWrapper}>
          <Image source={require("../../assets/images/banner.png")} style={styles.bannerImage} resizeMode="cover" />
        </View>
      </View>

      {/* Gambar kopi keluar dari card */}
      <Image source={require("../../assets/images/bannercoffe.png")} style={styles.bannerCoffeImage} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerWrapper: {
    margin: 16,
    position: "relative", // supaya bisa absolute keluar
  },
  banner: {
    borderRadius: 20,
    backgroundColor: "#F79321",
    height: 180,
    overflow: "hidden", // biar radius card tetap rapi
    flexDirection: "row",
  },
  bannerContent: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
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
  imageWrapper: {
    flex: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerCoffeImage: {
    position: "absolute",
    right: -30, // geser sedikit keluar kanan
    top: -40, // keluar sedikit dari atas
    width: 230,
    height: 230,
    transform: [{ rotate: "17.83deg" }], // bikin miring
  },
});

import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: "home", label: "Home" },
    { id: "cart", icon: "cart", label: "Cart" },
    { id: "call", icon: "call", label: "Call" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.navBackground}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.button, !isActive && styles.inactiveButton, isActive && styles.activeButton]}
              onPress={() => setActiveTab(tab.id)}>
              <Ionicons name={tab.icon as any} size={24} color={isActive ? "#fff" : "#F7941D"} />
              {isActive && <Text style={styles.label}>{tab.label}</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0, // biar nempel bawah
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#rgba(255,255,255,0.4)", // putih semi transparan
    borderTopLeftRadius: 30, // rounder atas kiri
    borderTopRightRadius: 30, // rounder atas kanan
    paddingTop: 20,
    paddingBottom: 10,
    shadowColor: "#ffffff", // kasih shadow biar kesan depth
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8, // untuk Android
  },

  navBackground: {
    width: 317,
    height: 80,
    borderRadius: 50,
    backgroundColor: "rgba(247, 148, 29, 0.20)", // oranye 2% opacity
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    // shadow iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20,

    // shadow Android
    elevation: 10,
  },

  button: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveButton: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20, // putih untuk nav yang tidak aktif
  },
  activeButton: {
    width: 130,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#F7941D",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
    fontFamily: "Poppins", // pakai font Poppins
  },
});

export default BottomNav;

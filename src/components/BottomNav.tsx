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
            <TouchableOpacity key={tab.id} style={[styles.button, isActive && styles.activeButton]} onPress={() => setActiveTab(tab.id)}>
              <Ionicons name={tab.icon as any} size={24} color={isActive ? "#fff" : "#555"} />
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
    bottom: 0,
    left: 0,
    right: 0,
    height: 109,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent", // biar gak nutupin background utama
  },
  navBackground: {
    width: 317,
    height: 69,
    borderRadius: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
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
  },
});

export default BottomNav;

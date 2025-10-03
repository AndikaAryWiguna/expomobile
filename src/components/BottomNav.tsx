import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname(); // untuk tahu tab aktif

  const tabs = [
    { id: "home", icon: "home", label: "Home", route: "/" },
    { id: "cart", icon: "cart", label: "Cart", route: "/cart" },
    { id: "call", icon: "call", label: "Call", route: "/call" },
  ];

  const handlePress = (tab: any) => {
    router.push(tab.route); // pindah ke halaman berdasarkan path
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBackground}>
        {tabs.map((tab) => {
          const isActive = pathname === tab.route;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.button, !isActive && styles.inactiveButton, isActive && styles.activeButton]}
              onPress={() => handlePress(tab)}>
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
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingBottom: 10,
    shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  navBackground: {
    width: 317,
    height: 80,
    borderRadius: 50,
    backgroundColor: "rgba(247, 148, 29, 0.20)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
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
    shadowRadius: 20,
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
    fontFamily: "Poppins",
  },
});

export default BottomNav;

import Header from "@/src/components/Header";
import { useState } from "react";
import { Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { initialDrinks } from "../src/data/drinks";

// Import gambar kupon
import CuponIcon from "../assets/images/cupon.png";

export default function CartPage() {
  const [cartItems, setCartItems] = useState(
    initialDrinks.map((drink) => ({
      ...drink,
      qty: 1,
    }))
  );

  const updateQty = (id: string, change: number) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item)));
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 5.0;
  const taxes = 2.5;
  const discount = 0;
  const total = subtotal + shipping + taxes - discount;

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Shopping Cart" onCartPress={() => console.log("Go to cart")} />

      {/* Cart List */}
      <ScrollView
        style={styles.cartListWrapper}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", paddingVertical: 10 }}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.imageUrl} style={styles.image} />

            {/* Right side */}
            <View style={styles.cardRight}>
              {/* Top row */}
              <View style={styles.topRow}>
                <Text style={styles.size}>Small</Text>
                <TouchableOpacity style={styles.additionalBtn}>
                  <Text style={styles.additionalText}>+ Additional</Text>
                </TouchableOpacity>
              </View>

              {/* Title + ingredients */}
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.ingredients}>{truncateText(item.description, 30)}</Text>
              </View>

              {/* Bottom: price + qty */}
              <View style={styles.bottomRow}>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>

                <View style={styles.qtyWrapper}>
                  <TouchableOpacity style={styles.qtyButton} onPress={() => updateQty(item.id, -1)}>
                    <Text style={styles.qtyButtonText}>-</Text>
                  </TouchableOpacity>

                  <Text style={styles.qty}>{item.qty}</Text>

                  <TouchableOpacity style={styles.qtyButton} onPress={() => updateQty(item.id, 1)}>
                    <Text style={styles.qtyButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Coupon */}
        <View style={styles.couponRow}>
          <Image source={CuponIcon} style={styles.cuponImg} />
          <TextInput placeholder="Input text..." placeholderTextColor="#fff" style={styles.couponInput} />
          <TouchableOpacity style={styles.applyBtn}>
            <Text style={styles.applyText}>Applied</Text>
          </TouchableOpacity>
        </View>

        {/* Totals Wrapper */}
        <View style={styles.totalWrapper}>
          <View style={styles.totalRow}>
            <Text style={styles.label}>Subtotal</Text>
            <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.label}>Shipping Fees</Text>
            <Text style={styles.value}>${shipping.toFixed(2)}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.label}>Taxes</Text>
            <Text style={styles.value}>${taxes.toFixed(2)}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.label}>Discount</Text>
            <Text style={styles.discount}>-${discount.toFixed(2)}</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.totalRow}>
            <Text style={[styles.label, { fontWeight: "bold" }]}>Total</Text>
            <Text style={[styles.value, { fontWeight: "bold" }]}>${total.toFixed(2)}</Text>
          </View>

          {/* Checkout */}
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  cartListWrapper: { flex: 1, backgroundColor: "#f1f1f1" },

  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: 345,
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#393939",
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 2,
    alignItems: "center",
  },

  image: { width: 80, height: 80, marginRight: 12, borderRadius: 12 },

  cardRight: { flex: 1, justifyContent: "space-between" },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  size: { fontSize: 12, color: "#F7941D" },

  additionalBtn: {
    backgroundColor: "#F7941D",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  additionalText: { color: "#fff", fontSize: 12, fontWeight: "bold" },

  title: { fontSize: 16, fontWeight: "bold", marginTop: 4 },

  ingredients: { fontSize: 12, color: "gray", marginTop: 2 },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  price: { fontSize: 14, fontWeight: "bold", color: "#F7941D" },

  qtyWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    elevation: 3,
  },

  qtyButton: {
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#F7941D",
    alignItems: "center",
    justifyContent: "center",
  },

  qtyButtonText: { fontSize: 16, fontWeight: "600", color: "#fff" },

  qty: { marginHorizontal: 10, fontSize: 16, fontWeight: "600", color: "#000" },

  footer: {
    position: Platform.OS === "web" ? "fixed" : "absolute",
    paddingHorizontal: 20,
    paddingTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(255,255,255,0.4)",
    shadowColor: "#f7f7f7",
    shadowOpacity: 0.7,
    shadowRadius: 40,
    borderColor: "#e0e0e0",
    bottom: 0,
    left: 0,
    right: 0,
  },

  couponRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7941D",
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 15,
  },

  cuponImg: { width: 24, height: 24, marginRight: 8, resizeMode: "contain" },

  couponInput: { flex: 1, color: "#fff", fontSize: 14 },

  applyBtn: {
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },

  applyText: { color: "#F7941D", fontWeight: "bold" },

  totalWrapper: {
    backgroundColor: "#E5E3E4",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginHorizontal: -20, // full kiri–kanan
    paddingBottom: 30,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  label: { fontSize: 14, color: "#333" },

  value: { fontSize: 14, color: "#333" },

  discount: { fontSize: 14, color: "#F7941D" },

  separator: {
    borderTopWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    marginVertical: 10,
  },

  checkoutBtn: {
    marginTop: 15,
    backgroundColor: "#F7941D",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },

  checkoutText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

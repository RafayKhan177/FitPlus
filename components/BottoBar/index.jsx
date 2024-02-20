import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("AllActivities")}
        style={styles.button}
      >
        <Ionicons name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddExercise")}
        style={styles.button}
      >
        <Ionicons name="search" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.button}
      >
        <Ionicons name="settings" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 20, // Adjust as needed
    paddingHorizontal: 20, // Adjust as needed
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8, // Add elevation for Android shadow
    shadowColor: "#000", // Add shadow color for iOS
    shadowOffset: { width: 0, height: -3 }, // Add shadow offset for iOS
    shadowOpacity: 0.1, // Add shadow opacity for iOS
    shadowRadius: 3, // Add shadow radius for iOS
  },
  button: {
    alignItems: "center",
  },
});

export default BottomBar;

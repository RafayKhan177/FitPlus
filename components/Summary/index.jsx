import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Summary = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Exercise: </Text>
      <Text style={styles.value}>{data?.exercise}</Text>
      {data?.duration ? (
        <>
          <Text style={styles.label}>Duration: </Text>
          <Text style={styles.value}>{data?.duration}</Text>
        </>
      ) : null}

      <Text style={styles.label}>Calorie Consumption: </Text>
      <Text style={styles.value}>{data?.calorieConsumption}</Text>

      <Text style={styles.label}>Timestamp: </Text>
      <Text style={styles.value}>{data?.timestamp}</Text>

      <Text style={styles.label}>User Notes: </Text>
      <Text style={styles.value}>{data?.userNotes}</Text>
    </View>
  );
};

// Feeling fierce? Check out these badass styles!

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#f4f1de", // Embrace the darkness
    backgroundColor: "#eddcd2", // Because black is the new black
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    color: "#ff9900", // Add a splash of danger
    textTransform: "uppercase", // Command attention
    marginBottom: 5,
  },
  value: {
    color: "#000", // Let your words shine bright
    marginBottom: 10,
  },
});

export default Summary;

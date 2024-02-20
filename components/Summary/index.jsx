import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Summary = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Exercise: </Text>
      <Text style={styles.value}>{data?.exercise}</Text>

      <Text style={styles.label}>Duration: </Text>
      <Text style={styles.value}>{data?.duration}</Text>

      <Text style={styles.label}>Calorie Consumption: </Text>
      <Text style={styles.value}>{data?.calorieConsumption}</Text>

      <Text style={styles.label}>Timestamp: </Text>
      <Text style={styles.value}>{data?.timestamp}</Text>

      <Text style={styles.label}>User Notes: </Text>
      <Text style={styles.value}>{data?.userNotes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    marginBottom: 10,
  },
});

export default Summary;

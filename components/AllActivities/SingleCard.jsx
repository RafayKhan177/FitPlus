import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Heading } from "@gluestack-ui/themed";

export default function SingleCard({ activity, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Summary", { activity })}
    >
      <View style={styles.cardContainer}>
        <Card size="md" variant="elevated" style={styles.card}>
          <Heading mb="$1" size="md" style={styles.heading}>
            {activity?.exercise}
          </Heading>
          <Text style={styles.text}>{activity?.duration}</Text>

          <Text style={styles.label}>Timestamp: </Text>
          <Text style={styles.value}>{activity?.timestamp}</Text>

          <Text style={styles.label}>User Notes: </Text>
          <Text style={styles.value}>{activity?.userNotes}</Text>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
  },
  card: {
    padding: 40,
    backgroundColor: "#006d77", // Dark and mysterious
    borderRadius: 8,
  },
  heading: {
    color: "#ff9900", // Add a splash of danger
    textTransform: "uppercase", // Command attention
    marginBottom: 5,
  },
  text: {
    color: "#fff", // Let your words shine bright
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ff9900", // Add a splash of danger
    marginTop: 5,
  },
  value: {
    fontSize: 12,
    color: "#fff", // Let your words shine bright
    marginTop: 2,
  },
});

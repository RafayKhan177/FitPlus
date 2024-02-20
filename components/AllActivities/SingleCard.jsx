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
          <Heading mb="$1" size="md">
            {activity?.exercise}
          </Heading>
          <Text size="sm">{activity?.duration}</Text>

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
    marginBottom: 10,
  },
  card: {
    padding: 10,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  value: {
    fontSize: 12,
    marginTop: 2,
  },
});

import { View, Text } from "react-native";
import React from "react";
import AllActivities from "../components/AllActivities";
import AddExcercise from "../components/AddExcercise";

export default function Activities() {
  return (
    <View>
      <Text>Activities</Text>
      <AddExcercise />
      <AllActivities />
    </View>
  );
}

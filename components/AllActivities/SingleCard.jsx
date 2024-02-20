import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card, Heading } from "@gluestack-ui/themed";

export default function SingleCard({ activity, navigation }) {

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Summary", { activity })}
    >
      <View>
        <Card size="md" variant="elevated" m="$3">
          <Heading mb="$1" size="md">
            {activity?.exercise}
          </Heading>
          <Text size="sm">{activity?.duration}</Text>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

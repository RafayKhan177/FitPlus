import { View, Text } from "react-native";
import React from "react";
import { Card, Heading } from "@gluestack-ui/themed";

export default function singleCard({ activity }) {
  return (
    <View>
      <Card size="md" variant="elevated" m="$3">
        <Heading mb="$1" size="md">
          {activity?.exercise}
        </Heading>
        <Text size="sm">{activity?.duration}</Text>
      </Card>
    </View>
  );
}

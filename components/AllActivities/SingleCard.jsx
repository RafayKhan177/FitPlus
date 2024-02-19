import { View, Text } from "react-native";
import React from "react";
import { Card, Heading } from "@gluestack-ui/themed";

export default function singleCard() {
  return (
    <View>
      <Card size="md" variant="elevated" m="$3">
        <Heading mb="$1" size="md">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
    </View>
  );
}

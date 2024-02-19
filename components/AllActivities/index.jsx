import { View } from "react-native";
import React from "react";
import SingleCard from "./SingleCard";
import { ScrollView } from "@gluestack-ui/themed";

export default function Index() {
  return (
    <View>
      <ScrollView h={700}>
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </ScrollView>
    </View>
  );
}

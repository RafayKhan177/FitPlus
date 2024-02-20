import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import AppStack from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return <AppStack />;
}

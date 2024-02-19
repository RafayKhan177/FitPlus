import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddExcercise from "./components/AddExcercise";
import { Box, GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <View style={styles.container}>
      <GluestackUIProvider config={config}>
        <Box width="100%" justifyContent="center" alignItems="center">
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          <AddExcercise />
        </Box>
      </GluestackUIProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

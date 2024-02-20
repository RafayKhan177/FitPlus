import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AllActivities from "../components/AllActivities";
import BottomBar from "../components/BottoBar";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <GluestackUIProvider config={config}>
        <SafeAreaProvider>
          <AllActivities navigation={navigation} />
          <BottomBar navigation={navigation} />
        </SafeAreaProvider>
      </GluestackUIProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

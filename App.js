import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AllActivities from "./screens/Activities";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <GluestackUIProvider config={config}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={AllActivities} />
          <Tab.Screen name="Settings" component={<Text>dsa</Text>} />
        </Tab.Navigator>
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

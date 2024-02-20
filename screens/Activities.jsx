import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AllActivities from "../components/AllActivities";
import BottomBar from "../components/BottoBar";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App({ navigation }) {
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("profileData");
        if (!storedData) {
          navigation.navigate("Profile");
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

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

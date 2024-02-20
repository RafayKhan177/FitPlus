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
    // Define an asynchronous function to fetch profile data
    const fetchProfileData = async () => {
      try {
        // Attempt to retrieve stored profile data from AsyncStorage
        const storedData = await AsyncStorage.getItem("profileData");
        // If no stored data is found, navigate to the Profile screen
        if (!storedData) {
          navigation.navigate("Profile");
        }
      } catch (error) {
        // Handle any errors that occur during the fetching process
        console.error("Error fetching profile data:", error);
      }
    };

    // Call the fetchProfileData function when the component mounts (empty dependency array means it runs once)
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

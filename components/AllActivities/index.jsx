import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import SingleCard from "./SingleCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index({ navigation }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActivities = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("activity");
        if (jsonValue !== null) {
          // value previously stored, parse it into an array
          const array = JSON.parse(jsonValue);
          console.log(array);
          setActivities(array);
        }
      } catch (e) {
        console.error("Error reading value: ", e);
      }
    };

    // Call getActivities initially
    getActivities();

    // Recheck AsyncStorage every 1 second
    const intervalId = setInterval(getActivities, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View>
      <ScrollView style={{ marginBottom: 80 }}>
        {Array.isArray(activities) &&
          activities.map((activity, index) => (
            <SingleCard
              key={index}
              activity={activity}
              navigation={navigation}
            />
          ))}
      </ScrollView>
    </View>
  );
}

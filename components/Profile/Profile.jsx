import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, InputField } from "@gluestack-ui/themed";
import { Button, ButtonText } from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [profileData, setProfileData] = useState({
    height: "",
    weight: "",
    fitnessObjective: "",
    userNickname: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("profileData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setProfileData(parsedData);
        } else {
          // Show alert if no profile data is found
          Alert.alert("No Profile Data", "Please add profile information.", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (key, value) => {
    setProfileData({
      ...profileData,
      [key]: value,
    });
  };

  const handleSaveProfile = async () => {
    try {
      const data = JSON.stringify(profileData);
      await AsyncStorage.setItem("profileData", data);
      navigation.navigate("AllActivities");
    } catch (error) {
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
      <Input style={styles.input} variant="rounded" size="md">
        <InputField
          onChangeText={(value) => handleInputChange("height", value)}
          placeholder="Height (cm)"
          value={profileData.height}
        />
      </Input>

      <Input style={styles.input} variant="rounded" size="md">
        <InputField
          onChangeText={(value) => handleInputChange("weight", value)}
          placeholder="Weight (kg)"
          value={profileData.weight}
        />
      </Input>

      <Input style={styles.input} variant="rounded" size="md">
        <InputField
          onChangeText={(value) => handleInputChange("fitnessObjective", value)}
          placeholder="Fitness Objective"
          value={profileData.fitnessObjective}
        />
      </Input>

      {/* User Nickname */}
      <Input variant="rounded" size="md" style={styles.input}>
        <InputField
          onChangeText={(value) => handleInputChange("userNickname", value)}
          placeholder="User Nickname"
          value={profileData.userNickname}
        />
      </Input>

      <Button onPress={handleSaveProfile} style={styles.button}>
        <ButtonText>Save Profile</ButtonText>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    width: "80%",
    marginBottom: 20,
  },
  button: {
    width: "50%",
    marginTop: 20,
    backgroundColor: "#007bff",
    borderRadius: 8,
  },
});

export default Profile;

import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Input, InputField } from "@gluestack-ui/themed";
import { Button, ButtonText } from "@gluestack-ui/themed";
import AsyncStorage from "@react-native-community/async-storage";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    height: "",
    weight: "",
    fitnessObjective: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("profileData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setProfileData(parsedData);
        }
      } catch (error) {
        // Handle error
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
    paddingVertical:20
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

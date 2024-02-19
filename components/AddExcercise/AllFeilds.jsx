import React, { useState } from "react";
import {
  View,
  Image,
  Button,
} from "react-native";
import {
  ChevronDownIcon,
  Input,
  InputField,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
} from "@gluestack-ui/themed";
import { SelectTrigger } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
// import * as ImagePicker from "expo-image-picker";

export default function AllFields({ handleData }) {
  const exercises = [
    { label: "Running", value: "running" },
    { label: "Cycling", value: "cycling" },
    { label: "Swimming", value: "swimming" },
    { label: "Weightlifting", value: "weightlifting" },
    { label: "Yoga", value: "yoga" },
  ];
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    exercise: "",
    duration: "",
    calorieConsumption: "",
    timestamp: "",
    userNickname: "",
    userNotes: "",
  });

  const handleInputChange = (key, value) => {
    const updatedFormData = {
      ...formData,
      [key]: value,
    };
    setFormData(updatedFormData);
    handleData(updatedFormData);
  };

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };

  return (
    <View style={styles.container}>
      {/* Activity Type */}
      <Select
        onValueChange={(value) => {
          handleInputChange("exercise", value);
        }}
      >
        <SelectTrigger variant="rounded" size="md">
          <SelectInput placeholder="Select Exercise" />
          <SelectIcon mr="$3">
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            {exercises.map((exercise, index) => (
              <SelectItem
                key={index}
                label={exercise.label}
                value={exercise.value}
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>

      {/* Duration */}
      <Input variant="rounded" size="md">
        <InputField
          onChangeText={(value) => handleInputChange("duration", value)}
          placeholder="Duration"
        />
      </Input>

      {/* Calorie Consumption */}
      <Input
        onChangeText={(value) => handleInputChange("Calorie", value)}
        variant="rounded"
        size="md"
      >
        <InputField placeholder="Calorie Consumption" />
      </Input>

      {/* Timestamp */}
      <Input
        onChangeText={(value) => handleInputChange("Timestamp", value)}
        variant="rounded"
        size="md"
      >
        <InputField placeholder="Timestamp" />
      </Input>

      {/* User Nickname */}
      <Input
        onChangeText={(value) => handleInputChange("User", value)}
        variant="rounded"
        size="md"
      >
        <InputField placeholder="User Nickname" />
      </Input>

      {/* User-input Notes (Optional) */}
      <Input
        onChangeText={(value) => handleInputChange("Notes", value)}
        variant="rounded"
        size="md"
      >
        <InputField placeholder="Notes" />
      </Input>

      {/* Picture Upload */}
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: "1rem",
  },
});

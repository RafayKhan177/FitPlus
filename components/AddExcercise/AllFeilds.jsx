import React, { useState } from "react";
import { View } from "react-native";
import { Input, InputField } from "@gluestack-ui/themed";
import { Picker } from "@react-native-picker/picker";

const exercises = [
  { label: "Running", value: "running" },
  { label: "Cycling", value: "cycling" },
  { label: "Swimming", value: "swimming" },
  { label: "Weightlifting", value: "weightlifting" },
  { label: "Yoga", value: "yoga" },
];

export default function AllFields({ changeData }) {
  const [formData, setFormData] = useState({
    exercise: "",
    duration: "",
    calorieConsumption: "",
    timestamp: "",
    userNickname: "",
    userNotes: "",
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
    changeData(formData);
  };

  return (
    <View>
      {/* Activity Type */}
      <Picker
        selectedValue={formData.exercise}
        onValueChange={(itemValue) => handleInputChange("exercise", itemValue)}
      >
        {exercises.map((val, index) => (
          <Picker.Item key={index} label={val.label} value={val.value} />
        ))}
      </Picker>

      {/* Duration */}
      <Input variant="rounded" size="md">
        <InputField
          onChangeText={(value) => handleInputChange("duration", value)}
          placeholder="Duration"
        />
      </Input>

      {/* Calorie Consumption */}
      <Input
        onChangeText={(value) => handleInputChange("calorieConsumption", value)}
        variant="rounded"
        size="md"
      >
        <InputField placeholder="Calorie Consumption" />
      </Input>

      {/* Timestamp */}
      <Input
        onChangeText={(value) => handleInputChange("timestamp", value)}
        variant="rounded"
        size="md"
      >
        <InputField placeholder="Timestamp" />
      </Input>

      {/* User Nickname */}
      <Input
        onChangeText={(value) => handleInputChange("userNickname", value)}
        variant="rounded"
        size="md"
      >
        <InputField placeholder="User Nickname" />
      </Input>

      {/* User-input Notes (Optional) */}
      <Input
        onChangeText={(value) => handleInputChange("userNotes", value)}
        variant="rounded"
        size="md"
      >
        <InputField placeholder="Notes" />
      </Input>
    </View>
  );
}

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
    const updatedFormData = {
      ...formData,
      [key]: value,
    };
    setFormData(updatedFormData);
    changeData(updatedFormData);
  };

  return (
    <View>
      {/* Activity Type */}
      <Picker
        style={{ marginTop: 200 }}
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
      <Input variant="rounded" size="md">
        <InputField
          onChangeText={(value) =>
            handleInputChange("calorieConsumption", value)
          }
          placeholder="Calorie Consumption"
        />
      </Input>

      {/* Timestamp */}
      <Input variant="rounded" size="md">
        <InputField
          onChangeText={(value) => handleInputChange("timestamp", value)}
          placeholder="Timestamp"
        />
      </Input>

      {/* User Nickname */}
      <Input variant="rounded" size="md">
        <InputField
          onChangeText={(value) => handleInputChange("userNickname", value)}
          placeholder="User Nickname"
        />
      </Input>

      {/* User-input Notes (Optional) */}
      <Input variant="rounded" size="md">
        <InputField
          onChangeText={(value) => handleInputChange("userNotes", value)}
          placeholder="Notes"
        />
      </Input>
    </View>
  );
}

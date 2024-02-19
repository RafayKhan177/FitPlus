import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
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
  Textarea,
} from "@gluestack-ui/themed";
import { TextareaInput } from "@gluestack-ui/themed";
import { SelectTrigger } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";


export default function AllFields() {
    const exercises = [
      { label: "Running", value: "running" },
      { label: "Cycling", value: "cycling" },
      { label: "Swimming", value: "swimming" },
      { label: "Weightlifting", value: "weightlifting" },
      { label: "Yoga", value: "yoga" },
      // Add more exercises as needed
    ];
  const [formData, setFormData] = useState({
    exercise: "",
    duration: "",
    calorieConsumption: "",
    timestamp: "",
    userNickname: "",
    userNotes: "",
  });

//   console.log(formData)

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <View style={styles.container}>
      {/* Activity Type */}
      <Select>
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
      <Input variant="rounded" size="md">
        <InputField placeholder="Calorie Consumption" />
      </Input>

      {/* Timestamp */}
      <Input variant="rounded" size="md">
        <InputField placeholder="Timestamp" />
      </Input>

      {/* User Nickname */}
      <Input variant="rounded" size="md">
        <InputField placeholder="User Nickname" />
      </Input>

      {/* User-input Notes (Optional) */}
      <Textarea size="md">
        <TextareaInput placeholder="Your text goes here..." />
      </Textarea>

      {/* Picture Upload */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View style={{ borderWidth: 1, padding: 10 }}>
          <Text>Upload Picture</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: "1rem",
  },
});

import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Input, InputField } from "@gluestack-ui/themed";
import { Picker } from "@react-native-picker/picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Text } from "@gluestack-ui/themed";

const exercises = [
  { label: "Running", value: "running" },
  { label: "Cycling", value: "cycling" },
  { label: "Swimming", value: "swimming" },
  { label: "Weightlifting", value: "weightlifting" },
  { label: "Yoga", value: "yoga" },
];

// Function to format the date
const formatDate = (date) => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  return `${day} ${month} ${year} ${hours}:${minutes}${ampm}`;
};

export default function AllFields({ changeData }) {
  const [formData, setFormData] = useState({
    timestamp: formatDate(new Date()), // Add current timestamp with the specified format
    duration: "",
    exercise: "",
    calorieConsumption: "",
    userNotes: "",
  });

  console.log(formData);

  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleInputChange = (key, value) => {
    const updatedFormData = {
      ...formData,
      [key]: value,
    };
    setFormData(updatedFormData);
    changeData(updatedFormData);
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime !== undefined) {
      const selectedDate = new Date(selectedTime);
      const hours = selectedDate.getHours();
      const minutes = selectedDate.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
      setFormData({
        ...formData,
        duration: formattedTime,
      });
    }
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
      {/* Calorie Consumption */}
      <Input variant="rounded" size="md" style={styles.input}>
        <InputField
          onChangeText={(value) =>
            handleInputChange("calorieConsumption", value)
          }
          placeholder="Calorie Consumption"
        />
      </Input>
      {/* User-input Notes (Optional) */}
      <Input variant="rounded" size="md" style={styles.input}>
        <InputField
          onChangeText={(value) => handleInputChange("userNotes", value)}
          placeholder="Notes"
        />
      </Input>
      {/* Duration */}
      <View style={styles.buttonContainer}>
        <Button title={"Select Time"} onPress={() => setShowTimePicker(true)} />
        {showTimePicker && (
          <RNDateTimePicker
          mode="time"
          value={new Date()}
          display="clock"
          onChange={handleTimeChange}
          />
          )}
          <Text>{formData.duration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});

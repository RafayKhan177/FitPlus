import React, { useState, useRef } from "react";
import { Button, ButtonText, Center } from "@gluestack-ui/themed";
import AllFeilds from "./AllFeilds";
import AsyncStorage from "@react-native-community/async-storage";

export default function AddExercise() {
  const [formData, setFormData] = useState([]);
  const ref = useRef(null);

  const handleCreate = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("activity");
      const oldArray = jsonValue != null ? JSON.parse(jsonValue) : [];
      console.log(oldArray);
      const newArray = JSON.stringify([...oldArray, formData]);
      await AsyncStorage.setItem("activity", newArray);
    } catch (e) {
      // handle error
    }
  };

  return (
    <Center h={100}>
      <Button onPress={() => console.log("New Workout")} ref={ref}>
        <ButtonText>New Workout</ButtonText>
      </Button>
      <AllFeilds changeData={(e) => setFormData(e)} />
      <Button onPress={handleCreate}>
        <ButtonText>Create</ButtonText>
      </Button>
    </Center>
  );
}

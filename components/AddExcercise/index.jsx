import React, { useState, useRef, useEffect } from "react";
import {
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@gluestack-ui/themed";
import { Button, ButtonText, Center } from "@gluestack-ui/themed";
import { Text } from "react-native-paper";
import AllFeilds from "./AllFeilds";
import AsyncStorage from '@react-native-community/async-storage';


export default function AddExercise() {
  const [formData, setFormData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  console.log(formData);

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

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Center h={100}>
      <Text>...</Text>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <ButtonText>New Workout</ButtonText>
      </Button>
      <Modal isOpen={showModal} onClose={handleModalClose} finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Add New Workout</Heading>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <AllFeilds changeData={(e) => setFormData(e)} />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={handleModalClose}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={handleCreate}
            >
              <ButtonText>Create</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

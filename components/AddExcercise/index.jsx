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
import { useRef, useState } from "react";
import AllFeilds from "./AllFeilds";
import { Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddExcercise() {
  const [form, setForm] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);

  const save = async (formData) => {
    // try {
    //   // Get existing activity data from AsyncStorage
    //   const existingActivity = await AsyncStorage.getItem("activity");
    //   console.log(existingActivity);
    //   let updatedActivity = [];
    //   // Parse existing activity data or initialize as an empty array if null
    //   if (existingActivity) {
    //     const parsedActivity = JSON.parse(existingActivity);
    //     updatedActivity = [...parsedActivity, formData];
    //   } else {
    //     // If no existing activity data, set the new formData as an array
    //     updatedActivity = [formData];
    //   }
    //   // Save the updated activity data to AsyncStorage
    //   await AsyncStorage.setItem("activity", JSON.stringify(updatedActivity));
    // } catch (e) {
    //   // Handle errors here
    //   console.error("Error saving activity data:", e);
    // }
  };

  return (
    <Center h={100}>
      <Text>...</Text>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <ButtonText>New Workout</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Add New Workout</Heading>
            <ModalCloseButton>{/* <Icon as={CloseIcon} /> */}</ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <AllFeilds changeData={(e) => setForm(e)} />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText onPress={save}>Create</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

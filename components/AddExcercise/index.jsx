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

export default function AddExcercise() {
  const [form, setForm] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);

  
  return (
    <Center h={100}>
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
            <AllFeilds
              handleData={(data) => {
                setForm(data);
              }}
            />
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
              <ButtonText onPress={() => console.log(form)}>Create</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

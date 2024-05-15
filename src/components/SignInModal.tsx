import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import axios, { AxiosError, AxiosResponse } from "axios";

interface Props {
  open: boolean;
  onClose: () => void;
}

interface Response {
  auth: string;
}

interface ErrorResponse {
  code: string;
  message: string;
}

function SignInModal({ open, onClose }: Props) {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  function handleResponse(res: AxiosResponse<Response>) {
    // DEBUG
    console.log(res.data.auth);

    setErrorMessage("");
  }

  function handleErrorResponse(error: AxiosError<ErrorResponse>) {
    // DEBUG
    console.error(error.response);

    const errorCode = error.response?.data.code;
    if (errorCode === "NOT_FOUND_USER") {
      setErrorMessage("계정을 찾을 수 없습니다.");
    }
  }

  function onSubmit(data: FieldValues) {
    axios
      .post(`http://${window.location.hostname}:8080/auth/signin`, data)
      .then((res) => handleResponse(res))
      .catch((error) => handleErrorResponse(error));
  }

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <ModalBody>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email", { required: true })} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password", { required: true })} />
              </FormControl>
              {errorMessage !== "" && (
                <Text color="tomato" marginTop="5px">
                  {errorMessage}
                </Text>
              )}
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Sign in
              </Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignInModal;

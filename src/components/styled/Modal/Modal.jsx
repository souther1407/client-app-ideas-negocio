import React, { useEffect, useState } from "react";
import Text from "../Text/Text";
import styles from "./modal.module.css";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Modal = ({ title = "MVP", children, isOpen, onClose, renderFooter }) => {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <ChakraModal onClose={onClose} isOpen={isOpen} scrollBehavior={"inside"}>
      <ModalOverlay />
      <ModalContent
        backgroundImage={"linear-gradient(#061e32, #0d4572, #061e32)"}
        color={"aliceblue"}
        border={"1px solid aliceblue"}
        maxHeight={"none"}
        h={"100vh"}
        marginTop={"0"}
      >
        <ModalHeader display={"flex"} justifyContent={"center"}>
          <Text>{title}</Text>
        </ModalHeader>
        <ModalBody
          onScroll={(e) => {
            setShowFooter(
              Math.round(e.target.scrollTop) >=
                (e.target.scrollHeight - e.target.offsetHeight) / 1.4
            );
          }}
          className={styles.body}
        >
          {children}
        </ModalBody>
        {
          <ModalFooter display={"flex"} justifyContent={"center"}>
            {showFooter && renderFooter()}
          </ModalFooter>
        }
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;

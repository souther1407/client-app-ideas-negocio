import React, { useEffect, useState } from "react";
import Text from "../../atoms/Text/Text";
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

const InfoModal = ({ title = "", children, isOpen, onClose, renderFooter }) => {
  const [showFooter, setShowFooter] = useState(true);
  const handlerClose = () => {
    setShowFooter(true);
    onClose();
  };
  return (
    <ChakraModal
      onClose={handlerClose}
      isOpen={isOpen}
      scrollBehavior={"inside"}
      size={"lg"}
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor={"#060B12"}
        border={"1px solid aliceblue"}
        maxHeight={"none"}
        h={"100vh"}
        color={"white"}
        marginTop={"0"}
      >
        <ModalCloseButton />
        <ModalHeader display={"flex"} justifyContent={"center"}>
          <Text>{title}</Text>
        </ModalHeader>
        <ModalBody
          onScroll={(e) => {
            console.log(e.target.scrollHeight);
            if (e.target.scrollHeight <= 600) return;
            setShowFooter(
              Math.round(e.target.scrollTop) >=
                (e.target.scrollHeight - e.target.offsetHeight) / 2
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

export default InfoModal;

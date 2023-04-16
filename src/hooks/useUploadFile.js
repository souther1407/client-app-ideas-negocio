import { useState } from "react";
import { storage } from "../firebase.js";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
export const useUploadFile = ({ onUploading, onFinish }) => {
  const upload = async (file, folderName) => {
    const storageRef = ref(storage, folderName + `/${file.name}`);
    const task = uploadBytesResumable(storageRef, file);
    task.on(
      "state_changed",
      (snapshot) => {
        onUploading();
      },
      (error) => {},
      () => {
        getDownloadURL(task.snapshot.ref).then((url) => onFinish(url));
      }
    );
  };

  return { upload };
};

import React, { useState } from "react";
import styles from "./imgUpload.module.css";
import IconButton from "../../../../../../components/molecules/IconButton/IconButton";
import Icon from "../../../../../../components/atoms/Icon/Icon";
import Text from "../../../../../../components/atoms/Text/Text";
import { useLogin } from "../../../../../../hooks/useLogin";
import { useUploadFile } from "../../../../../../hooks/useUploadFile";
const ImgUpload = ({ onLoadingImg, onImgLoaded, onCancel }) => {
  const [uploading, setUploading] = useState(false);
  const handleUploading = () => {
    onLoadingImg();
    console.log("subiendo..");
  };
  const handleFinish = (url) => {
    setUploading(false);
    onImgLoaded(url);
    console.log("listo :D ", url);
  };
  const { userData } = useLogin({});
  const { upload } = useUploadFile({
    onFinish: handleFinish,
    onUploading: handleUploading,
  });

  const handleSelect = async (e) => {
    if (!e.currentTarget.files[0]) return onCancel();
    setUploading(true);
    console.log(e.currentTarget.files[0]);
    upload(e.currentTarget.files[0], userData.uid);
  };
  return (
    <div className={styles.uploadImg}>
      {!uploading && (
        <label>
          <div className={styles.icon}>
            <Icon type={"image"} />
          </div>
          <input
            type="file"
            onChange={handleSelect}
            className={styles.input}
            accept="image/*"
          />
        </label>
      )}
      {uploading && <Text>Subiendo...</Text>}
    </div>
  );
};

export default ImgUpload;

import React, { useState } from "react";
import styles from "./askQuestion.module.css";
import Text from "../../../../components/atoms/Text/Text";
import Button from "../../../../components/atoms/Button/Button";
import ImgUpload from "./components/ImgUpload/ImgUpload";
import IconButton from "../../../../components/molecules/IconButton/IconButton";
import { createMessage } from "../../../../services/messages/messages.js";
const AskQuestion = () => {
  const [input, setInput] = useState({
    content: "",
    urlImg: "",
  });
  const [isValid, setIsValid] = useState(false);
  const handleImgUploaded = (url) => {
    setInput((prev) => ({ ...prev, urlImg: url }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const message = await createMessage(input);
      alert("respuesta enviada :D");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className={styles.askQuestion}>
      <section className={styles.buttons}>
        <div className={styles.controls}>
          <IconButton icon={"bold"} />
          <IconButton icon={"italic"} />
          <IconButton icon={"underline"} />
        </div>
        <div className={styles.uploadImg}>
          <ImgUpload
            onImgLoaded={handleImgUploaded}
            onLoadingImg={() => {}}
            onCancel={() => {}}
          />
        </div>
      </section>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.questionInput}
          onChange={(e) => {
            const value = e.target.value;
            setIsValid(value.length > 0);
            setInput((prev) => ({ ...prev, content: value }));
          }}
          value={input.content}
        ></textarea>
        <Button color="secondary" flexible disabled={!isValid}>
          <Text>Enviar pregunta</Text>
        </Button>
      </form>
    </div>
  );
};

export default AskQuestion;

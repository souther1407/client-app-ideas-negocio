import React, { useEffect, useState } from "react";
import styles from "./showAnswers.module.css";
import InfoModal from "../../../../../../components/molecules/InfoModal/InfoModal";
import { getAnswers } from "../../../../../../services/answers/answers";
import Text from "../../../../../../components/atoms/Text/Text";

const Card = ({ content, expert }) => {
  return (
    <div className={styles.card}>
      <Text>de: {expert}</Text>
      <Text>{content}</Text>
    </div>
  );
};

const ShowAnswers = ({ id, open, onClose }) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getAnswers(id);
        setAnswers(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);
  const handleClose = () => {
    onClose();
  };
  return (
    <InfoModal
      isOpen={open}
      onClose={handleClose}
      renderFooter={() => {}}
      title="respuestas"
    >
      <section>
        {loading ? (
          <Text>Cargando</Text>
        ) : (
          answers.map((a) => (
            <Card content={a.content} expert={a.expert.username} />
          ))
        )}
      </section>
    </InfoModal>
  );
};

export default ShowAnswers;

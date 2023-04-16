import React, { useEffect, useState } from "react";
import styles from "./myQuestions.module.css";
import Text from "../../../../components/atoms/Text/Text";
import { formatStringToShort } from "../../../../utils/format/formatStringToShort";
import { getMyQuestions } from "../../../../services/messages/messages";
const Card = ({ answered, created, content }) => {
  return (
    <div className={styles.card}>
      <Text>{formatStringToShort(content, 15)}</Text>
      <div className={styles.isAnsweredSection}>
        <div
          className={`${styles.circle} ${answered && styles.answered}`}
        ></div>
        <Text>{answered ? "Respondida" : "Sin responder"}</Text>
      </div>
      <Text>{created}</Text>
    </div>
  );
};

const MyQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMyQuestions();
        setQuestions(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.myQuestions}>
      <section className={styles.header}>
        <Text type="title">Mis preguntas</Text>
        <div className={styles.filter}>
          <Text>Todas</Text>
          <Text>|</Text>
          <Text>Respondidas</Text>
        </div>
      </section>
      {/* <Card
        answered={false}
        created={"1/11/2022"}
        content={"como se hace para ser feliz? D:"}
      />
      <Card
        answered={true}
        created={"1/11/2022"}
        content={"Aguante boquita asfas"}
      /> */}
      {!loading &&
        questions.map((q) => (
          <Card
            answered={q.answered}
            content={q.content}
            created={`${q.created.day}/${q.created.month}/${q.created.year}`}
          />
        ))}
    </div>
  );
};

export default MyQuestions;

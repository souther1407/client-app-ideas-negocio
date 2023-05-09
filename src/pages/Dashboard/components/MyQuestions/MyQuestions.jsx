import React, { useEffect, useState } from "react";
import styles from "./myQuestions.module.css";
import Text from "../../../../components/atoms/Text/Text";
import { formatStringToShort } from "../../../../utils/format/formatStringToShort";
import { getMyQuestions } from "../../../../services/messages/messages";
import Button from "../../../../components/atoms/Button/Button";
import ShowAnswers from "./components/ShowAnswers/ShowAnswers";
const Card = ({ id, answered, created, content, onShow }) => {
  return (
    <div className={styles.card}>
      <Text>{formatStringToShort(content, 15)}</Text>
      <div className={styles.isAnsweredSection}>
        <div
          className={`${styles.circle} ${answered && styles.answered}`}
        ></div>
        <Text>{answered ? "Respondida" : "Sin responder"}</Text>
        {answered && (
          <Button onClick={() => onShow(id)} flexible>
            <Text>Ver</Text>
          </Button>
        )}
      </div>
      <Text>{created}</Text>
    </div>
  );
};

const Filter = ({ onSelectFilter }) => {
  const handleClick = (e) => {
    onSelectFilter(e.target.innerText);
  };
  return (
    <div className={styles.filter}>
      <Text onClick={handleClick}>Todas</Text>
      <Text>|</Text>
      <Text onClick={handleClick}>Respondidas</Text>
    </div>
  );
};

const MyQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Todas");
  const [showAnswers, setShowAnswers] = useState({
    id: "",
    show: false,
  });
  const applyFilter = () => {
    if (filter == "Todas") return questions;
    return questions.filter((q) => q.answered);
  };

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
        <Filter onSelectFilter={(filter) => setFilter(filter)} />
      </section>
      <div className={styles.questions}>
        {!loading &&
          applyFilter().map((q) => (
            <Card
              answered={q.answered}
              content={q.content}
              id={q.id}
              created={`${q.created.day}/${q.created.month}/${q.created.year}`}
              onShow={(id) => setShowAnswers({ id, show: true })}
            />
          ))}
        {showAnswers.id && (
          <ShowAnswers
            open={showAnswers.show}
            id={showAnswers.id}
            onClose={() => setShowAnswers((prev) => ({ ...prev, show: false }))}
          />
        )}
      </div>
    </div>
  );
};

export default MyQuestions;

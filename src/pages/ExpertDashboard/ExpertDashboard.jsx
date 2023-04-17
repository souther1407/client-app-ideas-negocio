import React, { useEffect, useState } from "react";
import styles from "./expertDashboard.module.css";
import Text from "../../components/atoms/Text/Text";
import { useLogged } from "../../hooks/useLogged";
import { getNoAnsweredQuestions } from "../../services/messages/messages";
import { createResponse } from "../../services/answers/answers";
import Button from "../../components/atoms/Button/Button";
import InfoModal from "../../components/molecules/InfoModal/InfoModal";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
const Message = ({ id, email, content, created, onResponse }) => {
  return (
    <div className={styles.answer}>
      <Text>{email}</Text>
      <Text>{content}</Text>
      <Text>
        {created.day}/{created.month}/{created.year}
      </Text>
      <Button onClick={() => onResponse(id)}>
        <Text>Responder</Text>
      </Button>
    </div>
  );
};
import { LANDING_PAGE } from "../../utils/constants/routes";

const ExpertDashboard = () => {
  useLogged("experts");
  const navigate = useNavigate();
  const { logout } = useLogin({ type: "experts" });
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  const [response, setResponse] = useState({
    id: "",
    content: "",
  });

  const resetForm = () => {
    setIsOpenForm(false);
    setResponse({
      id: "",
      content: "",
    });
  };
  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleOpen = (id) => {
    setIsOpenForm(true);
    setResponse((prev) => ({ ...prev, id }));
  };

  const handleFormChange = (e) => {
    setResponse((prev) => ({ ...prev, content: e.target.value }));
  };

  const handleSendAnswer = async () => {
    try {
      await createResponse(response.id, response.content);
      alert("respuesta enviada con éxito");
      deleteMessage(response.id);
      resetForm();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate(LANDING_PAGE);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getNoAnsweredQuestions();
        setMessages(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className={styles.expertDashboard}>
      <header>
        <Button onClick={handleLogout}>
          <Text>Log out</Text>
        </Button>
      </header>
      <section className={styles.messages}>
        {!loading &&
          messages.map((m) => (
            <Message
              id={m.id}
              content={m.content}
              created={m.created}
              email={m.user.email}
              onResponse={handleOpen}
            />
          ))}
      </section>
      <InfoModal
        title="responder"
        isOpen={isOpenForm}
        onClose={resetForm}
        renderFooter={() => {}}
      >
        <section className={styles.responseForm}>
          <textarea
            className={styles.textarea}
            onChange={handleFormChange}
          ></textarea>
        </section>
        <Button onClick={handleSendAnswer}>
          <Text>Responder</Text>
        </Button>
      </InfoModal>
    </div>
  );
};

export default ExpertDashboard;

import React, { useEffect, useState } from "react";
import styles from "./input.module.css";
import { useContext } from "react";
import { useValidate } from "../../../hooks/useValidate";
import { context } from "../../../Context/ColorModeContext/ColorModeContext";

const Input = ({
  type = "text",
  textarea,
  id,
  onChange = (id, value) => {},
  onErrors = (id, error) => {},
  validators = [],
  label = "",
  ...otherProps
}) => {
  const { theme } = useContext(context);
  const { error, validate } = useValidate(validators);

  const handlerChange = (e) => {
    onChange(e.target.id, e.target.value);
    validate(e.target.value);
  };

  useEffect(() => {
    onErrors(id, error);
  }, [error]);

  return (
    <div className={styles.cont}>
      <label className={styles.label}>{label}</label>
      {textarea ? (
        <textarea
          {...otherProps}
          id={id}
          onChange={handlerChange}
          className={`${styles.textarea} ${styles[theme]}`}
        />
      ) : (
        <input
          {...otherProps}
          id={id}
          type={type}
          onChange={handlerChange}
          className={`${styles.input} ${styles[theme]}`}
        />
      )}
    </div>
  );
};

export default Input;

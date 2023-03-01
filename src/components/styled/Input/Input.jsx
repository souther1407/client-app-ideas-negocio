import React, { useEffect, useState, useRef } from "react";
import styles from "./input.module.css";
import { useContext } from "react";
import { useValidate } from "../../../hooks/useValidate";
import { context } from "../../../Context/ColorModeContext/ColorModeContext";

const Input = ({
  type = "text",
  textarea,
  color = "primary",
  id,
  onChange = (id, value) => {},
  onErrors = (id, error) => {},
  validators = [],
  label = "",
  variant = "borderFull",
  icon,
  ...otherProps
}) => {
  const { theme } = useContext(context);
  const { error, validate } = useValidate(validators);
  const [labelEffect, setLabelEffect] = useState(false);
  const inputRef = useRef(null);
  const handlerChange = (e) => {
    onChange(e.target.id, e.target.value);
    validate(e.target.value);
  };

  useEffect(() => {
    onErrors(id, error);
  }, [error]);

  return (
    <div className={styles.cont}>
      {label && (
        <label
          className={`${styles.label} ${labelEffect && styles.effect}`}
          onClick={() => inputRef.current.focus()}
        >
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          {...otherProps}
          id={id}
          onChange={handlerChange}
          className={`${styles.textarea} ${styles[theme]} ${styles[color]}`}
        />
      ) : (
        <div className={styles.inputCont}>
          <input
            {...otherProps}
            ref={inputRef}
            id={id}
            onFocus={() => setLabelEffect(true)}
            onBlur={(e) => {
              if (e.target.value.length === 0) setLabelEffect(false);
            }}
            type={type}
            onChange={handlerChange}
            className={`${styles.input} ${styles[variant]} ${styles[theme]} ${styles[color]}`}
          />
          <i className={styles.icon}>{icon && icon()}</i>
        </div>
      )}
    </div>
  );
};

export default Input;

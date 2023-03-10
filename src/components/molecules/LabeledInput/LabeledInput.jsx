import React, { useEffect, useState, useRef } from "react";
import styles from "./labeledInput.module.css";
import { useValidate } from "../../../hooks/useValidate";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

const LabeledInput = ({
  type = "text",
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
        <Label
          className={`${styles.label} ${labelEffect && styles.effect}`}
          onClick={() => inputRef.current.focus()}
        >
          {label}
        </Label>
      )}
      <div className={styles.inputCont}>
        <Input
          {...otherProps}
          variant={variant}
          color={color}
          ref={inputRef}
          id={id}
          onFocus={() => setLabelEffect(true)}
          onBlur={(e) => {
            if (e.target.value.length === 0) setLabelEffect(false);
          }}
          type={type}
          onChange={handlerChange}
        />
        <i className={styles.icon}>{icon && icon()}</i>
      </div>
    </div>
  );
};

export default LabeledInput;

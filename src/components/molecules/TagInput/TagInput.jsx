import React, { useEffect, useState } from "react";
import Input from "../../atoms/Input/Input";
import styles from "./tagInput.module.css";
import Text from "../../atoms/Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";

const Tag = ({ id, input, onDelete }) => {
  return (
    <div className={styles.tag}>
      <Text>{input}</Text>
      <IconButton
        icon={"close"}
        size={"16px"}
        color="black"
        onClick={() => onDelete(input)}
      />
    </div>
  );
};

const TagInput = ({ placeholder, onAddTag, id, onRemoveTag }) => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  const addTag = (e) => {
    const { key } = e;
    if (key === "Enter") {
      const trimmedInput = input.trim();
      if (trimmedInput.length > 0 && !tags.includes(trimmedInput)) {
        setTags([...tags, trimmedInput]);
        setInput("");
        onAddTag(id, trimmedInput);
      }
    }
  };
  const deleteTag = (input) => {
    onRemoveTag(id, input);
    setTags(tags.filter((t) => t !== input));
  };
  return (
    <div className={styles.tagInput}>
      <section className={styles.tags}>
        {tags.map((t, index) => (
          <Tag id={index} input={t} onDelete={deleteTag} />
        ))}
      </section>
      <Input
        onKeyDown={addTag}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder={placeholder}
        variant="borderNone"
      />
    </div>
  );
};

export default TagInput;

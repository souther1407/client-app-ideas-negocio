import React, { useEffect, useState } from "react";
import Input from "../../atoms/Input/Input";
import styles from "./tagInput.module.css";
import Text from "../../atoms/Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";

const Tag = ({ id, input, onDelete }) => {
  return (
    <div className={styles.tag}>
      <Text size={"0.6rem"}>{input}</Text>
      <IconButton
        icon={"close"}
        size={"16px"}
        color="black"
        onClick={() => onDelete(input)}
      />
    </div>
  );
};

const TagInput = ({
  placeholder,
  onAddTag,
  predefinedTags = [],
  id,
  onRemoveTag,
  alreadyIdea,
}) => {
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
  const onTogglePredefinedTag = (tagName) => {
    if (!tags.includes(tagName)) {
      setTags([...tags, tagName]);
      onAddTag(id, tagName);
    } else {
      setTags([...tags.filter((t) => t !== tagName)]);
      onRemoveTag(id, tagName);
    }
  };
  return (
    <div className={styles.tagInputContainer}>
      {alreadyIdea && (
        <section className={styles.predefinedTags}>
          {predefinedTags.map((pt) => (
            <div
              className={`${styles.predefinedTag} ${
                tags.includes(pt) && styles.included
              }`}
              onClick={() => onTogglePredefinedTag(pt)}
            >
              <Text bold color={!tags.includes(pt) ? "soft" : "inherit"}>
                {pt}
              </Text>
            </div>
          ))}
        </section>
      )}
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
          fontSize={"0.6rem"}
          placeholder={placeholder}
          variant="borderNone"
        />
      </div>
    </div>
  );
};

export default TagInput;

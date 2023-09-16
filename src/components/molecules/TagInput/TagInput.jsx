import React, { useEffect, useMemo, useRef, useState } from "react";
import Input from "../../atoms/Input/Input";
import styles from "./tagInput.module.css";
import Text from "../../atoms/Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";
const Tag = ({ id, input, onDelete }) => {
  return (
    <div className={styles.tag}>
      <Text size={"1rem"}>{input}</Text>
      <IconButton
        icon={"close"}
        size={"16px"}
        color="white"
        onClick={() => onDelete(input)}
      />
    </div>
  );
};

const TagInput = ({ placeholder, onAddTag, predefinedTags = [], id }) => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");
  const [showSelectList, setShowSelectList] = useState(false);
  const btnArrowsRef = useRef();
  const addTag = (e) => {
    const { key } = e;
    if (key === "Enter") {
      const trimmedInput = input.trim();
      if (trimmedInput.length > 0 && !tags.includes(trimmedInput)) {
        setTags([...tags, trimmedInput]);
        setInput("");
      }
    }
  };
  const filteredPredefinedTags = useMemo(() => {
    return predefinedTags.filter((t) => !tags.includes(t));
  }, [tags]);
  const deleteTag = (input) => {
    setTags(tags.filter((t) => t !== input));
  };

  const clearTags = (input) => {
    setTags([]);
    setShowSelectList(false);
  };
  const onTogglePredefinedTag = (tagName) => {
    setShowSelectList(false);
    if (!tags.includes(tagName)) {
      setTags([...tags, tagName]);
    } else {
      setTags([...tags.filter((t) => t !== tagName)]);
    }
  };
  useEffect(() => {
    onAddTag(id, tags);
  }, [tags]);
  return (
    <div className={styles.tagInputContainer}>
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
          fontSize={"1rem"}
          placeholder={placeholder}
          onFocus={() => setShowSelectList(true)}
          onBlur={() => setShowSelectList(false)}
          variant="borderNone"
        />
        <div className={styles.selectBtns}>
          <div style={{ visibility: tags.length ? "visible" : "hidden" }}>
            <IconButton icon={"close"} size="16px" onClick={clearTags} />
          </div>
          <IconButton
            ref={btnArrowsRef}
            icon={"upDownArrows"}
            size="16px"
            onClick={() => setShowSelectList((prev) => !prev)}
          />
        </div>
        {showSelectList && (
          <div className={styles.select}>
            {filteredPredefinedTags.map((p) => (
              <Text onClick={() => onTogglePredefinedTag(p)}>{p}</Text>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TagInput;

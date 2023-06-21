import React, { useState } from "react";
import styles from "./formPlayground.module.css";
import Button from "../../../../components/atoms/Button/Button";
import Textarea from "../../../../components/atoms/Textarea/Textarea";
import Text from "../../../../components/atoms/Text/Text";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../../components/atoms/StyledSelect/StyledSelect";
import Slider from "../../../../components/atoms/Slider/Slider";
import IconText from "../../../../components/molecules/IconText/IconText";
import TagInput from "../../../../components/molecules/TagInput/TagInput";
const FormPlayground = ({ onSubmit }) => {
  const [input, setInput] = useState({
    budget: 0,
    freeTime: 1,
    location: "",
  });

  const handleChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <form
      className={styles.formPlayground}
      onSubmit={(e) => e.preventDefault()}
    >
      <header className={styles.header}>
        <Text type="subtitle">Hola</Text>
        <Select>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Load an example" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </header>
      <main className={styles.main}>
        <Textarea placeholder={"Bussines description"} />
        <section className={styles.inputs}>
          <div>
            <Text>Budget ($) {input.budget}</Text>
            <Slider id={"budget"} onChange={handleChange} />
          </div>
          <div>
            <Text>Free Time (H/W){input.freeTime}</Text>
            <Slider id={"freeTime"} onChange={handleChange} min={1} max={100} />
          </div>
          <div>
            <Select onValueChange={(value) => handleChange("location", value)}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Country</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <TagInput placeholder={"Type yours skills"} />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <Button flexible type="bordered">
          <IconText icon={"leftArrow"}>Back</IconText>
        </Button>
        <Button flexible type="bordered">
          <Text>{"Generate report"}</Text>
        </Button>
      </footer>
    </form>
  );
};

export default FormPlayground;

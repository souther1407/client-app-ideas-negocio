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
import { countries } from "../../../../utils/constants/countries";
import Combobox from "../../../../components/molecules/Combobox/Combobox";
const FormPlayground = ({ onSubmit }) => {
  const [input, setInput] = useState({
    budget: 0,
    freeTime: 1,
    location: "",
    description: "",
    skills: [],
  });

  const handleChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddSkill = (id, tag) => {
    setInput((prev) => ({ ...prev, [id]: [...prev.skills, tag] }));
  };

  const handleRemoveTag = (id, tag) => {
    setInput((prev) => ({
      ...prev,
      [id]: prev.skills.filter((t) => t !== tag),
    }));
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
        <Textarea
          placeholder={"Bussines description"}
          id="description"
          onChange={handleChange}
        />
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
            <Combobox
              nofoundText={"not country found"}
              title={"Select Country"}
              data={countries}
              id={"location"}
              w="250px"
              onSelect={handleChange}
            />
            {/* <Select onValueChange={(value) => handleChange("location", value)}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Country</SelectLabel>
                  {countries.map((c) => (
                    <SelectItem value={c}>{c}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>
          <div>
            <TagInput
              placeholder={"Type yours skills"}
              onAddTag={handleAddSkill}
              onRemoveTag={handleRemoveTag}
              id="skills"
            />
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

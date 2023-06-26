import React, { useState } from "react";
import styles from "./formPlayground.module.css";
import Button from "../../../../components/atoms/Button/Button";
import Textarea from "../../../../components/atoms/Textarea/Textarea";
import Text from "../../../../components/atoms/Text/Text";

import Slider from "../../../../components/atoms/Slider/Slider";
import IconText from "../../../../components/molecules/IconText/IconText";
import TagInput from "../../../../components/molecules/TagInput/TagInput";
import { countries } from "../../../../utils/constants/countries";
import Combobox from "../../../../components/molecules/Combobox/Combobox";
import Sheet from "../../../../components/molecules/Sheer/Sheet";
import IconButton from "../../../../components/molecules/IconButton/IconButton";
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

  const handleSubmit = () => {
    onSubmit(input);
  };
  const handleSelectTemplate = (id, value) => {
    setInput((prev) => ({ ...prev, description: value }));
  };
  return (
    <form
      className={styles.formPlayground}
      onSubmit={(e) => e.preventDefault()}
    >
      <header className={styles.header}>
        <Text size={"1rem"} bold>
          Business machine
        </Text>
        <div className={styles.mobileSpace}></div>
        <Combobox
          nofoundText={"not report found"}
          title={"Select report"}
          data={["report 1", "report 2", "report 3"]}
          id={"report"}
          w="200px"
          onSelect={handleSelectTemplate}
        />

        <section className={styles.drawer}>
          <Sheet
            title={""}
            description={""}
            renderButton={() => (
              <IconButton size="16px" color={"white"} icon={"gears"} />
            )}
            renderContent={() => (
              <section className={styles.mobileInputs}>
                <div>
                  <Text size={"0.6rem"} bold>
                    Budget ($) {input.budget}
                  </Text>
                  <Slider id={"budget"} onChange={handleChange} />
                </div>
                <div>
                  <Text size={"0.6rem"} bold>
                    Free Time (H/W) {input.freeTime}
                  </Text>
                  <Slider
                    id={"freeTime"}
                    onChange={handleChange}
                    min={1}
                    max={100}
                  />
                </div>
                <div>
                  <Combobox
                    key={"mobile-countrt"}
                    nofoundText={"not country found"}
                    title={"Country"}
                    data={countries}
                    id={"location"}
                    w="250px"
                    onSelect={handleChange}
                  />
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
            )}
            renderFooter={() => {}}
          />
        </section>
      </header>
      <main className={styles.main}>
        <Textarea
          placeholder={"Bussines description"}
          id="description"
          onChange={handleChange}
        />
        <section className={styles.inputs}>
          <div>
            <Combobox
              nofoundText={"not country found"}
              title={"Country"}
              data={countries}
              id={"location"}
              w="200px"
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
            <Text size={"0.6rem"} bold>
              Budget ($) {input.budget}
            </Text>
            <Slider id={"budget"} onChange={handleChange} />
          </div>
          <div>
            <Text size={"0.6rem"} bold>
              Free Time (H/W) {input.freeTime}
            </Text>
            <Slider id={"freeTime"} onChange={handleChange} min={1} max={100} />
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
          <IconText icon={"leftArrow"} bold>
            Back
          </IconText>
        </Button>
        <Button flexible type="bordered" onClick={handleSubmit}>
          <Text bold>{"Generate report"}</Text>
        </Button>
      </footer>
    </form>
  );
};

export default FormPlayground;

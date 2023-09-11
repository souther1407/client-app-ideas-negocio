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
const FormPlayground = ({ onSubmit, alreadyIdea }) => {
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
  const isButtonDisabled = () => {
    const isSkillsEmpty = input.skills.length === 0;
    const isDescriptionEmpty = alreadyIdea && input.description.length === 0;
    const isLocationEmpty = input.location.length === 0;
    return isSkillsEmpty || isDescriptionEmpty || isLocationEmpty;
  };
  const handleSubmit = () => {
    onSubmit(input);
  };
  const handleSelectTemplate = (id, value) => {
    const reports = {
      "ai automation agency": `Business Idea: Artificial Intelligence Automation Agency
Product Description: Our agency proposes a revolutionary support bot, powered by
ChatGPT, specifically designed to cater to the needs of Real Estate Businesses and Airbnb
hosts. This advanced bot will be available 24/7 to provide exceptional client support,
allowing the human agents to focus on more important tasks. To ensure its effectiveness,
the bot will be trained on customized data, enabling it to handle a wide range of inquiries.
And in case it encounters a question it hasn't seen before, it will smoothly transfer the
client to a human agent for a seamless resolution.`,
      "2 influencers": `We are two friends who have a considerable number of followers on Instagram and TikTok.
We would like to start an online clothing store and leverage our social media presence to boost sales.
Challenges:
 - Neither of us has programming knowledge, which might pose difficulties in dealing with the technical aspects of the business.
 - This is our first time venturing into entrepreneurship,`,
      "bike service":
        "Mobile bike repair and maintenance services for cyclists",
    };
    setInput((prev) => ({
      ...prev,
      description: value ? reports[value] : "",
    }));
  };
  return (
    <div
      className={`${styles.formPlayground} ${
        alreadyIdea && styles.alreadyIdea
      }`}
    >
      <header
        className={`${styles.header} ${alreadyIdea && styles.alreadyIdea}`}
      >
        <div style={{ width: "1px", height: "1px" }}></div>
        <div
          className={`${styles.mobileSpace} ${
            alreadyIdea && styles.alreadyIdea
          }`}
        ></div>
        {alreadyIdea && (
          <Combobox
            nofoundText={"not report found"}
            title={"Select report"}
            data={["AI Automation Agency", "2 Influencers", "Bike Service"]}
            id={"report"}
            w="200px"
            onSelect={handleSelectTemplate}
          />
        )}

        <section
          className={`${styles.drawer} ${alreadyIdea && styles.alreadyIdea}`}
        >
          <Sheet
            title={""}
            description={""}
            renderButton={() => (
              <IconButton size="16px" color={"white"} icon={"gears"} />
            )}
            renderContent={() => (
              <section
                className={`${styles.mobileInputs} ${
                  alreadyIdea && styles.alreadyIdea
                }`}
              >
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
      <main className={`${styles.main} ${alreadyIdea && styles.alreadyIdea}`}>
        {alreadyIdea && (
          <div className={styles.textareaDescription}>
            <Text bold>Describe your bussines idea</Text>
            <Textarea
              placeholder={"Bussines description"}
              id="description"
              value={input.description}
              onChange={handleChange}
              className={`${styles.descriptionInput} ${
                alreadyIdea && styles.alreadyIdea
              }`}
            />
          </div>
        )}
        <section
          className={`${styles.inputs} ${alreadyIdea && styles.alreadyIdea}`}
        >
          {!alreadyIdea && (
            <div className={styles.slidersSection}>
              <Text bold>Business Constraints</Text>
              <div className={styles.sliders}>
                <div className={styles.slider}>
                  <div className={styles.texts}>
                    <Text size={"1rem"} bold>
                      Budget($)
                    </Text>
                    <Text size={"1rem"} bold color="soft">
                      {input.budget}
                    </Text>
                  </div>
                  <Slider id={"budget"} onChange={handleChange} />
                </div>
                <div className={styles.slider}>
                  <div className={styles.texts}>
                    <Text size={"1rem"} bold>
                      Free Time (H/W)
                    </Text>
                    <Text size={"1rem"} bold color="soft">
                      {input.freeTime}
                    </Text>
                  </div>
                  <Slider
                    id={"freeTime"}
                    onChange={handleChange}
                    min={1}
                    max={100}
                  />
                </div>
              </div>
            </div>
          )}

          <div className={styles.countryInput}>
            <Text bold>Choose business location</Text>
            <Combobox
              nofoundText={"not country found"}
              title={"Select..."}
              data={countries}
              id={"location"}
              w="100%"
              h="44px"
              onSelect={handleChange}
            />
          </div>

          <div className={styles.tagsInput}>
            <Text bold>Choose your skills</Text>
            <TagInput
              placeholder={"Type more skills"}
              onAddTag={handleAddSkill}
              onRemoveTag={handleRemoveTag}
              predefinedTags={[
                "Coding",
                "Social Media",
                "Marketing",
                "Design",
                "Sales",
                "Data Analysis",
              ]}
              alreadyIdea={true}
              id="skills"
            />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <Button
          flexible
          color="secondary"
          disabled={isButtonDisabled()}
          onClick={handleSubmit}
        >
          <Text bold>{"Generate report"}</Text>
        </Button>
      </footer>
    </div>
  );
};

export default FormPlayground;

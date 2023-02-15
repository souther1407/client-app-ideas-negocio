import generateIdeaText from "./generateIdea/text.json";
import loginText from "./login/text.json";
import registerText from "./register/text.json";

export default {
  ...registerText,
  ...loginText,
  ...generateIdeaText,
};

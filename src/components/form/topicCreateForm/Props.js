import TopicApi from "api/topic/TopicApi";
import TopicCreateLayout from "./TopicCreateLayout";

const form = {};

const TopicCreateProps = {
  header: "Create topic",
  body: () => TopicCreateLayout(form),
  submit: () => TopicApi.create(form),
};

export default TopicCreateProps;

import { Layout } from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import React from "react";
import { Text } from "react-native";
import { user } from "utils/user";

const EvaluateScreen = () => {
  const fetchTopicAssign = async () => {
    const response = await TopicAssignApi.searchByTeacherCode(user.code);
    console.log(response);
  };

  React.useEffect(() => {
    fetchTopicAssign();
  }, []);

  return (
    <Layout>
      <Text>Evaluate screen</Text>
    </Layout>
  );
};

export default EvaluateScreen;

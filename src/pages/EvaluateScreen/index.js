import {
  Drawer,
  DrawerGroup,
  DrawerItem,
  IndexPath,
  Layout
} from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import i18n from "utils/i18n";
import { user } from "utils/user";

const EvaluateTarget = ({ topAssignData }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {topAssignData?.map((topicAssign) => {
        return (
          <DrawerGroup
            title={topicAssign.topic.name[i18n.language]}
          ></DrawerGroup>
        );
      })}
      <DrawerGroup title="Akveo React Native111111111111">
        <DrawerItem title="UI Kitten" />
        <DrawerItem title="Kitten Tricks" />
      </DrawerGroup>
      <DrawerGroup title="Akveo React Native111111111111">
        <DrawerItem title="UI Kitten" />
        <DrawerItem title="Kitten Tricks" />
      </DrawerGroup>
    </Drawer>
  );
};

const EvaluateScreen = () => {
  let topAssignData;

  const fetchTopicAssign = async () => {
    try {
      let response = await TopicAssignApi.searchByTeacherCode(user.code);
      topAssignData = response;
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchTopicAssign();
  }, []);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <ScrollView>
            <EvaluateTarget topAssignData={topAssignData} />
          </ScrollView>
        </Layout>

        <Layout style={styles.right}>
          <ScrollView>
            <Text>Evaluate screen</Text>
          </ScrollView>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 5,
  },
});

export default EvaluateScreen;

import {
  Drawer,
  DrawerGroup,
  DrawerItem,
  IndexPath,
  Layout
} from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import { AvatarIcon } from "components/Icons";
import TopNav from "components/screen/TopNav";
import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import i18n from "utils/i18n";
import { user } from "utils/user";

const EvaluateTarget = ({ topAssign }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {topAssign?.map((topicAssign) => {
        return (
          <DrawerGroup
            key={topicAssign.id}
            title={topicAssign.topic?.topicName?.[i18n.language]}
          >
            {topicAssign.executeStudent?.map((student) => {
              return (
                <DrawerItem
                  accessoryLeft={AvatarIcon}
                  key={student.id}
                  title={student.name}
                />
              );
            })}
          </DrawerGroup>
        );
      })}
    </Drawer>
  );
};

const EvaluateScreen = () => {
  const [topAssign, setTopAssign] = React.useState();

  const fetchTopicAssign = async () => {
    try {
      let response = await TopicAssignApi.searchByTeacherCode(user.code);
      setTopAssign(response);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchTopicAssign();
  }, []);

  return (
    <Layout style={styles.container}>
      <TopNav title={"screen.evaluate"} />
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <ScrollView>
            <EvaluateTarget topAssign={topAssign} />
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

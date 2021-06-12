import {
    Drawer,
    DrawerGroup,
    DrawerItem,
    IndexPath,
    Layout,
    Text
} from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import { AvatarIcon } from "components/Icons";
import TopNav from "components/screen/TopNav";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { getRenderText } from "utils";
import i18n from "utils/i18n";
import { user } from "utils/user";

const EvaluateTarget = ({ topicAssign }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      {topicAssign?.map((topic) => {
        return (
          <DrawerGroup
            key={topic.id}
            accessoryLeft={(props) => {
              return (
                <Text category="s1">{getRenderText(topic.topic.semester)}</Text>
              );
            }}
            title={topic.topic?.name?.[i18n.language]}
          >
            {topic.executeStudent?.map((student) => {
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
  const [topicAssign, setTopicAssign] = React.useState();

  const fetchTopicAssign = async () => {
    try {
      TopicAssignApi.searchByTeacherCode(user.code).then((result) => {
        setTopicAssign(result);
      });
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
            <EvaluateTarget topicAssign={topicAssign} />
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

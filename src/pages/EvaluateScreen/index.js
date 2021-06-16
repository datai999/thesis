import {
  Drawer,
  DrawerGroup,
  DrawerItem,
  IndexPath,
  Layout,
  Text
} from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import { AvatarIcon } from "components/icons";
import { MyInput } from "components/Input";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { createProps, getRenderText, userService } from "utils";
import i18n from "utils/i18n";

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
                <Text category="s1">
                  {getRenderText(topic.topic.semester)
                    .toString()
                    .substring(0, 3)
                    .padEnd(3, "0")}
                </Text>
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

let topicAssignStore = [];

const EvaluateScreen = ({ navigation }) => {
  const [topicAssign, setTopicAssign] = React.useState();

  const fetchTopicAssign = async () => {
    try {
      TopicAssignApi.searchByTeacherCode(userService.code).then((result) => {
        setTopicAssign(result);
        topicAssignStore = result;
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    return navigation.addListener("focus", fetchTopicAssign);
  }, [navigation]);

  const topicAssignSearchProps = {
    ...createProps().input("topic.name"),
    callBack: (value) => {
      if (value == null || value == "undefined" || value == "") {
        setTopicAssign(topicAssignStore);
      } else {
        setTopicAssign(
          topicAssignStore.filter((item) => {
            return item.topic.name[i18n.language]?.includes(value);
          })
        );
      }
    },
    label: null,
    size: "small",
    style: { margin: 5 },
  };

  return (
    <Layout style={styles.container}>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MyInput {...topicAssignSearchProps} />
          <Layout style={styles.row}>
            <Text category="label" style={{ marginLeft: 5 }}>
              {i18n.t("topic.semester.label")}
            </Text>
            <Text category="label" style={{ marginLeft: 10 }}>
              {i18n.t("topic.name.label")}
            </Text>
          </Layout>
          <ScrollView style={styles.left}>
            <Layout style={{ backgroundColor: "red" }}>
              <EvaluateTarget topicAssign={topicAssign} />
            </Layout>
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

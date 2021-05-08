import { Divider, Layout, List, MenuItem } from "@ui-kitten/components";
import React from "react";
import { getRenderText } from "utils";
import styles from "./styles";

const TopicTableContent = ({ props }) => {
  return (
    <List
      data={props.data}
      ItemSeparatorComponent={Divider}
      renderItem={({ index, item }) => (
        <TopicTableRow
          index={index}
          topic={item.topic}
          guideTeacher={item.guideTeacher}
          students={item.executeStudent}
          setting={props.setting}
        />
      )}
    />
  );
};

const TopicTableRow = ({ index, topic, guideTeacher, students, setting }) => {
  return (
    <Layout style={styles.topicRow}>
      <MenuItem style={styles.index} title={index + 1} />
      <List
        horizontal={true}
        data={Object.keys(setting)}
        renderItem={({ item }) => {
          if (setting[item].hide) return null;
          let data = topic[item];
          if (item == "guideTeacher") data = guideTeacher;
          if (item == "students") data = students;

          let dataRender = Array.isArray(data)
            ? data.map((x) => getRenderText(x))
            : [getRenderText(data)];

          return (
            <List
              style={setting[item].style}
              data={dataRender}
              renderItem={({ ...props }) => (
                <TopicTableBlock item={props.item} />
              )}
            />
          );
        }}
      />
    </Layout>
  );
};

const TopicTableBlock = ({ key, item }) => {
  return <MenuItem key={key} title={item} />;
};

export default TopicTableContent;

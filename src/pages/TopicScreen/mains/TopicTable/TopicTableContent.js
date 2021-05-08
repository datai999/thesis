import { Divider, Layout, List, MenuItem } from "@ui-kitten/components";
import React from "react";
import styles from "./styles";

const TopicTableContent = ({ props }) => {
  return (
    <List
      data={props.data}
      ItemSeparatorComponent={Divider}
      renderItem={({ index, item }) => (
        <TopicTableRow index={index} topic={item} setting={props.setting} />
      )}
    />
  );
};

const TopicTableRow = ({ index, topic, setting }) => {
  return (
    <Layout style={styles.topicRow}>
      <MenuItem style={styles.index} title={index + 1} />
      <List
        horizontal={true}
        data={Object.keys(setting)}
        renderItem={({ item }) => {
          if (setting[item].hide) return null;

          let dataRender = Array.isArray(topic[item])
            ? topic[item].map((x) => getRenderText(x))
            : [getRenderText(topic[item])];

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

function getRenderText(obj) {
  if (obj == null) return null;
  switch (typeof obj) {
    case "string":
    case "number":
      return obj;
    case "object":
      return obj?.name ?? obj?.value;
    default:
      return null;
  }
}

export default TopicTableContent;

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
          if (["string", "number"].includes(typeof topic[item]))
            return <MenuItem style={setting[item].style} title={topic[item]} />;
          if (typeof topic[item] == "object") {
            let value = null;
            if (topic[item]) {
              value = topic[item].name ?? topic[item].value;
            }
            return <MenuItem style={setting[item].style} title={value} />;
          }
          return (
            <List
              style={setting[item].style}
              data={topic[item]}
              renderItem={(element) => <MenuItem title={element} />}
            />
          );
        }}
      />
    </Layout>
  );
};

export default TopicTableContent;

import React from "react";
import { Layout, Divider, List, MenuItem } from "@ui-kitten/components";

import styles from "./styles";

const TopicTableContent = ({ data, setting }) => (
  <List
    data={data}
    ItemSeparatorComponent={Divider}
    renderItem={({ index, item }) => (
      <TopicTableRow index={index} topic={item} setting={setting} />
    )}
  />
);

const TopicTableRow = ({ index, topic, setting }) => (
  <Layout style={styles.topicRow}>
    <MenuItem style={styles.index} title={index + 1} />
    <List
      horizontal={true}
      data={Object.keys(setting)}
      renderItem={({ item }) => {
        if (setting[item].hide) return null;
        if (typeof topic[item] == "string")
          return <MenuItem style={setting[item].style} title={topic[item]} />;
        return (
          <List
            style={setting[item].style}
            data={topic[item]}
            renderItem={({ index, item }) => <MenuItem title={item} />}
          />
        );
      }}
    />
  </Layout>
);

export default TopicTableContent;

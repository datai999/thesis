import React from "react";
import { Layout, List, MenuItem, Button, Modal } from "@ui-kitten/components";

import styles from "./styles";

import { SettingIcon } from "../../../../components/icons";

const settingEvent = () => {
  alert("setting event");
};

const TopicTableHeader = ({ setting }) => (
  <Layout style={styles.topicRow}>
    <Button
      style={styles.index}
      status="info"
      size="tiny"
      appearance="ghost"
      accessoryRight={SettingIcon}
      onPress={settingEvent}
    />
    <List
      horizontal={true}
      data={Object.values(setting)}
      renderItem={({ item }) =>
        item.hide ? null : (
          <MenuItem
            style={item.style.concat(styles.columnHeader)}
            title={item.title}
          />
        )
      }
    />
  </Layout>
);

export default TopicTableHeader;

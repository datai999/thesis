import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  Layout,
  List,
  MenuItem,
  Button,
  Modal,
  Card,
  Text,
  CheckBox,
} from "@ui-kitten/components";
import _ from "lodash";

import { SettingIcon } from "components/icons";

import topicTableStyles from "./styles";
import defaultSetting from "./setting";

const TopicTableHeader = ({ props }) => {
  const [settingVisible, setSettingVisible] = React.useState(false);

  return (
    <Layout style={topicTableStyles.topicRow}>
      <Button
        style={topicTableStyles.index}
        status="info"
        size="tiny"
        appearance="ghost"
        accessoryRight={SettingIcon}
        onPress={() => setSettingVisible(true)}
      />
      <List
        horizontal={true}
        data={Object.values(props.setting)}
        renderItem={({ item }) =>
          item.hide ? null : (
            <MenuItem
              style={item.style.concat(topicTableStyles.columnHeader)}
              title={item.title}
            />
          )
        }
      />

      <Modal
        visible={settingVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setSettingVisible(false)}
      >
        <Animatable.View animation="zoomIn">
          <SettingPopup props={{ ...props, setSettingVisible }} />
        </Animatable.View>
      </Modal>
    </Layout>
  );
};

const SettingPopup = ({ props }) => {
  const [refresh, setRefresh] = React.useState(false);
  const [newSetting, setNewSetting] = React.useState(
    _.cloneDeep(props.setting)
  );

  const refreshSettingPopup = () => setRefresh(!refresh);

  return (
    <Card
      header={() => (
        <Text style={styles.settingPopupHeadText}>
          Topic Column View Settings
        </Text>
      )}
      footer={() => (
        <SettingPopupBottom
          props={{ ...props, newSetting, refreshSettingPopup }}
        />
      )}
    >
      <List
        horizontal={true}
        data={Object.keys(newSetting)}
        renderItem={({ item }) => (
          <CheckBox
            checked={!newSetting[item].hide}
            onChange={(nextChecked) => {
              newSetting[item].hide = !nextChecked;
              refreshSettingPopup();
            }}
          >
            {newSetting[item].title}
          </CheckBox>
        )}
      />
    </Card>
  );
};

const SettingPopupBottom = ({ props }) => (
  <Layout style={styles.settingPopupBot}>
    <SettingPopupBotBtn
      props={{
        text: "Default",
        onPress: () => {
          props.setSetting(defaultSetting);
          props.setSettingVisible(false);
        },
      }}
    />
    <SettingPopupBotBtn
      props={{
        text: "Select all",
        onPress: () => {
          Object.values(props.newSetting).forEach(
            (item) => (item.hide = false)
          );
          props.refreshSettingPopup();
        },
      }}
    />
    <SettingPopupBotBtn
      props={{
        text: "Select none",
        onPress: () => {
          Object.values(props.newSetting).forEach((item) => (item.hide = true));
          props.refreshSettingPopup();
        },
      }}
    />
    <SettingPopupBotBtn
      props={{
        text: "Apply",
        onPress: () => {
          props.setSetting(props.newSetting);
          props.setSettingVisible(false);
        },
      }}
    />
    <SettingPopupBotBtn
      props={{
        text: "Cancel",
        onPress: () => props.setSettingVisible(false),
      }}
    />
  </Layout>
);

const SettingPopupBotBtn = ({ props }) => (
  <Button
    style={styles.settingPopupBotBtn}
    size="small"
    appearance="ghost"
    onPress={props.onPress}
  >
    {props.text}
  </Button>
);

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  settingPopupHeadText: {
    margin: 5,
    fontWeight: "bold",
  },
  settingPopupBot: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  settingPopupBotBtn: {
    margin: 5,
  },
});

export default TopicTableHeader;

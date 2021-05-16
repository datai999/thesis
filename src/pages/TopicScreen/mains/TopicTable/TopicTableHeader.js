import {
  Button,
  Card,
  CheckBox,
  Layout,
  List,
  MenuItem,
  Modal,
  Text,
} from "@ui-kitten/components";
import { SettingIcon } from "components/Icons";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import i18n from "utils/i18n";
import defaultSetting from "./setting";
import topicTableStyles from "./styles";

const TopicTableHeader = ({ props }) => {
  const [settingVisible, setSettingVisible] = React.useState(false);

  let settingAnimation = null;
  const settingAnimationEnd = () =>
    settingAnimation.zoomOut(500).then((endState) => setSettingVisible(false));

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
              title={i18n.t(item.title)}
            />
          )
        }
      />

      <Modal
        visible={settingVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={settingAnimationEnd}
      >
        <Animatable.View
          animation="zoomIn"
          ref={(ref) => (settingAnimation = ref)}
        >
          <SettingPopup props={{ ...props, settingAnimationEnd }} />
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
          props.settingAnimationEnd();
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
          props.settingAnimationEnd();
        },
      }}
    />
    <SettingPopupBotBtn
      props={{
        text: "Cancel",
        onPress: props.settingAnimationEnd,
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

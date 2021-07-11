import {
  Button,
  CheckBox,
  Layout,
  List,
  Modal,
  Text,
} from "@ui-kitten/components";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { getLinkProps, i18n } from "utils";

export default ({ ...props }) => {
  let settingAnimation = null;
  const settingAnimationEnd = () =>
    settingAnimation.zoomOut(500).then((endState) => props.setVisible(false));

  return (
    <Modal
      visible={true ?? props.visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={settingAnimationEnd}
    >
      <Animatable.View
        animation="zoomIn"
        ref={(ref) => (settingAnimation = ref)}
      >
        <SettingModal props={{ ...props, settingAnimationEnd }} />
      </Animatable.View>
    </Modal>
  );
};

const SettingModal = ({ props }) => {
  const [refresh, setRefresh] = React.useState(false);
  const [newSetting, setNewSetting] = React.useState(_.cloneDeep(props.fields));

  const links = getLinkProps(props.fields.map((field) => field.link));

  const refreshSettingPopup = () => setRefresh(!refresh);

  return (
    <Layout style={{ padding: 5 }}>
      <Text style={styles.headText}>{i18n.t("setting.columnVisible")}</Text>
      <Layout style={{ flexDirection: "row" }}>
        <List
          horizontal={false}
          data={newSetting}
          renderItem={({ item, index }) => (
            <CheckBox
              style={{ marginTop: 5 }}
              checked={item.visible}
              onChange={(nextChecked) => {
                item.visible = !nextChecked;
                refreshSettingPopup();
              }}
            >
              {links[index].label}
            </CheckBox>
          )}
        />
        <SettingBottom props={{ ...props, newSetting, refreshSettingPopup }} />
      </Layout>
    </Layout>
  );
};

const SettingBottom = ({ props }) => (
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
  headText: {
    flex: 1,
    textAlign: "center",
    padding: 2,
    fontWeight: "bold",
  },
  settingPopupBot: {
    justifyContent: "space-evenly",
  },
  settingPopupBotBtn: {
    margin: 5,
  },
});

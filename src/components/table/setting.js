import {
  Button,
  CheckBox,
  Layout,
  List,
  Modal,
  Text,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

export default ({ ...props }) => {
  let settingAnimation = null;
  const settingAnimationEnd = () =>
    settingAnimation.zoomOut(500).then((endState) => props.setVisible(false));

  return (
    <Modal
      visible={props.visible}
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

  const refreshSettingPopup = () => setRefresh(!refresh);

  return (
    <Layout>
      <Text style={styles.settingPopupHeadText}>
        Topic Column View Settings
      </Text>
      <List
        horizontal={true}
        data={newSetting}
        renderItem={({ item }) => (
          <CheckBox
            checked={item.visible}
            onChange={(nextChecked) => {
              item.visible = !nextChecked;
              refreshSettingPopup();
            }}
          >
            {item.link}
          </CheckBox>
        )}
      />
      <SettingPopupBottom
        props={{ ...props, newSetting, refreshSettingPopup }}
      />
    </Layout>
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

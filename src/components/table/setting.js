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
import { i18n } from "utils";

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
  const [newSetting, setNewSetting] = React.useState(_.cloneDeep(props.fields));

  const setField = (index, visible) => {
    let nextSetting = _.cloneDeep(newSetting);
    nextSetting[index].visible = visible;
    setNewSetting(nextSetting);
  };

  const submit = () => {
    props.setFields(newSetting);
  };

  return (
    <Layout style={{ padding: 5 }}>
      <Text style={styles.headText}>{i18n.t("setting.columnVisible")}</Text>
      <Layout style={{ flexDirection: "row" }}>
        <List
          horizontal={false}
          data={newSetting}
          renderItem={({ item, index }) => (
            <CheckBox
              style={{ marginVertical: 5 }}
              checked={item.visible}
              onChange={(nextChecked) => {
                setField(index, nextChecked);
              }}
            >
              {i18n.t(newSetting[index].label)}
            </CheckBox>
          )}
        />
        <SettingBottom
          props={{ ...props, newSetting, setNewSetting, submit }}
        />
      </Layout>
    </Layout>
  );
};

const SettingBottom = ({ props }) => (
  <Layout style={styles.settingPopupBot}>
    <SettingPopupBotBtn
      props={{
        text: "origin.default",
        onPress: () => {
          props.setNewSetting(props.fields);
        },
      }}
    />
    <SettingPopupBotBtn
      props={{
        text: "select.all",
        onPress: () => {
          let nextSetting = _.cloneDeep(props.newSetting);
          nextSetting.forEach((field) => (field.visible = true));
          props.setNewSetting(nextSetting);
        },
      }}
    />
    <SettingPopupBotBtn
      props={{
        text: "select.none",
        onPress: () => {
          let nextSetting = _.cloneDeep(props.newSetting);
          nextSetting.forEach((field) => (field.visible = false));
          props.setNewSetting(nextSetting);
        },
      }}
    />
    <SettingPopupBotBtn
      props={{
        text: "origin.submit",
        onPress: () => {
          props.submit();
          props.settingAnimationEnd();
        },
      }}
    />
    <SettingPopupBotBtn
      props={{
        text: "origin.cancel",
        onPress: props.settingAnimationEnd,
      }}
    />
  </Layout>
);

const SettingPopupBotBtn = ({ props }) => (
  <Button
    style={styles.settingPopupBotBtn}
    size="small"
    appearance="outline"
    onPress={props.onPress}
  >
    {i18n.t(props.text)}
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

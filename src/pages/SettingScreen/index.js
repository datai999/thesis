import { Divider, Layout, Toggle } from "@ui-kitten/components";
import TopNav from "components/screen/TopNav";
import React from "react";
import { StyleSheet, Text } from "react-native";
import i18n from "utils/i18n";

const SettingScreen = () => {
  const [english, setEnglish] = React.useState(i18n.languages == "en");

  return (
    <Layout>
      <TopNav title={"screen.setting"} />
      <Layout style={styles.row}>
        <Text>{i18n.t("origin.version")}:</Text>
        <Text>6.06.02</Text>
      </Layout>

      <Divider />

      <Layout style={styles.row}>
        <Text>{i18n.t("origin.language")}:</Text>
        <Toggle
          checked={english}
          onChange={(nextCheck) => {
            i18n
              .changeLanguage(nextCheck ? "en" : "vi")
              .then(() => setEnglish(nextCheck));
          }}
        >
          {english ? "EN" : "VI"}
        </Toggle>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: "40%",
    marginVertical: 10,
  },
});

export default SettingScreen;

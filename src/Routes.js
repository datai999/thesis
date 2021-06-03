import { Layout, Tab, TabView } from "@ui-kitten/components";
import ConstApi from "api/ConstApi";
import Props from "data/Props";
import React from "react";
import { StyleSheet } from "react-native";
import i18n from "utils/i18n";
import {
  BookOpenIcon,
  HomeIcon,
  PersonDoneIcon,
  SettingIcon,
} from "./components/Icons";
import HomeScreen from "./pages/HomeScreen";
import PersonScreen from "./pages/PersonScreen";
import SettingScreen from "./pages/SettingScreen";
import TopicScreen from "./pages/TopicScreen";

const Routes = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response = await ConstApi.getTypes();
        Object.keys(response).forEach((e) => {
          Props[e].arrValue = response[e];
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <Layout style={styles.container}>
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Tab title={i18n.t("page.home")} icon={HomeIcon}>
          <HomeScreen />
        </Tab>
        <Tab title={i18n.t("page.topic")} icon={BookOpenIcon}>
          <TopicScreen />
        </Tab>
        <Tab title={i18n.t("page.person")} icon={PersonDoneIcon}>
          <PersonScreen />
        </Tab>
        <Tab title={i18n.t("page.setting")} icon={SettingIcon}>
          <SettingScreen />
        </Tab>
      </TabView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Routes;

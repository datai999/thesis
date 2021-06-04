import { Layout, Popover, Tab, TabView } from "@ui-kitten/components";
import ConstApi from "api/ConstApi";
import { selectItems } from "components/Select";
import Props from "data/Props";
import React from "react";
import { StyleSheet } from "react-native";
import i18n from "utils/i18n";
import {
  BookOpenIcon,
  HomeIcon,
  PersonDoneIcon,
  SettingIcon
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

  const [personMenuVisible, setPersonMenuVisible] = React.useState(false);

  const renderPersonTab = () => (
    <Tab
      title={i18n.t("page.person.get")}
      icon={PersonDoneIcon}
      onFocus={() => setPersonMenuVisible(true)}
      style={{ flex: 1 }}
    >
      <PersonScreen />
    </Tab>
  );

  const personMenu = [
    i18n.t("page.person.teacher"),
    i18n.t("page.person.student"),
  ];

  const personMenuProps = {
    onPress: () => {
      setPersonMenuVisible(false);
      setSelectedIndex(2);
    },
  };

  return (
    <Layout style={styles.container}>
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);
        }}
      >
        <Tab title={i18n.t("page.home")} icon={HomeIcon}>
          <HomeScreen />
        </Tab>
        <Tab title={i18n.t("page.topic")} icon={BookOpenIcon}>
          <TopicScreen />
        </Tab>
        <Popover
          visible={personMenuVisible}
          anchor={renderPersonTab}
          fullWidth={true}
          onBackdropPress={() => setPersonMenuVisible(false)}
        >
          <Layout>{selectItems(personMenu, { ...personMenuProps })}</Layout>
        </Popover>
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

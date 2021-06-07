import { Layout, Popover, Tab, TabView, Text } from "@ui-kitten/components";
import ConstApi from "api/ConstApi";
import { selectItems } from "components/Select";
import Props from "data/Props";
import React from "react";
import { StyleSheet } from "react-native";
import i18n from "utils/i18n";
import {
  BookOpenIcon,
  CheckMarkSquare,
  HomeIcon,
  PersonDoneIcon,
  SettingIcon
} from "./components/Icons";
import EvaluateScreen from "./pages/EvaluateScreen";
import HomeScreen from "./pages/HomeScreen";
import PersonScreen from "./pages/PersonScreen";
import SettingScreen from "./pages/SettingScreen";
import TopicScreen from "./pages/TopicScreen";

const Routes = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(2);

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
  const [personScreenMode, setPersonScreenMode] = React.useState("student");

  const personMenu = [
    i18n.t("page.person.teacher"),
    i18n.t("page.person.student"),
  ];

  const personMenuProps = {
    callBack: (item) => setPersonScreenMode(item == 0 ? "teacher" : "student"),
    onPress: () => {
      setPersonMenuVisible(false);
      setSelectedIndex(3);
    },
  };

  const renderPersonMenu = (props) => {
    return (
      <Popover
        visible={personMenuVisible}
        fullWidth={true}
        onBackdropPress={() => setPersonMenuVisible(false)}
        anchor={() => (
          <Text
            style={{
              ...props.style,
              width: "70%",
              textAlign: "center",
            }}
          >
            {i18n.t("page.person.get")}
          </Text>
        )}
      >
        <Layout>{selectItems(personMenu, { ...personMenuProps })}</Layout>
      </Popover>
    );
  };

  return (
    <Layout style={styles.container}>
      <TabView
        selectedIndex={selectedIndex}
        // shouldLoadComponent={(index) => index === selectedIndex}
        onSelect={(index) => {
          if (index != 3) setSelectedIndex(index);
        }}
      >
        <Tab title={i18n.t("page.home")} icon={HomeIcon}>
          <HomeScreen />
        </Tab>
        <Tab title={i18n.t("page.topic")} icon={BookOpenIcon}>
          <TopicScreen />
        </Tab>
        <Tab title={i18n.t("page.evaluate")} icon={CheckMarkSquare}>
          <EvaluateScreen />
        </Tab>
        <Tab
          title={renderPersonMenu}
          icon={PersonDoneIcon}
          onFocus={() => setPersonMenuVisible(true)}
        >
          <PersonScreen mode={personScreenMode} />
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

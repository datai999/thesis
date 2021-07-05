import {
  Divider,
  Drawer,
  DrawerGroup,
  DrawerItem,
  Layout,
  Text,
} from "@ui-kitten/components";
import {
  BookOpenIcon,
  CheckMarkSquare,
  HomeIcon,
  PantoneIcon,
  PeopleIcon,
} from "components/icons";
import * as React from "react";
import { StyleSheet } from "react-native";
import env from "src/env";
import { langHolder } from "utils";
import i18n from "utils/i18n";

const LeftMenu = ({ navigation, state, callback }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [lang, setLang] = React.useState(i18n.languages);

  React.useEffect(() => {
    langHolder.listeners.push(setLang);
  }, [lang]);

  return (
    <Layout style={styles.container}>
      <Drawer
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);

          if (index.row == 3 && !index.section) return;

          if (index.section == 3) {
            callback(index.row == 0 ? "teacher" : "student");
          }

          navigation.navigate(state.routeNames[index.section ?? index.row]);
        }}
      >
        <DrawerItem title={i18n.t("screen.home")} accessoryLeft={HomeIcon} />
        <DrawerItem
          title={i18n.t("screen.topic")}
          accessoryLeft={BookOpenIcon}
        />
        <DrawerItem
          title={i18n.t("screen.evaluate")}
          accessoryLeft={CheckMarkSquare}
        />
        <DrawerGroup title={i18n.t("screen.person")} accessoryLeft={PeopleIcon}>
          <DrawerItem
            title={i18n.t("screen.teacher")}
            accessoryLeft={PeopleIcon}
            style={{ marginLeft: 15 }}
          />
          <DrawerItem
            title={i18n.t("screen.student")}
            accessoryLeft={PeopleIcon}
            style={{ marginLeft: 15 }}
          />
        </DrawerGroup>
        <DrawerItem
          title={i18n.t("screen.criterion")}
          accessoryLeft={PantoneIcon}
        />
        {/* <DrawerItem
          title={i18n.t("screen.setting")}
          accessoryLeft={SettingIcon}
        /> */}
      </Drawer>
      <Layout>
        <Divider />
        <Text style={styles.versionText}>
          {i18n.t("origin.version")}: {env.version}
        </Text>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  versionText: {
    margin: 5,
    textAlign: "center",
  },
});

export default LeftMenu;

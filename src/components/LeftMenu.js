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
import { i18n, langHolder } from "utils";

const LeftMenu = ({ navigation, route }) => {
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

          if (index.section) {
            if (index.section == 3) {
              navigation.navigate(route[index.section].name, {
                screen: route[index.section].name,
                params: { mode: index.row == 0 ? "teacher" : "student" },
              });
              return;
            }

            navigation.navigate(route[index.section].name, {
              screen: route[index.section].component[index.row].name,
            });
          }

          if (index.row == 3 || route[index.row].component.length > 1) return;

          navigation.navigate(route[index.section ?? index.row].name);
        }}
      >
        <DrawerItem title={i18n.t("screen.home")} accessoryLeft={HomeIcon} />
        <DrawerGroup
          title={i18n.t("screen.topic")}
          accessoryLeft={BookOpenIcon}
        >
          <DrawerItem
            title={i18n.t("screen.topic")}
            accessoryLeft={BookOpenIcon}
            style={{ marginLeft: 15 }}
          />
          <DrawerItem
            title={i18n.t("topic.create")}
            accessoryLeft={BookOpenIcon}
            style={{ marginLeft: 15 }}
          />
        </DrawerGroup>
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

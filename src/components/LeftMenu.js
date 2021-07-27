import {
  Button,
  Divider,
  Drawer,
  DrawerGroup,
  DrawerItem,
  Layout,
  Text,
} from "@ui-kitten/components";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookOpenIcon,
  CheckMarkSquare,
  HomeIcon,
  PantoneIcon,
  PeopleIcon,
} from "components/icons";
import _ from "lodash";
import * as React from "react";
import { StyleSheet } from "react-native";
import { languageService, navService } from "service";
import env from "src/env";
import i18n from "utils/i18n";

const LeftMenu = ({ navigation, route }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [lang, setLang] = React.useState(i18n.languages);

  React.useEffect(() => {
    languageService.onNextState(setLang);
  }, [lang]);

  return (
    <Layout style={styles.container}>
      <Drawer
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);

          if (index.section) {
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

const commonProps = {
  appearance: "basic",
  status: "ghost",
  style: { justifyContent: "flex-start", flexDirection: "row" },
};

const screenToSelected = (screen) => {
  let subScreen;
  if (screen.component.length > 1) {
    subScreen = screen.component.map((x) => x.name);
  }
  return {
    name: screen.name,
    active: false,
    subScreen: subScreen,
  };
};

const DrawerMenu = ({ navigation, route }) => {
  const [selected, setSelected] = React.useState(route.map(screenToSelected));
  const [currentScreen, setCurrenScreen] = React.useState();
  const [subSelected, setSubSelected] = React.useState();

  const navigationAction = ({ screen, subScreen }) => {
    if (
      selected.filter((screenSelected) => screenSelected.name == screen)
        .length < 1
    ) {
      navigation.navigate(screen, subScreen);
      return;
    }

    let nextSelected = _.cloneDeep(selected);

    let screenIndex = selected
      .map((screenState) => screenState.name)
      .indexOf(screen);

    if (nextSelected[screenIndex].subScreen) {
      nextSelected[screenIndex].active = true;

      let subScreenIndex = subScreen
        ? nextSelected[screenIndex].subScreen.indexOf(subScreen.screen)
        : 0;

      setCurrenScreen(screenIndex);
      setSubSelected(subScreenIndex);
      setSelected(nextSelected);

      navigation.navigate(screen, subScreen);
    }
  };

  React.useEffect(() => {
    setCurrenScreen(1);
    setSubSelected(0);
    let nextData = _.cloneDeep(selected);
    nextData[1].active = true;
    setSelected(nextData);

    navService.onNextState(navigationAction);
  }, []);

  const groupPress = (groupIndex) => {
    let nextData = _.cloneDeep(selected);
    nextData[groupIndex].active = !selected[groupIndex].active;
    setSelected(nextData);

    if (nextData[groupIndex].active && !nextData[groupIndex].subScreen) {
      setSubSelected(null);
      setCurrenScreen(groupIndex);
      groupIndex == 0
        ? navigation.navigate(nextData[groupIndex].name, {
            screen: "home",
            params: { nonLogin: true },
          })
        : navigation.navigate(nextData[groupIndex].name);
    }
  };

  const itemPress = (groupIndex, index) => {
    let nextData = _.cloneDeep(selected);
    setCurrenScreen(groupIndex);
    setSubSelected(index);
    setSelected(nextData);
    navigation.navigate(nextData[groupIndex].name, {
      screen: nextData[groupIndex].subScreen[index],
    });
  };

  return (
    <Layout>
      <Text style={styles.versionText} category="s1">
        {i18n.t("origin.version")}: {env.version}
      </Text>
      {route.map((screen, groupIndex) => (
        <Layout key={groupIndex}>
          <Divider />
          <Button
            {...commonProps}
            appearance={currentScreen == groupIndex ? "primary" : "basic"}
            accessoryLeft={screen.icon}
            accessoryRight={(props) => {
              if (!selected[groupIndex].subScreen) return null;
              return selected[groupIndex].active ? (
                <ArrowUpIcon {...props} />
              ) : (
                <ArrowDownIcon {...props} />
              );
            }}
            onPress={() => groupPress(groupIndex)}
          >
            {i18n.t("screen." + screen.name)}
          </Button>
          {selected[groupIndex].active &&
            screen.component.length > 1 &&
            screen.component.map((subScreen, subIndex) => (
              <Button
                key={subIndex}
                {...commonProps}
                appearance={
                  currentScreen == groupIndex && subIndex == subSelected
                    ? "primary"
                    : "basic"
                }
                style={[commonProps.style, { marginLeft: 30 }]}
                onPress={() => itemPress(groupIndex, subIndex)}
              >
                {i18n.t("screen." + subScreen.name)}
              </Button>
            ))}
        </Layout>
      ))}
    </Layout>
  );
};

const styles = StyleSheet.create({
  versionText: {
    margin: 5,
    textAlign: "center",
  },
});

export default DrawerMenu;

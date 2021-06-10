import * as eva from "@eva-design/eva";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  ApplicationProvider,
  Drawer,
  DrawerItem,
  IconRegistry,
  IndexPath
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  BookOpenIcon,
  CheckMarkSquare,
  HomeIcon,
  PantoneIcon,
  PeopleIcon,
  SettingIcon
} from "components/Icons";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CriterionScreen from "./src//pages/CriterionScreen";
import EvaluateScreen from "./src//pages/EvaluateScreen";
import HomeScreen from "./src/pages/HomeScreen";
import PersonScreen from "./src/pages/PersonScreen";
import SettingScreen from "./src/pages/SettingScreen";
import TopicScreen from "./src/pages/TopicScreen";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerContent = ({ navigation, state }) => {
  return (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={(index) => {
        if (index.row == 0) return;
        navigation.navigate(state.routeNames[index.row]);
      }}
    >
      <DrawerItem title="home" accessoryLeft={HomeIcon} />
      <DrawerItem title="topic" accessoryLeft={BookOpenIcon} />
      <DrawerItem title="evaluate" accessoryLeft={CheckMarkSquare} />
      <DrawerItem title="teacher" accessoryLeft={PeopleIcon} />
      <DrawerItem title="student" accessoryLeft={PeopleIcon} />
      <DrawerItem title="criterion" accessoryLeft={PantoneIcon} />
      <DrawerItem title="setting" accessoryLeft={SettingIcon} />
    </Drawer>
  );
};

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Navigator
              initialRouteName="topic"
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Screen name="home" component={HomeScreen} />
              <Screen name="topic" component={TopicScreen} />
              <Screen name="evaluate" component={EvaluateScreen} />
              <Screen name="teacher" component={PersonScreen} />
              <Screen name="student" component={PersonScreen} />
              <Screen name="criterion" component={CriterionScreen} />
              <Screen name="setting" component={SettingScreen} />
            </Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}

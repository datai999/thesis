import * as eva from "@eva-design/eva";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  ApplicationProvider,
  Drawer,
  DrawerGroup,
  DrawerItem,
  IconRegistry
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

const DrawerContent = ({ navigation, state, callback }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={(index) => {
        if (index.row == 3) {
          return;
        }
        navigation.navigate(state.routeNames[index.row]);
      }}
      onSelect={(index) => {
        if (index.row == 0 && !index.section) return;
        if (index.row == 3 && !index.section) return;
        setSelectedIndex(index);

        if (index.section == 3) {
          callback(index.row == 0 ? "teacher" : "student");
        }

        navigation.navigate(state.routeNames[index.section ?? index.row]);
      }}
    >
      <DrawerItem title="home" accessoryLeft={HomeIcon} />
      <DrawerItem title="topic" accessoryLeft={BookOpenIcon} />
      <DrawerItem title="evaluate" accessoryLeft={CheckMarkSquare} />
      <DrawerGroup title="person" accessoryLeft={PeopleIcon}>
        <DrawerItem title="teacher" accessoryLeft={PeopleIcon} />
        <DrawerItem title="student" accessoryLeft={PeopleIcon} />
      </DrawerGroup>
      <DrawerItem title="criterion" accessoryLeft={PantoneIcon} />
      <DrawerItem title="setting" accessoryLeft={SettingIcon} />
    </Drawer>
  );
};

export default function App() {
  const [mode, setMode] = React.useState();

  const renderPersonScreen = () => {
    return <PersonScreen mode={mode} />;
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Navigator
              initialRouteName="topic"
              drawerContent={(props) => (
                <DrawerContent {...props} callback={setMode} />
              )}
            >
              <Screen name="home" component={HomeScreen} />
              <Screen name="topic" component={TopicScreen} />
              <Screen name="evaluate" component={EvaluateScreen} />
              <Screen name="person" component={renderPersonScreen} />
              <Screen name="criterion" component={CriterionScreen} />
              <Screen name="setting" component={SettingScreen} />
            </Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}

import * as eva from "@eva-design/eva";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ConstApi } from "api/br";
import LeftMenu from "components/LeftMenu";
import TopNav from "components/screen/TopNav";
import Props from "data/Props";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavHolder from "utils/nav";
import CriterionScreen from "./src//pages/CriterionScreen";
import EvaluateScreen from "./src//pages/EvaluateScreen";
import HomeScreen from "./src/pages/HomeScreen";
import PersonScreen from "./src/pages/PersonScreen";
import SettingScreen from "./src/pages/SettingScreen";
import TopicScreen from "./src/pages/TopicScreen";

const { Navigator, Screen } = createDrawerNavigator();

const fetch = () => {
  ConstApi.getTypes().then((response) => {
    Object.keys(response).forEach((e) => {
      if (Props[e]) {
        Props[e].arrValue = response[e];
      }
    });
  });
};

export default function App() {
  const [mode, setMode] = React.useState();

  function renderPersonScreen() {
    return <PersonScreen mode={mode} />;
  }

  React.useEffect(() => {
    NavHolder.setPersonMode = setMode;
    fetch();
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <TopNav />
            <Navigator
              initialRouteName="home"
              drawerContent={(props) => {
                NavHolder.setNav(props.navigation);
                return <LeftMenu {...props} callback={setMode} />;
              }}
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

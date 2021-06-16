import * as eva from "@eva-design/eva";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ConstApi } from "api/br";
import LeftMenu from "components/LeftMenu";
import TopNav from "components/screen/TopNav";
import constData from "data/constData";
import _ from "lodash";
import * as React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import env from "src/env";
import NavHolder from "utils/nav";
import EvaluateScreen from "./src//pages/EvaluateScreen";
import LoginScreen from "./src//pages/LoginScreen";
import HomeScreen from "./src/pages/HomeScreen";
import PersonScreen from "./src/pages/PersonScreen";
import TopicScreen from "./src/pages/TopicScreen";

const { Navigator, Screen } = createDrawerNavigator();

const fetch = () => {
  ConstApi.getTypes().then((response) => {
    Object.keys(response).forEach((e) => {
      _.set(constData, e + ".arrValue", response[e]);
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
          <StatusBar />
          <NavigationContainer>
            <TopNav />
            <Navigator
              initialRouteName={env.initialRouteName}
              drawerContent={(props) => {
                NavHolder.setNav(props.navigation);
                return <LeftMenu {...props} callback={setMode} />;
              }}
            >
              <Screen name="home" component={HomeScreen} />
              <Screen name="topic" component={TopicScreen} />
              <Screen name="evaluate" component={EvaluateScreen} />
              <Screen name="person" component={renderPersonScreen} />
              {/* <Screen name="setting" component={SettingScreen} /> */}
              <Screen name="login" component={LoginScreen} />
            </Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@ui-kitten/components";
import LeftMenu from "components/LeftMenu";
import TopNav from "components/screen/TopNav";
import * as React from "react";
import { Dimensions, ImageBackground } from "react-native";
import { navService } from "utils";
import { dimensionService } from "utils/service";
import {
  CriterionScreen,
  EvaluateScreen,
  LoginScreen,
  PersonScreen,
  TopicCreateScreen,
  TopicScreen,
} from "./pages";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const arrRoute = [
  {
    name: "home",
    component: [{ name: "home", component: LoginScreen }],
  },
  {
    name: "topic",
    component: [
      { name: "topic", component: TopicScreen },
      { name: "topicCreate", component: TopicCreateScreen },
    ],
  },
  {
    name: "evaluate",
    component: [{ name: "evaluate", component: EvaluateScreen }],
  },
  {
    name: "person",
    component: [{ name: "person", component: PersonScreen }],
  },
  {
    name: "criterion",
    component: [{ name: "criterion", component: CriterionScreen }],
  },
];

const objectRoute = arrRoute.reduce((result, item) => {
  result[item.name] = item.component;
  return result;
}, {});

const Route = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="login"
        drawerContent={(props) => {
          navService.nav = props.navigation;
          return <LeftMenu {...props} route={arrRoute} />;
        }}
        sceneContainerStyle={{
          paddingTop: 1,
          backgroundColor: useTheme()["color-primary-default"],
        }}
      >
        <Drawer.Screen name="home" component={renderSubMenu} />
        <Drawer.Screen name="topic" component={renderSubMenu} />
        <Drawer.Screen name="evaluate" component={renderSubMenu} />
        <Drawer.Screen name="person" component={renderSubMenu} />
        <Drawer.Screen name="criterion" component={renderSubMenu} />
        <Drawer.Screen name="login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const renderSubMenu = ({ ...drawerProps }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => {
          navService.stack = { ...props };
          return <TopNav {...props} />;
        },
      }}
    >
      {objectRoute[drawerProps.route.name].map((e) => {
        return (
          <Stack.Screen key={e.name} name={e.name}>
            {(props) => <WrapComponent component={e.component} {...props} />}
          </Stack.Screen>
        );
      })}
    </Stack.Navigator>
  );
};

const WrapComponent = ({ component, ...props }) => {
  React.useEffect(() => {
    Dimensions.addEventListener("change", (e) => {
      dimensionService.notify(e.window);
    });
    dimensionService.notify(Dimensions.get("window"));
  }, []);

  return (
    <ImageBackground
      source={require("assets/img/cse2d.png")}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 1 }}
    >
      {component(props)}
    </ImageBackground>
  );
};

export default Route;

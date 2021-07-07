import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LeftMenu from "components/LeftMenu";
import TopNav from "components/screen/TopNav";
import * as React from "react";
import { navService } from "utils";
import {
  CriterionScreen,
  EvaluateScreen,
  HomeScreen,
  LoginScreen,
  TopicScreen,
} from "./pages";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const nameScreenMap = {
  login: LoginScreen,
  home: HomeScreen,
  topic: TopicScreen,
  evaluate: EvaluateScreen,
  criterion: CriterionScreen,
};

const Route = () => {
  const renderDrawer = ({ ...stackProps }) => {
    return (
      <Stack.Navigator
        screenOptions={{
          header: (props) => {
            navService.stackNav = props.navigation;
            return <TopNav {...props} />;
          },
        }}
      >
        <Stack.Screen
          name={stackProps.route.name}
          component={nameScreenMap[stackProps.route.name]}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="login"
        drawerContent={(props) => {
          navService.nav = props.navigation;
          return <LeftMenu {...props} />;
        }}
      >
        <Drawer.Screen name="home" component={renderDrawer} />
        <Drawer.Screen name="topic" component={renderDrawer} />
        <Drawer.Screen name="evaluate" component={renderDrawer} />
        <Drawer.Screen name="criterion" component={renderDrawer} />
        <Drawer.Screen name="login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Route;

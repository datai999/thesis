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
      <Drawer.Navigator
        drawerContent={(props) => {
          navService.drawerNav = props.navigation;
          return <LeftMenu {...props} />;
        }}
      >
        <Drawer.Screen
          name={stackProps.route.name}
          component={nameScreenMap[stackProps.route.name]}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          header: (props) => {
            navService.nav = props.navigation;
            return <TopNav {...props} />;
          },
        }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={renderDrawer} />
        <Stack.Screen name="topic" component={renderDrawer} />
        <Stack.Screen name="evaluate" component={renderDrawer} />
        <Stack.Screen name="criterion" component={renderDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

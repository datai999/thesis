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
  PersonScreen,
  TopicCreateScreen,
  TopicScreen,
} from "./pages";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const arrRoute = [
  {
    name: "home",
    component: [{ name: "home", component: HomeScreen }],
  },
  {
    name: "topic",
    component: [
      { name: "topicCreate", component: TopicCreateScreen },
      { name: "topic", component: TopicScreen },
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
            <Stack.Screen key={e.name} name={e.name} component={e.component} />
          );
        })}
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="login"
        drawerContent={(props) => {
          navService.nav = props.navigation;
          return <LeftMenu {...props} route={arrRoute} />;
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

export default Route;

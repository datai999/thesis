import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TopNav from "components/screen/TopNav";
import * as React from "react";
import EvaluateScreen from ".//pages/EvaluateScreen";
import CriterionScreen from "./pages/CriterionScreen";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import TopicScreen from "./pages/TopicScreen";

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: (props) => <TopNav {...props} /> }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="topic" component={TopicScreen} />
        <Stack.Screen name="evaluate" component={EvaluateScreen} />
        <Stack.Screen name="criterion" component={CriterionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;

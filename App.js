import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Icon,
  IconRegistry,
  TopNavigation,
  TopNavigationAction
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/Routes";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const SettingsIcon = (props) => <Icon {...props} name="settings" />;

const renderSettingsAction = () => <TopNavigationAction icon={SettingsIcon} />;

const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <TopNavigation
            title="Eva Application"
            accessoryLeft={renderBackAction}
            accessoryRight={renderSettingsAction}
          />
          <Routes />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;

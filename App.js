import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  TopNavigation,
  TopNavigationAction
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { MenuIcon, SettingIcon } from "components/Icons";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/Routes";

const renderSettingsAction = () => <TopNavigationAction icon={SettingIcon} />;

const renderMenuAction = () => <TopNavigationAction icon={MenuIcon} />;

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <TopNavigation
            title="Thesis Application"
            alignment="center"
            accessoryLeft={renderMenuAction}
            accessoryRight={renderSettingsAction}
          />
          <Routes />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;

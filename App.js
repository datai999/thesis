import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ConstApi } from "api/br";
import constData from "data/constData";
import { getLocalStorage } from "data/localStorage";
import _ from "lodash";
import * as React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Route from "src/route";
import { default as theme } from "./theme.json";

const fetch = () => {
  ConstApi.getTypes().then((response) => {
    Object.keys(response).forEach((e) => {
      _.set(constData, e + ".arrValue", response[e]);
    });
  });
};

export default function App() {
  React.useEffect(() => {
    getLocalStorage();
    fetch();
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <SafeAreaProvider>
          <StatusBar />
          <Route />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}

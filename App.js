import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Modal,
  Spinner,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ConstApi } from "api/br";
import constData from "data/constData";
import { getLocalStorage } from "data/localStorage";
import _ from "lodash";
import * as React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { loadingService } from "service";
import Route from "src/route";
import CustomTheme from "./theme.json";

const fetch = () => {
  loadingService.start();
  ConstApi.getTypes().then((response) => {
    loadingService.end();
    Object.keys(response).forEach((e) => {
      _.set(constData, e + ".arrValue", response[e]);
    });
  });
};

export default function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    loadingService.start = () => setLoading(true);
    loadingService.end = () => setLoading(false);
    getLocalStorage();
    fetch();
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...CustomTheme }}>
        <SafeAreaProvider>
          <StatusBar />
          <Modal
            visible={loading}
            backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <Spinner />
          </Modal>
          {!loading && <Route />}
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}

import { IndexPath, Layout, Menu, MenuItem, Text } from "@ui-kitten/components";
import ConstApi from "api/ConstApi";
import Props from "data/Props";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  BookOpenIcon,
  HomeIcon,
  MenuIcon,
  PersonDoneIcon,
  SettingIcon,
} from "./components/Icons";
import TopicScreen from "./pages/TopicScreen";

const Routes = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(2));
  const [menuSize] = React.useState(150);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await ConstApi.getTypes();
        Object.keys(response).forEach((e) => {
          Props[e].arrValue = response[e];
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const selectScreen = () => {
    switch (selectedIndex.row) {
      case 0:
        break;
      case 1:
        break;
      default:
        return <TopicScreen />;
    }
  };

  return (
    <Layout style={styles.container}>
      <Layout style={{ width: menuSize, backgroundColor: "#f2f6ff" }}>
        <Menu
          style={styles.menu}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <MenuItem title="Extend menu" accessoryLeft={MenuIcon} />
          <MenuItem title="Home" accessoryLeft={HomeIcon} />
          <MenuItem title="Topic" accessoryLeft={BookOpenIcon} />
          <MenuItem title="Assign" accessoryLeft={PersonDoneIcon} />
          <MenuItem title="Setting" accessoryLeft={SettingIcon} />
        </Menu>
        <Text style={{ textAlign: "center", margin: 5 }}>Version:5.16.22</Text>
      </Layout>

      <Layout style={styles.content}>{selectScreen()}</Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  menu: {
    height: "100%",
  },
  content: {
    flex: 1,
  },
  rightMenu: {
    backgroundColor: "red",
    width: "1%",
  },
});

export default Routes;

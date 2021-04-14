import React from "react";
import { StyleSheet, View } from "react-native";
import { IndexPath, Menu, MenuItem } from "@ui-kitten/components";
import {
  MenuIcon,
  HomeIcon,
  BookOpenIcon,
  PersonDoneIcon,
  SettingIcon,
} from "../components/icons";

import HomeScreen from "../pages/HomeScreen";
import TopicScreen from "../pages/TopicScreen";

const Routes = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(2));
  const [menuSize, setMenuSize] = React.useState(150);

  const selectScreen = () => {
    switch (selectedIndex.row) {
      case 0:
        break;
      case 1:
        return <HomeScreen />;
      default:
      case 2:
        return <TopicScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: menuSize }}>
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
      </View>

      <View style={styles.content}>{selectScreen()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  menu: {
    borderWidth: 1,
    height: "100%",
  },
  content: {
    flex: 1,
  },
});

export default Routes;

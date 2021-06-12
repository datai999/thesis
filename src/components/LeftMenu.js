import { Drawer, DrawerGroup, DrawerItem } from "@ui-kitten/components";
import {
  BookOpenIcon,
  CheckMarkSquare,
  HomeIcon,
  PantoneIcon,
  PeopleIcon,
  SettingIcon
} from "components/Icons";
import * as React from "react";
import i18n from "utils/i18n";

const LeftMenu = ({ navigation, state, callback }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={(index) => {
        if (index.row == 3) {
          return;
        }
        navigation.navigate(state.routeNames[index.row]);
      }}
      onSelect={(index) => {
        if (index.row == 0 && !index.section) return;
        if (index.row == 3 && !index.section) return;
        setSelectedIndex(index);

        if (index.section == 3) {
          callback(index.row == 0 ? "teacher" : "student");
        }

        navigation.navigate(state.routeNames[index.section ?? index.row]);
      }}
    >
      <DrawerItem title={i18n.t("screen.home")} accessoryLeft={HomeIcon} />
      <DrawerItem title={i18n.t("screen.topic")} accessoryLeft={BookOpenIcon} />
      <DrawerItem
        title={i18n.t("screen.evaluate")}
        accessoryLeft={CheckMarkSquare}
      />
      <DrawerGroup title={i18n.t("screen.person")} accessoryLeft={PeopleIcon}>
        <DrawerItem
          title={i18n.t("screen.teacher")}
          accessoryLeft={PeopleIcon}
        />
        <DrawerItem
          title={i18n.t("screen.student")}
          accessoryLeft={PeopleIcon}
        />
      </DrawerGroup>
      <DrawerItem
        title={i18n.t("screen.criterion")}
        accessoryLeft={PantoneIcon}
      />
      <DrawerItem
        title={i18n.t("screen.setting")}
        accessoryLeft={SettingIcon}
      />
    </Drawer>
  );
};

export default LeftMenu;

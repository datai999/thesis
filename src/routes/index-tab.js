import React from "react";
import { Tab, TabView, Text, Icon } from "@ui-kitten/components";

import HomeScreen from "../pages/HomeScreen";
import TopicScreen from "../pages/TopicScreen";

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const BookOpenIcon = (props) => <Icon {...props} name="book-open-outline" />;
const PersonDoneIcon = (props) => (
  <Icon {...props} name="person-done-outline" />
);
const SettingIcon = (props) => <Icon {...props} name="settings-outline" />;

const Routes = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const shouldLoadComponent = (index) => index === selectedIndex;

  return (
    <TabView
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Tab title="Home" icon={HomeIcon}>
        <HomeScreen />
      </Tab>
      <Tab title="Topic" icon={BookOpenIcon}>
        <TopicScreen />
      </Tab>
      <Tab title="Assign" icon={PersonDoneIcon}>
        <Text category="h5">Assign</Text>
      </Tab>
      <Tab title="Setting" icon={SettingIcon}>
        <Text category="h5">Setting</Text>
      </Tab>
    </TabView>
  );
};

export default Routes;

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Icon, Input, Divider } from "@ui-kitten/components";

const SearchIcon = (props) => <Icon {...props} name="search-outline" />;

const ThesisScreen = () => {
  const [value, setValue] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.thesisTopTab}>
        <Input
          value={value}
          placeholder="Search"
          accessoryRight={SearchIcon}
          onChangeText={(nextValue) => setValue(nextValue)}
        />
      </View>

      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  thesisTopTab: {
    margin: 10,
    marginLeft: Dimensions.get("window").width / 3,
    marginRight: Dimensions.get("window").width / 3,
  },
});

export default ThesisScreen;

import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Text,
  Button,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";

import { ArrowBackIcon, ArrowForwardIcon } from "../../../components/icons";

const data = [25, 50, 100];

const TopicBottom = ({ total, currentPage, totalPage }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];

  const renderOption = (title) => <SelectItem title={title} />;

  return (
    <View style={styles.container}>
      <Text>Total: {total}</Text>
      <View style={styles.page}>
        <Button
          status="primary"
          appearance="ghost"
          accessoryLeft={ArrowBackIcon}
        ></Button>
        <Text>
          Page:{currentPage}/{totalPage}
        </Text>
        <Button
          status="primary"
          appearance="ghost"
          accessoryRight={ArrowForwardIcon}
        ></Button>
      </View>

      <View style={styles.record}>
        <Text>Record</Text>
        <Select
          style={styles.select}
          size="small"
          value={displayValue}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          {data.map(renderOption)}
        </Select>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  page: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  record: {
    flexDirection: "row",
    alignItems: "center",
  },
  select: {
    marginLeft: 5,
    width: 100,
  },
});

export default TopicBottom;

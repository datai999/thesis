import {
  Button,
  IndexPath,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { ArrowBackIcon, ArrowForwardIcon } from "components/Icons";
import React from "react";
import { StyleSheet, View } from "react-native";

const sizeRank = [5, 10, 20, 30, 50, 100];

const renderOption = (title) => <SelectItem key={title} title={title} />;

const TopicBottom = ({ page, callBack }) => {
  const [selectedSize, setSelectedSize] = React.useState(new IndexPath(0));

  const fetchPage = (numberChange, newSize) => {
    let nextPage = {
      number: page.number + numberChange,
      size: newSize,
    };
    callBack(nextPage);
  };

  return (
    <View style={styles.container}>
      <Text>Total: {page.totalElements}</Text>
      <View style={styles.page}>
        <Button
          status="primary"
          appearance="ghost"
          accessoryLeft={ArrowBackIcon}
          onPress={() => fetchPage(-1, 0)}
        ></Button>
        <Text>
          Page:{page.number + 1}/{page.totalPages}
        </Text>
        <Button
          status="primary"
          appearance="ghost"
          accessoryRight={ArrowForwardIcon}
          onPress={() => fetchPage(1, 0)}
        ></Button>
      </View>

      <View style={styles.record}>
        <Text>Record</Text>
        <Select
          style={styles.select}
          size="small"
          value={sizeRank[selectedSize.row]}
          selectedIndex={selectedSize}
          onSelect={(index) => {
            setSelectedSize(index);
            fetchPage(0, sizeRank[index - 1]);
          }}
        >
          {sizeRank.map(renderOption)}
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

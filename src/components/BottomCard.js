import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "@ui-kitten/components";

const BottomCard = ({ animationEnd, form, submit }) => {
  return (
    <Layout style={styles.popupBot}>
      <Button
        style={styles.popupBotBtn}
        onPress={() => {
          animationEnd();
          submit();
        }}
      >
        Submit
      </Button>
      <Button style={styles.popupBotBtn} onPress={animationEnd}>
        Cancel
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  popupBot: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  popupBotBtn: {
    margin: 5,
  },
});

export default BottomCard;

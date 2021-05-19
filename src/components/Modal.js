import { Button, Layout, Modal, Text } from "@ui-kitten/components";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import i18n from "utils/i18n";

const MyModal = ({ visible, header, submit, cancel, body }) => {
  const animationRef = React.useRef();

  const animationEnd = () =>
    animationRef.current.zoomOut(500).then((endState) => cancel());

  return (
    <Modal
      style={styles.modal}
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={animationEnd}
    >
      <Animatable.View
        style={{ flex: 1, backgroundColor: "white" }}
        animation="zoomIn"
        ref={animationRef}
      >
        <Text style={styles.headerText}>{i18n.t(header)}</Text>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
          {body()}
        </ScrollView>
        <BottomCard animationEnd={animationEnd} submit={submit} />
      </Animatable.View>
    </Modal>
  );
};

const BottomCard = ({ animationEnd, submit }) => {
  return (
    <Layout style={styles.popupBot}>
      <Button
        style={styles.popupBotBtn}
        onPress={async () => {
          if (await submit()) animationEnd();
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
  modal: {
    width: "50%",
    maxHeight: "90%",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  headerText: {
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  popupBot: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  popupBotBtn: {
    margin: 5,
  },
});

export default MyModal;

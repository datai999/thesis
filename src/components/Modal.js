import { Button, Layout, Modal } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const MyModal = ({ visible, submit, cancel, body }) => {
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
        {body()}
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
    maxWidth: "100%",
    maxHeight: "100%",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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

import { Button, Card, Layout, Modal, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

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
        style={{ flex: 1 }}
        animation="zoomIn"
        ref={animationRef}
      >
        <Card
          style={styles.card}
          header={() => <Text style={styles.headerText}>{header}</Text>}
          footer={() => (
            <BottomCard animationEnd={animationEnd} submit={submit} />
          )}
        >
          {body()}
        </Card>
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
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    flex: 1,
    justifyContent: "space-between",
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

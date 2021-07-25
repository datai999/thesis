import { Button, Layout, Modal } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import i18n from "utils/i18n";

const MyModal = ({ visible, submit, cancel, body, bottomExceed }) => {
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
        <BottomCard
          animationEnd={animationEnd}
          submit={submit}
          bottomExceed={bottomExceed}
        />
      </Animatable.View>
    </Modal>
  );
};

const BottomCard = ({ animationEnd, submit, bottomExceed }) => {
  return (
    <Layout style={styles.popupBot}>
      <Button
        style={styles.popupBotBtn}
        onPress={async () => {
          if (await submit()) animationEnd();
        }}
      >
        {i18n.t("origin.submit")}
      </Button>
      {bottomExceed && bottomExceed(animationEnd)}
      <Button style={styles.popupBotBtn} onPress={animationEnd}>
        {i18n.t("origin.cancel")}
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

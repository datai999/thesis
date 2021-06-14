import { Button, Layout, Text } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import React from "react";
import { StyleSheet } from "react-native";
import { createProps } from "utils";
import i18n from "utils/i18n";

const propStore = createProps();
const emailTail = "@hcmut.edu.vn";

const HomeScreen = () => {
  const [email, setEmail] = React.useState("");

  const emailProps = {
    ...propStore.input("login.email"),
    style: styles.email,
    accessoryRight: () => <Text>{emailTail}</Text>,
    callBack: (nextValue) => setEmail(nextValue),
  };

  function login() {
    console.log(email + emailTail);
  }

  return (
    <Layout style={styles.container}>
      <MyInput {...emailProps} />
      <Button onPress={login}>{i18n.t("origin.login")}</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 200,
  },
  email: {
    margin: 15,
  },
});

export default HomeScreen;

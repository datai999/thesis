import { Button, Layout, Text } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import React from "react";
import { StyleSheet } from "react-native";
import { createProps } from "utils";
import i18n from "utils/i18n";
import { user } from "utils/user";

const propStore = createProps();
const emailTail = "@hcmut.edu.vn";

function getHeadMail(fullMail) {
  if (!fullMail) return "";
  let mailLength = fullMail.length;
  return fullMail.substring(0, mailLength - emailTail.length);
}

const HomeScreen = () => {
  const [email, setEmail] = React.useState(
    getHeadMail(window.localStorage.getItem("emailForSignIn"))
  );

  React.useEffect(() => user.loginWithEmailLink(email + emailTail), []);

  const emailProps = {
    ...propStore.input("login.email"),
    value: email,
    style: styles.email,
    accessoryRight: () => <Text>{emailTail}</Text>,
    callBack: (nextValue) => setEmail(nextValue),
  };

  return (
    <Layout style={styles.container}>
      <MyInput {...emailProps} />
      <Button onPress={() => user.sendLoginEmail(email + emailTail)}>
        {i18n.t("origin.login")}
      </Button>
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

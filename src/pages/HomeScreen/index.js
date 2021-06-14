import { Button, Layout, Text } from "@ui-kitten/components";
import TeacherApi from "api/person/TeacherApi";
import { MyInput } from "components/Input";
import React from "react";
import { StyleSheet } from "react-native";
import { createProps } from "utils";
import i18n from "utils/i18n";
import { navHolder } from "utils/nav";
import { user } from "utils/user";

const propStore = createProps();
const emailTail = "@hcmut.edu.vn";

function login(email) {
  user
    .login("tai.nguyen.cse.datai" + emailTail)
    .then(() => {
      TeacherApi.postExample({ email: email + emailTail }).then((response) => {
        user.code = response[0]?.code;
        if (user.code) {
          user.notifyLogin();
          navHolder.navigate("topic");
        } else {
          // TODO throw login error
          alert("Invalid email");
        }
      });
    })
    .catch((error) => {
      // TODO throw valid email error
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode + " " + errorMessage);
    });
}

const HomeScreen = () => {
  const [email, setEmail] = React.useState("");

  const emailProps = {
    ...propStore.input("login.email"),
    style: styles.email,
    accessoryRight: () => <Text>{emailTail}</Text>,
    callBack: (nextValue) => setEmail(nextValue),
  };

  return (
    <Layout style={styles.container}>
      <MyInput {...emailProps} />
      <Button onPress={() => login(email)}>{i18n.t("origin.login")}</Button>
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

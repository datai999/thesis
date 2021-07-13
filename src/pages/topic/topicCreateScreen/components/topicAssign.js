import { Button, Layout, Text } from "@ui-kitten/components";
import StudentApi from "api/person/StudentApi";
import TeacherApi from "api/person/TeacherApi";
import CouncilForm from "components/form/CouncilForm";
import { MyAutocompleteTag, MyInput } from "components/Input";
import MyModal from "components/Modal";
import { MySelect } from "components/Select";
import constData from "data/constData";
import React from "react";
import { ScrollView } from "react-native";
import { i18n } from "utils";

export default ({ styles, propStore, council }) => {
  const [councilVisible, setCouncilVisible] = React.useState(false);

  const modalCouncilProps = {
    ...CouncilForm,
    visible: councilVisible,
    cancel: () => setCouncilVisible(false),
    body: () => CouncilForm.body(council),
    submit: async () => {
      try {
        let response = await CouncilForm.submit();
        form.council = response;
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  };

  return (
    <Layout style={styles.group}>
      <Text style={styles.headerGroup}>{i18n.t("origin.topicAssign")}</Text>
      <MyInput {...propStore.select("topicAssign.semester")} />
      <ScrollView showsVerticalScrollIndicator={true}>
        <MySelect
          {...propStore.select("topicAssign.status")}
          arrValue={constData.topicStatus.arrValue}
        />
        <MyAutocompleteTag
          {...propStore.inputSearch("topicAssign.executeStudent", StudentApi)}
        />

        <MyAutocompleteTag
          {...propStore.inputSearch("topicAssign.guideTeacher", TeacherApi)}
        />
        <MyAutocompleteTag
          {...propStore.inputSearch("topicAssign.reviewTeacher", TeacherApi)}
        />
        <MyModal {...modalCouncilProps} />
        <Button
          style={{ marginTop: 22 }}
          appearance="outline"
          onPress={() => {
            setCouncilVisible(true);
          }}
        >
          {i18n.t(council ? "council.update" : "council.create")}
        </Button>
      </ScrollView>
    </Layout>
  );
};

import { Button, Layout } from "@ui-kitten/components";
import StudentApi from "api/person/StudentApi";
import TeacherApi from "api/person/TeacherApi";
import CouncilForm from "components/form/CouncilForm";
import { MyAutocompleteTag, MyInput } from "components/Input";
import MyModal from "components/Modal";
import { MySelect } from "components/Select";
import constData from "data/constData";
import React from "react";
import { ScrollView } from "react-native";
import { propsService } from "service";
import { i18n } from "utils";

const defaultForm = { semester: 123 };

export default ({ route = { params: null } }) => {
  const [councilVisible, setCouncilVisible] = React.useState(false);

  let form = _.cloneDeep(defaultForm);
  let propsStore = propsService.createPropsStore(defaultForm);

  const modalCouncilProps = {
    ...CouncilForm,
    visible: councilVisible,
    cancel: () => setCouncilVisible(false),
    body: () => CouncilForm.body({}),
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
    <Layout style={{ margin: 10, padding: 10 }}>
      <MyInput
        {...propsStore.input("semester")}
        label="topic.semester.label"
        placeholder="topic.semester.placeholder"
      />
      <ScrollView showsVerticalScrollIndicator={true}>
        <MySelect
          {...propsStore.select("status")}
          arrValue={constData.topicStatus.arrValue}
          label="origin.status.label"
          placeholder="origin.status.placeholder"
        />
        <MyAutocompleteTag
          {...propsStore.inputSearch("guideTeacher", TeacherApi)}
          label="teacher.guide.label"
          placeholder="teacher.guide.placeholder"
        />
        <MyAutocompleteTag
          {...propsStore.inputSearch("executeStudent", StudentApi)}
          label="student.execute.label"
          placeholder="student.execute.placeholder"
        />
        <MyAutocompleteTag
          {...propsStore.inputSearch("reviewTeacher", TeacherApi)}
          label="teacher.review.label"
          placeholder="teacher.review.placeholder"
        />
        <MyModal {...modalCouncilProps} />
        <Button
          style={{ marginTop: 22 }}
          appearance="outline"
          onPress={() => {
            setCouncilVisible(true);
          }}
        >
          {i18n.t("council.update")}
        </Button>

        <Button
          style={{ marginTop: 22 }}
          onPress={() => {
            console.log(propsStore.form);
          }}
        >
          {i18n.t("origin.submit")}
        </Button>
      </ScrollView>
    </Layout>
  );
};

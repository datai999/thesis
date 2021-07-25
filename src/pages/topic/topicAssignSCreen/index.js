import { Button, Layout, Text, ViewPager } from "@ui-kitten/components";
import StudentApi from "api/person/StudentApi";
import TeacherApi from "api/person/TeacherApi";
import TopicAssignApi from "api/topic/TopicAssignApi";
import CouncilForm from "components/form/CouncilForm";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  BookOpenIcon,
  PlusIcon,
} from "components/icons";
import { MyAutocompleteTag, MyInput } from "components/Input";
import TopicModal from "components/modal/topicModal";
import MyModal from "components/MyModal";
import { MySelect } from "components/Select";
import constData from "data/constData";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { loadingService, propsService, toastService } from "service";
import { getRenderText, i18n } from "utils";

const queryData = (topicId) => {
  try {
    return TopicAssignApi.findByTopicId(topicId);
  } catch (error) {
    toastService.error(error.response.data.data[0], error);
  }
};

export default ({ route }) => {
  const [semesterIndex, setSemesterIndex] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [topicModalVisible, setTopicModalVisible] = React.useState(false);

  console.log(TopicModal);

  React.useEffect(() => {
    const query = async () => {
      // if (route.params) {
      let queryResponse = await queryData(route.params?.id ?? 101);
      setData(queryResponse);
      //  }
    };
    query();
  }, [route.params]);

  return (
    <Layout style={styles.container}>
      <TopicModal
        visible={topicModalVisible}
        disableVisible={() => setTopicModalVisible(false)}
        topic={data[0]?.topic}
      />
      <Layout style={styles.headerBtn}>
        <Button
          {...commonPropsTopBtn}
          accessoryRight={BookOpenIcon}
          onPress={() => setTopicModalVisible(true)}
        >
          {i18n.t("origin.topicInfo.origin")}
        </Button>
        <Button
          {...commonPropsTopBtn}
          accessoryRight={PlusIcon}
          // onPress={reset}
        >
          {i18n.t("origin.topicAssign.new")}
        </Button>
      </Layout>
      <Layout style={styles.wrapViewPaper}>
        <ViewPager
          style={styles.viewPager}
          selectedIndex={semesterIndex}
          onSelect={setSemesterIndex}
        >
          {Object.values(data).map((topicAssign) => (
            <TopicAssign key={topicAssign.id} topicAssign={topicAssign} />
          ))}
        </ViewPager>
      </Layout>

      {data.length > 1 && (
        <Layout style={styles.bottomBtn}>
          {semesterIndex < 1 && (
            <Button
              status="control"
              appearance="outline"
              accessoryRight={ArrowForwardIcon}
              onPress={() => setSemesterIndex(semesterIndex + 1)}
            >
              {i18n.t("origin.next")}
            </Button>
          )}
          {semesterIndex > 0 && (
            <Button
              status="control"
              appearance="outline"
              accessoryLeft={ArrowBackIcon}
              onPress={() => setSemesterIndex(semesterIndex - 1)}
            >
              {i18n.t("origin.previous")}
            </Button>
          )}
        </Layout>
      )}
    </Layout>
  );
};

const submitTopicAssign = (form) => {
  loadingService.start();
  return TopicAssignApi.create(form)
    .then((response) => {
      loadingService.end();
      toastService.success("toast.topic.assign.success");
    })
    .catch((err) => {
      toastService.error(err.response.data.data[0], err);
      loadingService.end();
    });
};

const TopicAssign = ({ topicAssign }) => {
  const [councilVisible, setCouncilVisible] = React.useState(false);

  let propsStore = propsService.createPropsStore(topicAssign);

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
    <Layout style={styles.group}>
      <Layout style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text>{getRenderText(topicAssign.topic.name)}</Text>
      </Layout>

      <Layout style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <MyInput
          {...propsStore.input("semester")}
          label="topic.semester.label"
          placeholder="topic.semester.placeholder"
        />
        <MySelect
          {...propsStore.select("status")}
          arrValue={constData.topicStatus.arrValue}
          label="origin.status.label"
          placeholder="origin.status.placeholder"
        />
      </Layout>
      <ScrollView showsVerticalScrollIndicator={true}>
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
          style={{ marginTop: 5 }}
          appearance="outline"
          onPress={() => {
            setCouncilVisible(true);
          }}
        >
          {i18n.t("council.update")}
        </Button>
      </ScrollView>
      <Layout style={{ marginTop: 20 }}>
        <Button
          onPress={() => {
            submitTopicAssign(propsStore.form);
          }}
        >
          {i18n.t("origin.submit")}
        </Button>
      </Layout>
    </Layout>
  );
};

const commonPropsTopBtn = {
  style: { marginHorizontal: 5 },
  size: "small",
  status: "primary",
};

const styles = StyleSheet.create({
  container: {
    marginVertical: "1%",
    marginBottom: 15,
    flex: 1,
    backgroundColor: "transparent",
  },
  headerBtn: {
    marginHorizontal: "3%",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  wrapViewPaper: {
    flex: 1,
    maxHeight: "90%",
    backgroundColor: "transparent",
    margin: 5,
  },
  viewPager: {
    backgroundColor: "transparent",
    maxHeight: "100%",
  },
  bottomBtn: {
    marginHorizontal: "3%",
    backgroundColor: "transparent",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
  },
  group: {
    paddingVertical: "1%",
    marginHorizontal: "3%",
    paddingHorizontal: "3%",
  },
  headerGroup: {
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});

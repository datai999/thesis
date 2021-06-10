import { Button, Layout, List, Text } from "@ui-kitten/components";
import CriterionApi from "api/score/CriterionApi";
import CriterionTemplateApi from "api/score/CriterionTemplateApi";
import { MyInput } from "components/Input";
import { MySelect } from "components/Select";
import _ from "lodash";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Chip, IconButton } from "react-native-paper";
import { createProps } from "utils";
import i18n from "utils/i18n";

let form = {};

const CriterionTemplateForm = {
  create: i18n.t("criterionTemplate.create"),
  update: i18n.t("criterionTemplate.update"),
  body: (data) => {
    let header = CriterionTemplateForm.create;
    if (data != null) {
      form = _.cloneDeep(data);
      header = CriterionTemplateForm.update;
    } else form = {};
    return <FormLayout header={header} />;
  },
  bottomExceed: renderBottomExceed,
  submit: () => CriterionTemplateApi.create(form),
};

function renderBottomExceed() {
  if (!_.isEmpty(form)) {
    return (
      <Layout
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "55%",
        }}
      >
        <Button style={{ margin: 5 }}>
          {i18n.t("criterionTemplate.applyTopic")}
        </Button>
        <Button style={{ margin: 5 }}>
          {i18n.t("criterionTemplate.applyThesis")}
        </Button>
      </Layout>
    );
  }
  return null;
}

const FormLayout = ({ header }) => {
  const propStore = createProps(form);
  const [multiLang, setMultiLang] = React.useState(0);

  return (
    <Layout style={styles.container}>
      <Layout style={{ flexDirection: "row" }}>
        <IconButton
          icon="translate"
          onPress={() => setMultiLang(multiLang + 1)}
        />
        <Text style={styles.headerText}>{i18n.t(header)}</Text>
      </Layout>

      <ScrollView>
        <MyInput {...propStore.inputLang("criterionTemplate.name")} />
        {multiLang > 0 && (
          <MyInput {...propStore.inputToggleLang("criterionTemplate.name")} />
        )}

        <MySelect {...propStore.select("criterionTemplate.scoreMethod")} />

        <MyInput {...propStore.inputLang("criterionTemplate.description")} />
        {multiLang > 0 && (
          <MyInput
            {...propStore.inputToggleLang("criterionTemplate.description")}
          />
        )}

        <CriterionSelect />
      </ScrollView>
    </Layout>
  );
};

const CriterionSelect = () => {
  const [criterions, setCriterions] = React.useState();
  const [selectedCriterion, setSelectedCriterion] = React.useState(
    form.criterion ?? []
  );
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response = await CriterionApi.getAll();
        setCriterions(response ?? []);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const refresh = (nextData) => {
    form.criterion = nextData.length > 0 ? nextData : null;
    setToggle(!toggle);
  };

  const includeCriterion = (criterion) => {
    return selectedCriterion.map((item) => item.id).includes(criterion.id);
  };

  const moveToLeft = (criterion) => {
    if (includeCriterion(criterion)) {
      moveToRight(criterion);
    } else {
      selectedCriterion.unshift(criterion);
      refresh(selectedCriterion);
    }
  };

  const moveToRight = (criterion) => {
    let nextData = selectedCriterion.filter((ele) => ele.id != criterion.id);
    setSelectedCriterion(nextData);
    refresh(nextData);
  };

  return (
    <Layout>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <Text appearance="hint" category="label" style={{ marginBottom: 5 }}>
            {i18n.t("criterion.selected")}
          </Text>
          <ScrollView style={{ minHeight: 200, maxHeight: 200 }}>
            <List
              data={selectedCriterion}
              renderItem={({ item }) => {
                return (
                  <Text>
                    <Chip
                      icon="check"
                      mode="outlined"
                      onPress={() => moveToRight(item)}
                    >
                      {item.name[i18n.language]}
                    </Chip>
                  </Text>
                );
              }}
            />
          </ScrollView>
        </Layout>

        <Layout style={{ justifyContent: "center" }}>
          <IconButton
            icon="arrow-left-bold-box-outline"
            onPress={() => {
              setSelectedCriterion(criterions);
              form.criterion = criterions.length > 0 ? criterions : null;
            }}
          />
          <IconButton
            icon="arrow-right-bold-box-outline"
            onPress={() => {
              setSelectedCriterion([]);
              form.criterion = null;
            }}
          />
        </Layout>

        <Layout style={styles.right}>
          <Text appearance="hint" category="label" style={{ marginBottom: 5 }}>
            {i18n.t("criterion.existed")}
          </Text>
          <ScrollView style={{ minHeight: 200, maxHeight: 200 }}>
            <List
              data={criterions}
              renderItem={({ item }) => {
                return (
                  <Text>
                    <Chip
                      icon={includeCriterion(item) ? "check" : "menu-left"}
                      mode="outlined"
                      selected={includeCriterion(item)}
                      onPress={() => moveToLeft(item)}
                    >
                      {item.name[i18n.language]}
                    </Chip>
                  </Text>
                );
              }}
            />
          </ScrollView>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    minWidth: 700,
    maxWidth: 700,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  left: {
    flex: 1,
    marginRight: 10,
    marginVertical: 10,
  },
  right: {
    flex: 1,
    marginLeft: 10,
    marginVertical: 10,
  },
  headerText: {
    margin: 5,
    marginLeft: "20%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});

export default CriterionTemplateForm;

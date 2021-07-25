import MyModal from "components/MyModal";
import React from "react";
import { ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import TableBottom from "./bottom";
import TableContent from "./content";
import TableFilter from "./filter";
import TableHeader from "./header";

export default ({
  fields,
  updateForm,
  data,
  topContent,
  filterVisible = false,
  propCallback = {},
  callback,
  ...props
}) => {
  const [updateFormVisible, setUpdateFormVisible] = React.useState(false);
  const [currentRow, setCurrenRow] = React.useState(null);

  const modalUpdateFormProps = {
    ...updateForm,
    visible: updateFormVisible,
    cancel: () => setUpdateFormVisible(false),
    body: () => updateForm?.body(currentRow),
    submit: async () => {
      try {
        let response = await updateForm.submit();
        let index = data.map((x) => x.id).indexOf(response.id);
        data[index] = response;
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  };

  const rowCallBack = (row) => {
    setCurrenRow(row);
    setUpdateFormVisible(true);
  };

  const commonProps = {
    propCallback: propCallback,
    callback: callback,
    fields: fields,
  };

  return (
    <DataTable style={{ flex: 1, margin: 5 }}>
      <MyModal {...modalUpdateFormProps} />
      <TableHeader {...commonProps} />
      {topContent && topContent({ rowCallBack, fields })}
      {filterVisible && <TableFilter {...commonProps} />}
      <ScrollView>
        <TableContent
          {...props}
          fields={fields}
          data={data}
          rowCallBack={rowCallBack}
          rowPress={props.rowPress}
        />
      </ScrollView>
      <TableBottom propCallback={propCallback} callback={callback} />
    </DataTable>
  );
};

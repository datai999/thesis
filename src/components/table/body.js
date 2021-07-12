import MyModal from "components/Modal";
import {
  TableBottom,
  TableContent,
  TableFilter,
  TableHeader,
} from "components/table";
import React from "react";
import { ScrollView } from "react-native";
import { DataTable } from "react-native-paper";

export default ({
  fields,
  updateForm,
  data,
  topContent,
  filterVisible = false,
  propCallback = {},
  callback,
}) => {
  const [updateFormVisible, setUpdateFormVisible] = React.useState(false);
  const [currentRow, setCurrenRow] = React.useState(null);

  const links = fields.map((field) => field.link);

  const modalUpdateFormProps = {
    ...updateForm,
    visible: updateFormVisible,
    cancel: () => setUpdateFormVisible(false),
    body: () => updateForm.body(currentRow),
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
    links: links,
    propCallback: propCallback,
    callback: callback,
    fields: fields,
  };

  return (
    <DataTable style={{ flex: 1, margin: 5 }}>
      <MyModal {...modalUpdateFormProps} />
      <TableHeader {...commonProps} />
      {topContent && topContent({ links, rowCallBack, fields })}
      {filterVisible && <TableFilter {...commonProps} />}
      <ScrollView>
        <TableContent
          links={links}
          fields={fields}
          data={data}
          rowCallBack={rowCallBack}
        />
      </ScrollView>
      <TableBottom propCallback={propCallback} callback={callback} />
    </DataTable>
  );
};

import { TeacherForm } from "components/form";
import MyModal from "components/Modal";
import { TableBottom, TableContent, TableHeader } from "components/table";
import React from "react";
import { DataTable } from "react-native-paper";

const arrLink = [
  "person.code",
  "person.name",
  "person.gender",
  "person.subjectDepartment",
  "person.degree",
  "person.email",
  "person.phone",
];  

const TeacherTable = ({ data, page, callBack }) => {
  const [updateForm, setUpdateForm] = React.useState(false);
  const [currentRow, setCurrenRow] = React.useState(null);

  const modalUpdateFormProps = {
    ...TeacherForm,
    visible: updateForm,
    cancel: () => setUpdateForm(false),
    body: () => TeacherForm.body("teacher.update", currentRow),
    submit: async () => {
      try {
        let response = await TeacherForm.submit();
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
    setUpdateForm(true);
  };

  return (
    <DataTable>
      <MyModal {...modalUpdateFormProps} />
      <TableHeader arrLink={arrLink} />
      <TableContent arrLink={arrLink} data={data} rowCallBack={rowCallBack} />
      <TableBottom page={page} pageCallBack={callBack} />
    </DataTable>
  );
};

export default TeacherTable;

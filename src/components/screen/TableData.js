import { IndexPath, Layout, Select, Text } from "@ui-kitten/components";
import MyModal from "components/Modal";
import { selectItems } from "components/Select";
import React from "react";
import { DataTable, List } from "react-native-paper";
import { getLinkProps, getRenderText } from "utils";
import i18n from "utils/i18n";

export const TableHeader = ({ links }) => {
  const linkProps = getLinkProps(links);

  return (
    <DataTable.Header>
      {linkProps.map((linkProp) => {
        return (
          <DataTable.Title key={linkProp.api}>
            <Text>{i18n.t(linkProp.label)}</Text>
          </DataTable.Title>
        );
      })}
    </DataTable.Header>
  );
};

export const TableContent = ({ links, data, rowCallBack }) => {
  const linkProps = getLinkProps(links);

  const reducerLastName = (accumulator, currentValue) =>
    accumulator + ", " + currentValue.split(" ").slice(-1).join();

  const renderCell = (fieldValue) => {
    let renderValue = getRenderText(fieldValue);
    if (Array.isArray(renderValue)) {
      return (
        <List.Accordion
          title={renderValue.reduce(reducerLastName, "").slice(2)}
        >
          {renderValue?.map((value) => {
            return <List.Item key={value} title={value} />;
          })}
        </List.Accordion>
      );
    }
    return renderValue;
  };

  return data.map((row) => {
    return (
      <DataTable.Row key={row.id}>
        {linkProps.map((linkProp) => {
          let fieldValue = _.get(row, linkProp.api);
          return (
            <DataTable.Cell
              key={linkProp.api}
              onPress={() => {
                rowCallBack(row);
              }}
            >
              {renderCell(fieldValue)}
            </DataTable.Cell>
          );
        })}
      </DataTable.Row>
    );
  });
};

export const TableBottom = ({ page, pageCallBack }) => {
  const [selectedSize, setSelectedSize] = React.useState(new IndexPath(0));

  const sizeRank = [5, 10, 20, 30, 50, 100];

  const fetchPage = (newNumber, newSize) => {
    let nextPage = {
      number: newNumber,
      size: newSize,
    };
    pageCallBack(nextPage);
  };

  return (
    <Layout
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: "5%",
      }}
    >
      <Layout>
        <Text>
          {i18n.t("origin.page")}: {page.number + 1} / {page.totalPages}
        </Text>
        <Text>
          {i18n.t("origin.total")}: {page.totalElements}
        </Text>
      </Layout>
      <DataTable.Pagination
        page={page.number}
        numberOfPages={page.totalPages}
        onPageChange={(nextPage) => {
          fetchPage(nextPage, sizeRank[selectedSize.row]);
        }}
      />
      <Layout>
        <Text>{i18n.t("origin.record")}</Text>
        <Select
          size="small"
          value={sizeRank[selectedSize.row]}
          selectedIndex={selectedSize}
          onSelect={(index) => {
            setSelectedSize(index);
            fetchPage(0, sizeRank[index - 1]);
          }}
        >
          {selectItems(sizeRank, {})}
        </Select>
      </Layout>
    </Layout>
  );
};

export const TableData = ({ links, updateForm, data, page, pageCallBack }) => {
  const [updateFormVisible, setUpdateFormVisible] = React.useState(false);
  const [currentRow, setCurrenRow] = React.useState(null);

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

  return (
    <DataTable>
      <MyModal {...modalUpdateFormProps} />
      <TableHeader links={links} />
      <TableContent links={links} data={data} rowCallBack={rowCallBack} />
      <TableBottom page={page} pageCallBack={pageCallBack} />
    </DataTable>
  );
};

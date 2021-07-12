import { IndexPath, Layout, Select, Text } from "@ui-kitten/components";
import { selectItems } from "components/Select";
import React from "react";
import { DataTable } from "react-native-paper";
import { i18n } from "utils";

export default ({ propCallback, callback }) => {
  const [selectedSize, setSelectedSize] = React.useState(new IndexPath(0));
  const page = propCallback.page;

  const sizeRank = [10, 20, 30, 50, 100];

  const fetchPage = (newNumber, newSize) => {
    let nextPage = {
      ...propCallback,
      page: {
        number: newNumber,
        size: newSize,
      },
    };
    callback(nextPage);
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
          {i18n.t("origin.totalRecord")}: {page.totalElements}
        </Text>
      </Layout>
      <DataTable.Pagination
        page={page.number}
        numberOfPages={page.totalPages}
        onPageChange={(nextPage) => {
          fetchPage(nextPage, sizeRank[selectedSize.row]);
        }}
      />
      <Layout style={{ minWidth: 90 }}>
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

import { Button, Text } from "@ui-kitten/components";
import tableStyle from "data/tableStyle";
import React from "react";
import { DataTable } from "react-native-paper";
import { i18n } from "utils";

export default ({ propCallback, callback, ...props }) => {
  const [sortField, setSortField] = React.useState(propCallback.sort?.field);
  const [descending, setDescending] = React.useState(
    propCallback.sort?.descend
  );

  React.useEffect(() => {
    if (descending == null) propCallback.sort = {};
    else propCallback.sort = { field: sortField, descend: descending };
    callback(propCallback);
  }, [sortField, descending]);

  function getSortDirection(propsApi) {
    if (propsApi == sortField) {
      return descending ? "descending" : "ascending";
    }
    return null;
  }

  function setSort(propsApi) {
    if (propsApi != sortField) {
      setDescending(true);
    } else {
      if (!descending) {
        setDescending(null);
        setSortField(null);
        return;
      } else setDescending(false);
    }
    setSortField(propsApi);
  }

  return (
    <DataTable.Header>
      <DataTable.Title style={tableStyle.no}>
        <Text category="s1">No</Text>
      </DataTable.Title>
      {props.fields.map((field) => {
        return (
          <Button
            key={field.api}
            appearance={field.api != sortField ? "ghost" : "filled"}
            status="basic"
            style={[
              tableStyle[field.api.split(".").pop()],
              {
                marginHorizontal: 1,
                paddingHorizontal: 0,
              },
            ]}
          >
            <DataTable.Title
              sortDirection={getSortDirection(field.api)}
              onPress={() => setSort(field.api)}
            >
              <Text category="s1" style={{ fontSize: 13 }}>
                {i18n.t(field.label)}
              </Text>
            </DataTable.Title>
          </Button>
        );
      })}
    </DataTable.Header>
  );
};

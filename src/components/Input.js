import {
  Autocomplete,
  Button,
  Input,
  Layout,
  List,
  SelectItem,
} from "@ui-kitten/components";
import { CloseIcon } from "components/Icons";
import _ from "lodash";
import React from "react";
import { getRenderText } from "utils";

const MyInput = ({ callBack, ...props }) => {
  const [currentValue, setCurrentValue] = React.useState(props.value);
  return (
    <Input
      {...props}
      onChangeText={(nextValue) => {
        callBack(nextValue);
        setCurrentValue(nextValue);
      }}
      onBlur={() => {
        if (props.onBlur) return props.onBlur(currentValue);
        return null;
      }}
    />
  );
};

const MyAutocomplete = ({ callBack, ...props }) => {
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState(props.data ?? []);

  const renderOption = (arrItem) => {
    return arrItem?.map((item) => {
      let textRender = getRenderText(item);
      return <SelectItem key={item} title={textRender} />;
    });
  };

  return (
    <Autocomplete
      {...props}
      value={value}
      onSelect={(number) => {
        callBack(data[number]);
      }}
      onChangeText={async (nextValue) => {
        setValue(nextValue);
        if (props.refreshDataOnChangeText) {
          if (nextValue != null && nextValue != "")
            setData(await props.refreshDataOnChangeText(nextValue));
        }
      }}
    >
      {renderOption(data)}
    </Autocomplete>
  );
};
const MyAutocompleteTag = ({ ...props }) => {
  const [data, setData] = React.useState(props.value ?? []);

  const autocompleteProps = {
    ...props,
    callBack: (newValue) => {
      let nextData = _.cloneDeep(data);
      nextData.push(newValue);
      setData(nextData);
      props.callBack(nextData);
    },
  };

  return (
    <Layout>
      <MyAutocomplete {...autocompleteProps} />
      <List
        horizontal={true}
        data={data}
        renderItem={({ item }) => (
          <Button
            status="info"
            size="tiny"
            appearance="outline"
            accessoryRight={() => (
              <Button
                status="info"
                size="tiny"
                appearance="ghost"
                accessoryRight={CloseIcon}
                onPress={() => {
                  let nextData = data.filter((ele) => ele != item);
                  setData(nextData);
                  props.callBack(nextData);
                }}
              />
            )}
          >
            {getRenderText(item)}
          </Button>
        )}
      />
    </Layout>
  );
};

export { MyInput, MyAutocomplete, MyAutocompleteTag };

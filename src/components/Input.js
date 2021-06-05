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
import i18n from "utils/i18n";

const MyInput = ({ callBack, ...props }) => {
  const [currentValue, setCurrentValue] = React.useState(props.value || "");

  return (
    <Input
      onChangeText={(nextValue) => {
        callBack(nextValue);
        setCurrentValue(nextValue);
      }}
      onBlur={() => {
        if (props.onBlur) return props.onBlur(currentValue);
        return null;
      }}
      {...props}
      label={i18n.t(props.label)}
      value={getRenderText(currentValue)}
      placeholder={i18n.t(props.placeholder)}
    />
  );
};

const MyAutocomplete = ({ callBack, ...props }) => {
  const [value, setValue] = React.useState(props.value);
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
      label={i18n.t(props.label)}
      placeholder={i18n.t(props.placeholder)}
      value={getRenderText(value)}
      onSelect={(number) => {
        callBack(data[number]);
        setValue(getRenderText(data[number]));
      }}
      onChangeText={async (nextValue) => {
        setValue(nextValue);
        if (props.refreshDataOnChangeText) {
          if (nextValue != null && nextValue != "")
            setData(await props.refreshDataOnChangeText(nextValue));
        }
      }}
      onBlur={() => {
        if (props.onBlur) return props.onBlur(value);
        return null;
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

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

const MyInput = ({ value, callBack, ...props }) => {
  const [currentValue, setCurrentValue] = React.useState(value);
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
  const [data, setData] = React.useState(props.data ?? []);
  const [indexed, setIndexed] = React.useState(-1);

  const renderOption = (arrItem) => {
    return arrItem?.map((item) => {
      let textRender = getRenderText(item);
      return <SelectItem key={item} title={textRender} />;
    });
  };

  return (
    <Autocomplete
      {...props}
      value={getRenderText(data[indexed])}
      onSelect={(number) => {
        setIndexed(number);
        callBack(data[number]);
      }}
      onChangeText={async (nextValue) => {
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
  const [data, setData] = React.useState([]);

  const autocompleteProps = {
    ...props,
    callBack: (newValue) => {
      let dataCloneDeep = _.cloneDeep(data);
      dataCloneDeep.push(newValue);
      setData(dataCloneDeep);
      props.callBack(newValue);
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
            accessoryRight={CloseIcon}
          >
            {getRenderText(item)}
          </Button>
        )}
      />
    </Layout>
  );
};

export { MyInput, MyAutocomplete, MyAutocompleteTag };

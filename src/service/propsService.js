import constData from "data/constData";
import _ from "lodash";

export default {
  createPropsStore: (defaultForm) => {
    let form = _.cloneDeep(defaultForm);

    const inputProps = (path, props) => {
      return {
        value: _.get(form, path),
        callBack: (value) => _.set(form, path, value),
        ...props,
      };
    };

    return {
      form,
      input: inputProps,
      inputSearch: (path, api) => {
        return {
          ...inputProps(path),
          refreshDataOnChangeText: (value) => api.search(value),
        };
      },
      select: (path, props) => {
        return {
          ...constData[path.split(".").pop()],
          ...inputProps(path, props),
        };
      },
    };
  },
};

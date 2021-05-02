import React from "react";
import _ from "lodash";

import Storage from "data/Storage";

const createTopic = (form) => {
  let topic = _.get(Storage, "topic", []);
  topic.push(form);
};

export default createTopic;

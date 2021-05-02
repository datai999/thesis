import React from "react";

import Storage from "data/Storage";

const getTopic = () => {
  return Storage["topic"];
};

export default getTopic;

import React from "react";

const Storage = {
  topic: new Array(3).fill({
    topicCode: "123",
    topicName: "Name of topic",
    guideTeacher: "Nguyen Thi Ai",

    semester: "202",
    majors: ["Computer Science", "Computer Engineering"],
    educationMethod: "Formal",
    maxStudentTake: 3,
    minStudentTake: 1,

    description: "description",

    mainTask: "To do something",
    thesisTask: "Todo something when thesis",
    node: "note",

    students: ["Nguyen Duc Anh Tai", "Tai Nguyen Duc Anh"],
  }),
};

export default Storage;

const constData = {
  semester: {
    arrValue: Array(3)
      .fill()
      .map(
        (index) =>
          (
            parseInt(new Date().getFullYear().toString().substr(2)) +
            parseInt(index / 3)
          ).toString() +
          ((index % 3) + 1)
      ),
  },
  minStudentTake: {
    arrValue: Array.from({ length: 5 }, (v, k) => k + 1),
  },
  maxStudentTake: {
    arrValue: Array.from({ length: 5 }, (v, k) => k + 1),
  },
};

export default constData;

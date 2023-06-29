// [1, 4, 5, 2, 3, 9, 8, 11, 0] => "0-5, 8-9, 11"
// [1, 4, 3, 2] => "1-4"
// [1, 4] => "1, 4"

const range = (array: number[]): string => {
  let result = "";
  const arr = [...array].sort((a, b) => a - b);

  // 0, 1, 2, 3, 4, 5, 8, 9, 11

  arr.forEach((item, index) => {
    if (index === 0) {
      result = result + item;
    } else {
      const prevItem = arr[index - 1];
      const nextItem = arr[index + 1];

      if (prevItem + 1 === item && nextItem - 1 !== item) {
        result = result + `-${item}`;
      }

      if (prevItem + 1 < item) {
        result = result + `, ${item}`;
      }
    }
  });

  return result;
};

console.log("range1 :>> ", range([1, 4, 5, 2, 3, 9, 8, 11, 0]));
console.log("range2 :>> ", range([1, 4, 3, 2]));
console.log("range3 :>> ", range([1, 4]));

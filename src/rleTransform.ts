const str = "caaababbcbbb";

// output: 1с3a1b1a2b1c3b;

const rleTransform = (str: string): string => {
  const arr = str.split("");

  let result = "";
  let repeatCount = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      repeatCount++;
    } else {
      result = result + `${repeatCount}${arr[i]}`;
      repeatCount = 1;
    }
  }

  return result;
};

console.log("rleTransform(str) :>> ", rleTransform(str));

export {};

const str = "ab2[b2[cd]3[e]]f";

const decode = (str: string) => {
  const arr = str.split("");

  const brackets: number[][] = [];

  arr.forEach((letter, index) => {
    if (letter === "[") {
      brackets.push([index]);
    }

    if (letter === "]") {
      for (let i = 0; i < brackets.length; i++) {
        if (brackets[brackets.length - 1 - i].length !== 2) {
          brackets[brackets.length - 1 - i].push(index);
          break;
        }
      }
    }
  });

  let result = "";
  let k = 0;
  let currentIndex = 0;

  arr.forEach((letter, index) => {
    if (index < currentIndex) {
      return;
    }

    if (/[a-zA-Z]/g.test(letter)) {
      result += letter;
      currentIndex = index;
      return;
    }

    if (/\d/g.test(letter)) {
      k = +letter;
      currentIndex = index;
      return;
    }

    if (letter === "[") {
      const closeBracketItem = brackets.find((item) => item[0] === index);

      if (!closeBracketItem) {
        return;
      }

      const closeBracketIndex = closeBracketItem[1];
      const strSlice = str.slice(index + 1, closeBracketIndex);
      currentIndex = closeBracketIndex + 1;
      result += decode(strSlice).repeat(k);
    }
  });

  return result;
};

console.log("decode(str) :>> ", decode(str));

export {};

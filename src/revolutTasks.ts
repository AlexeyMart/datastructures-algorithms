function funWithAnagrams(text: string[]): string[] {
  const uniqueWords: string[] = [];
  const uniqueIndexes: number[] = [];

  const sortedByLettersArr = text.map((item) => item.split("").sort().join(""));

  sortedByLettersArr.forEach((item, index) => {
    if (!uniqueWords.includes(item)) {
      uniqueWords.push(item);
      uniqueIndexes.push(index);
    }
  });

  const uniqueWordsFromInitArr = uniqueIndexes.map((index) => text[index]);
  const uniqueWordsFromInitArrWithoutDigitals = uniqueWordsFromInitArr.filter(
    (item) => {
      const check = /\d/gi.test(item);
      return !check;
    }
  );

  return uniqueWordsFromInitArrWithoutDigitals.sort();
}

function entryTime(s: string, keypad: string): number {
  let time = 0;
  let currentPosition: number[] = [];

  const input = [
    [keypad[0], keypad[1], keypad[2]],
    [keypad[3], keypad[4], keypad[5]],
    [keypad[6], keypad[7], keypad[8]],
  ];

  const calculatePosition = (item: string) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (input[i][j] === item) {
          return [i, j];
        }
      }
    }

    return [];
  };

  const calculateTime = (
    currentPosition: number[],
    itemPosition: number[]
  ): number => {
    const [i, j] = currentPosition;
    const [m, n] = itemPosition;

    const diffByXAxis = Math.abs(i - m);
    const diffByYAxis = Math.abs(j - n);

    if (diffByXAxis === 0 && diffByYAxis === 0) {
      return 0;
    }

    if (diffByXAxis <= 1 && diffByYAxis <= 1) {
      return 1;
    }

    return 2;
  };

  s.split("").forEach((item, index) => {
    if (index === 0) {
      currentPosition = calculatePosition(item);

      return;
    }

    const itemPosition = calculatePosition(item);

    time = time + calculateTime(currentPosition, itemPosition);

    currentPosition = itemPosition;
  });

  return time;
}

export {};

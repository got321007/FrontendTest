let array = [1, 2, 3, 4, 5];

let number = (input) => {
  let text = "expected result >>>>>>>>>>>>> ";
  let ans = "";
  for (let i of array) {
    for (let j = i; j < array.length; j++) {
      if (array[i] + array[j + 1] === input) {
        ans += array[i] + "+" + array[j + 1];
        if (j !== i) {
          ans += ", ";
        }
      }
    }
  }
  return text + ans;
};

console.log(number(7));

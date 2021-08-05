let array = [10, 2, 50, 4, 5];

let number = () => {
  let max_num = Number.NEGATIVE_INFINITY;
  for (let i of array) {
    if (i > max_num) {
      max_num = i;
    }
  }
  return max_num;
};
console.log(number());

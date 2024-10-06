function fn(arr, cash) {
  const obj = {};

  for (let i = 1; i <= cash; i += 1) {
    obj[i] = 0;
  }
  arr.forEach(bayer => {
    const values = Object.values(obj);
    const minValue = Math.min(...values);
    const currentCase = values.indexOf(minValue) + 1;
    obj[currentCase] += bayer;
  });

  return obj;
}

console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));

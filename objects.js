const greaterThen = (a, b) => {
  const len1 = a.length;
  const len2 = b.length;
  if (len1 > len2) {
    console.log(`length of A is ${len1}`);
  } else {
    console.log(`length of B is ${len2}`);
  }
};

const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4, 5, 6];

console.log(b > a);

console.log(greaterThen(a, b));

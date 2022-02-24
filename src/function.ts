function add(n1: number, n2: number) {
  return n1 + n2;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;

  cb(result);
}

let combine: (n1: number, n2: number) => number;

combine = add;

console.log(combine(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

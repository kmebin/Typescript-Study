function add(n1: number, n2: number) {
  return n1 + n2;
}

let combine: (n1: number, n2: number) => number;

combine = add;

console.log(combine(8, 8));

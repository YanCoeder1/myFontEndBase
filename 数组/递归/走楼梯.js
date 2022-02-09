function foo (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return foo(n-1) + foo(n-2);
}
console.log(foo(5));
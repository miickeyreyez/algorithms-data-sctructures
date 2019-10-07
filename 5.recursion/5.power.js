function power(base, exponent) {
  let total = 0;

  if (exponent === 0) {
    return 1;
  }

  total = base * power(base, exponent - 1);

  return total;
}

power(2, 10);

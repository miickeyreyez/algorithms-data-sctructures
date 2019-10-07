function duplicateNumbers() {
  return new Set(arguments).size !== arguments.length;
}

duplicateNumbers(182, 281, 123, 21, 281);
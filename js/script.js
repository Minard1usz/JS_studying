// рекурсивне зведення в ступінь:
function pow(number, degree) {
  if (degree != 1) {
    return number * pow(number, degree - 1);
  } else {
    return number;
  }
}

console.log(pow(10, 3) );
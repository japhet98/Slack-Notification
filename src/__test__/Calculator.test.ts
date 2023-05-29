import Calculator from '../Calculator';

//Instance of Calculator
const calculator = new Calculator(50, 10);

test('Should return the sum of the two operands in the constructor', async () => {
  //arrange
  const additionRes = 60;
  //act
  const result = calculator.Addition();
  //assert
  expect(result).toEqual(additionRes);
});

test('Should return the difference of the two operands in the constructor', async () => {
  //arrange
  const additionRes = 40;
  //act
  const result = calculator.Subtraction();
  //assert
  expect(result).toEqual(additionRes);
});

test('Should return the division of the two operands in the constructor', async () => {
  //arrange
  const additionRes = 5;
  //act
  const result = calculator.Divide();
  //assert
  expect(result).toEqual(additionRes);
});

test('Should return the product of the two operands in the constructor', async () => {
  //arrange
  const additionRes = 500;
  //act
  const result = calculator.Multiply();
  //assert
  expect(result).toEqual(additionRes);
});

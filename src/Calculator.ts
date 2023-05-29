export default class Calculator {
  private num1: number;
  private num2: number;

  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  public Addition() {
    return this.num1 + this.num2;
  }
  public Subtraction() {
    return this.num1 - this.num2;
  }
  public Divide() {
    return this.num1 / this.num2;
  }
  public Multiply() {
    return this.num1 * this.num2;
  }
}

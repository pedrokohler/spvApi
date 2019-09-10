import NumberAbs from './number';

const numberIns: NumberAbs = new NumberAbs();

export default class Numbers {
  public sum(numbers: Array<number>): number {
    let sum: number = 0;
    numbers.forEach(number => {
      sum = numberIns.sum(sum, number);
    });
    return sum;
  }

  public average(numbers: Array<number>): number {
    const quantity = numbers.length;
    const sum: number = this.sum(numbers);
    return numberIns.divide(sum, quantity);
  }
}

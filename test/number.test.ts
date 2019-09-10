import NumberAbs from '../src/services/number';

const numberIns = new NumberAbs();

describe('NumberAbs class', () => {
  test('Simple sum', () => {
    expect(numberIns.sum(1, 2)).toBe(3);
  });

  test('Simple division', () => {
    expect(numberIns.divide(4, 2)).toBe(2);
  });
});

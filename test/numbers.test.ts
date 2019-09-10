import Numbers from '../src/services/numbers';

const numbers = new Numbers();

describe('Numbers class', () => {
  test('Simple array sum', () => {
    expect(numbers.sum([1, 2, 3])).toBe(6);
  });

  test('Simple array avarage', () => {
    expect(numbers.average([4, 6, 2])).toBe(4);
  });
});

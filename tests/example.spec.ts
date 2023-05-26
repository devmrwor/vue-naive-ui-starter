const sum = (a: number, b: number) => a + b

describe('Sum function', () => {
  it('should add 2 positive numbers together and return the result', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

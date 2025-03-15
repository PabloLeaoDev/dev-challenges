describe('Testing', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return one', () => {
    const num = 1;
    expect(num).toBe(1);
  });
});

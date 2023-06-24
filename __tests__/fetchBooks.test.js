const { fetchBooks } = require('../index');

test('fetchBooks should return an array of books', () => {
  expect.assertions(1);

  return fetchBooks().then((books) => {
    expect(Array.isArray(books)).toBe(true);
  });
});

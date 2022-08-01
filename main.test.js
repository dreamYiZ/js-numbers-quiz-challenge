const main = require('./main');

test(' test main function', () => {

  expect(main(1321.1)).toBe(1321.1);

  // expect(main(13211)).toBe(32111);
});

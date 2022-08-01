const main = require('./main');

test(' test main function', () => {

  expect(main(1321.1)).toBe(1321.1);
  expect(main()).toBe();
  expect(main('213213a')).toBe('213213a');

  expect(main(13211)).toBe(32111);


  expect(main(12131)).toBe(321311211);


});

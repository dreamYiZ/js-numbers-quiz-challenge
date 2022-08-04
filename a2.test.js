const main = require('./a2');

test(' test main function', () => {

  // expect(main(1321.1)).toBe(1321.1);
  // expect(main()).toBe();
  // expect(main('213213a')).toBe('213213a');



  expect(main(13211)).toBe(32111);

  expect(main(12131)).toBe(321311211);
  expect(main(121)).toBe(21211);

  expect(main(12767)).toBe(7767621);

  // expect(main(61216)).toBe(66121621);

  // expect(main(1216361)).toBe(632163611211);


  // expect(main(1323118)).toBe(321311211);


});

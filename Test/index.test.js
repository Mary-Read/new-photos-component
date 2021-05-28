const test = require('../Client/src/index.jsx');
const { TestScheduler } = require('@jest/core');

it('Index should be a Function', () => {
  expect(typeof test).toBe('function');
});
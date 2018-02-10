import { addToList, removeFromList } from './store.js';

const store = [
  {
    name: 'Google',
    link: 'https://www.google.co.uk/',
    id: 1
  }
];

const item = {
  name: 'The Guardian',
  link: 'https://www.theguardian.com/uk',
  id: 2
};

const newStore = [
  {
    name: 'Google',
    link: 'https://www.google.co.uk/',
    id: 1
  },
  {
    name: 'The Guardian',
    link: 'https://www.theguardian.com/uk',
    id: 2
  }
]; 

test('add and remove from store', () => {
  const addSomething = addToList(item, store);
  expect(addSomething).toEqual(newStore);
  expect(removeFromList(2, addSomething)).toEqual(store);
})
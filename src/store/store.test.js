import addToStore from '.store.js';
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

test('add to store', () => {
  expect(addToStore(item)).toEqual(newStore);
})
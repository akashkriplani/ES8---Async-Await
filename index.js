const fetch = require("node-fetch");

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

// Using promises
Promise.all(urls.map(url => {
  fetch(url).then(resp => resp.json())
})).then(result => {
  console.log('users', result[0]);
  console.log('posts', result[1]);
  console.log('albums', result[2]);
}).catch('oops');


// Cleaner code using async await
const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url => {
  fetch(url).then(resp => resp.json())
}));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
  } catch (err) {
    console.log('oops', err);
  }
};

getData();

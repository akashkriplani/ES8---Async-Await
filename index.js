/// ES8 - Async await demo

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
}).catch('oops').finally(() => console.log('I will be called always'));


// Cleaner code using async await
const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
}));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
  } catch (err) {
    console.log('oops', err);
  }
};

// getData();

// ES 9 - For await of

const getData2 = async function() {
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}

// getData2();

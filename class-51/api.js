// const apiPromise = new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 reject(`Error: ${response.status}`);
//             }
//         })
//         .then((data) => resolve(data))
//         .catch((error) => reject(`Fetch Error: ${error}`));
// });

// apiPromise
//     .then((users) => {
//         console.log('Users:', users);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

// function fetchData(url, options = {}) {
//     return new Promise((resolve, reject) => {
//         fetch(url, options)
//             .then((response) => {
//                 if (response.ok) {
//                     return response.json(); // Parse response as JSON
//                 } else {
//                     reject(`HTTP Error: ${response.status}`); // Reject with status
//                 }
//             })
//             .then((data) => {
//                 resolve(data); // Resolve with data
//             })
//             .catch((error) => {
//                 reject(`Network Error: ${error}`); // Reject with network error
//             });
//     });
// }

// // Get
// fetchData('https://jsonplaceholder.typicode.com/users')
//     .then((data) => {
//         console.log('Users:', data); // Handle successful response
//     })
//     .catch((error) => {
//         console.error('Error:', error); // Handle errors
//     });

// // Post
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is a new post content.",
    userId: 1,
  }),
})
  .then((data) => {
    console.log("Post Created:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// const fetchData = async () => {
//   const apiKey = "0b6eed022e4789c1ef5eeff96b0b937b";
//   //   const apiUrl = "https://jsonplaceholder.typicode.com/posts";
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=${apiKey}`;
//   try {
//     let response = await fetch(apiUrl).then((res) => {
//       return res.json();
//     });
//     console.log(response, "res");
//   } catch (err) {
//     console.log("error", err);
//   }
// };

// fetchData();

const fetchData = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(apiUrl).then((res) => res.json());
    console.log("Response:", response);
  } catch (err) {
    console.log("Error occur in post api:", err);
  }
};

fetchData();

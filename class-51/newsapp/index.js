const getBox = document.getElementById("box");

// const fetchData = async () => {
//   const accessToken = "6b00da92a7bd4d17a05480f940e6aa6f";
//   const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${accessToken}`;

//   try {
//     const response = await fetch(apiUrl)
//       .then((res) => res.json())
//       .then((res) => res.articles);
//     console.log("Response:", response);
//     if (response) {
//       response.forEach((element) => {
//         console.log("element-title:", element?.title);
//         const createHeading = document.createElement("h1");
//         const createPara = document.createElement("p");
//         const createPara2 = document.createElement("p");
//         createPara2.innerHTML = `Author: ${
//           element?.author ? element?.author : "Anonymous user"
//         }`;
//         createHeading.innerHTML = `Title: ${
//           element?.title !== "[Removed]" ? element?.title : "Unknown"
//         }`;
//         createPara.innerHTML = `Description: ${
//           element?.description !== "[Removed]"
//             ? element?.description
//             : "No Description"
//         }`;
//         getBox.append(createPara2, createHeading, createPara);
//       });
//     }
//   } catch (err) {
//     console.log("Error occur in post api:", err);
//   }
// };

// fetchData();

// const postData = async () => {
//   try {
//     await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => console.log(json, "Api response"));
//   } catch (err) {}
// };

const postApi = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: { "content-type": "application/json" },
    }).then((res) => res.json());
    console.log("Res:", res);
  } catch (e) {}
};

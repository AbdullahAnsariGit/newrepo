const getBox = document.getElementById("box");

const fetchData = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(apiUrl).then((res) => res.json());
    // console.log("Response:", response);
    if (response) {
      response.forEach((element) => {
        console.log("element:", element);
        const createHeading = document.createElement("h1");
        const createPara = document.createElement("p");
        const createPara2 = document.createElement("p");
        createPara2.innerHTML = `User Id: ${element?.id}`;
        createHeading.innerHTML = `Title ${element?.id}: ${element?.title}`;
        createPara.innerHTML = `Description: ${element?.body}`;
        getBox.append(createPara2, createHeading, createPara);
      });
    }
  } catch (err) {
    console.log("Error occur in post api:", err);
  }
};

fetchData();

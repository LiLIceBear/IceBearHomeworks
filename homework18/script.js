const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const postsXHR = new XMLHttpRequest();

postsXHR.open ("GET", `${BASE_URL}`);
postsXHR.responseType = "json";
postsXHR.send();

postsXHR.onload = () =>{
    // console.log('posts', postsXHR.response);
    const mappedTitle = postsXHR.response.map(function (item) {
        return item.postTitle
    }
    );
    console.log(item.postTitle);


    const mappedBody = postsXHR.response.map(item => (item.body));
    const postTitle = document.createElement("h1");
    postTitle.innerText = mappedTitle;
    const postBody = document.createElement("p");
    postBody.innerText = mappedBody;
    const postsContainer = document.createElement("div");
    postsContainer.innerHTML = "";
    postsContainer.append(postTitle, postBody);
    return mappedTitle
    // console.log("posts", postsContainer);
}

// const renderUser = () => {
//   console.log("user....");
 
// };

const handleFindUser = (event) => {
  event.preventDefault();

}

// result = renderUser();
// console.log("posts", result);
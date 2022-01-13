const container = document.getElementById("posts");

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const  getPostsXHR = new XMLHttpRequest();

getPostsXHR.open("GET", `${BASE_URL}`);
getPostsXHR.responseType = "json";
getPostsXHR.send();

getPostsXHR.onload = () =>{
    const {response} = getPostsXHR;
    renderPosts(response, container)
}

const renderPosts = (postsList, container ) =>{
const posts = postsList.map(({id, title,body}) =>{
    const postsContainer = document.createElement("div");
    postsContainer.id = id;
    postsContainer.classList.add("post")

    const titleElem = document.createElement("h3");
    const bodyElem = document.createElement("p");
    const commentsElem= document.createElement("div");
    const detailsBtn= document.createElement("button");

    commentsElem.classList.add("comments-container");
    detailsBtn.classList.add("btn");

    titleElem.innerText = title;
    bodyElem.innerText = body;
    detailsBtn.innerText = "Show comments";

    detailsBtn.addEventListener("click", (event) =>
        handleCommentsBtnClick(event, postsContainer))


    postsContainer.append(bodyElem, titleElem, commentsElem, detailsBtn);
    return postsContainer
}

const handleCommentsBtnClick = (event, post) =>{
    const {id} = post;
    const commentsContainer = document.getElementById(post.id).querySelector(".comments-container")
    if (post.hasAttribute("data-comments-shown", "")) {
        commentsContainer.innerHTML = "";
        post.removeAttribute("data-comments-shown");
        event.target.innerText = "Show comments;"
    } else{
        post.setAttribute("data-comments-shown", "");
        const commentsRequest = new XMLHttpRequest();
        commentsRequest.responseText("GET", `https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        commentsRequest.responseType = "json";
        commentsRequest.send();
        commentsRequest.onload = () =>{
            const {response} = commentsRequest;
            renderComments(response, commentsContainer);
            event.target.innerText = "hide comments"
        }
    }
};

const renderComments = (commentsList, commentsContainer) =>{
    const comments = commentsList.map(({ body})=>{
        const comment = document.createElement("p");
        comment.classList.add("comment");
        comment.innerText = body;
        return comment
    })
commentsContainer.append(...comments);
};

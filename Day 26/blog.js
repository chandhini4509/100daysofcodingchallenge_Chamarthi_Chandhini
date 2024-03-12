
const blogPost = {
    title: "The Benefits of JavaScript ES6 Features",
    author: "John Doe",
    date: "March 12, 2024",
    content: "ES6, also known as ECMAScript 2015, introduced several new features and enhancements to JavaScript. These features have greatly improved the readability, maintainability, and efficiency of JavaScript code. In this article, we will explore some of the key benefits of using ES6 features."
};


const { title, author, date, content } = blogPost;


const tags = ["JavaScript", "ES6", "Programming"];


const addTags = (...tags) => {
    return { ...blogPost, tags: [...tags] };
};

const taggedPost = addTags("Programming", "Development", "Web");

const displayPost = ({ title, author, date, content, tags }) => {
    return `
        <article>
            <h1>${title}</h1>
            <p>By ${author} | ${date}</p>
            <p>${content}</p>
            <p>Tags: ${tags.join(", ")}</p>
        </article>
    `;
};

document.getElementById("blog-post").innerHTML = displayPost(taggedPost);

const dropdownMenu = document.getElementById("dropdown");
const mainContent = document.getElementById("content");
const newArticle = document.getElementById("new-article-content");

function toggleDropdown() {
  const isShown = dropdownMenu.style.display !== "none";

  if (isShown) {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "flex";
  }
}

function addArticle () {
    const text = newArticle.value;
    const numberOfArticles = document.getElementsByClassName("article").length;
    const article = document.createElement("div");
    article.classList.add("article");
    const title = document.createElement("div");
    title.classList.add("title");
    const titleText = document.createElement("h1");
    titleText.innerText = `Article #${numberOfArticles + 1}`;
    title.appendChild(titleText);
    const articleContent = document.createElement("div");
    articleContent.classList.add("article-content");
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    articleContent.appendChild(paragraph);
    article.appendChild(title);
    article.appendChild(articleContent);
    mainContent.appendChild(article);
    newArticle.value = "";
}
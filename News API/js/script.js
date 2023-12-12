const API_KEY = "98c9bb1fd0ea4e3391414166dfae5c1f";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
  window.location.reload();
}

// async function fetchNews(query) {
//   const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//   const data = await res.json();
//   bindData(data.articles);
// }

// async function fetchNews(query) {
//   try {
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     if (!res.ok) {
//       throw new Error(`Network response was not ok: ${res.statusText}`);
//     }
//     const data = await res.json();
//     bindData(data.articles);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
async function fetchNews(query) {
  try {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    const data = await res.json();
    console.log("API Response:", data); // Log the response
    bindData(data.articles);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

function bindData(articles) {
  if (!articles || !Array.isArray(articles)) {
    console.error("Invalid data structure:", articles);
    return;
  }
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = "";

  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const newsImg = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDesc = cardClone.querySelector("#news-desc");

  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;

  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  newsSource.innerHTML = `${article.source.name} · ${date}`;

  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

let curSelectedNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  const navItem = document.getElementById(id);
  curSelectedNav?.classList.remove("active");
  curSelectedNav = navItem;
  curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
  const query = searchText.value;
  if (!query) return;
  fetchNews(query);
  curSelectedNav?.classList.remove("active");
  curSelectedNav = null;
});


// db4d2433cf454ee7a531eb34ba71a837;

var apiUrl =
  "https://newsdata.io/api/1/news?apikey=pub_43115fdfa0bd3ab65d9b674f3672cf152f315";

async function fetchNews() {
  console.log("fetching news ...")
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}


function renderArticles(articles) {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = ""; // Clear previous content
  articles.forEach((article) => {
    console.log(article)
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    const title = document.createElement("h2");
    title.textContent = article.title;

    const description = document.createElement("p");
    description.textContent = article.description;

    // Check if image URL is available
    if (article.image_url) {
      const image = document.createElement("img");
      image.src = article.image_url;
      image.alt = article.title;
      articleDiv.appendChild(image);
    }

    const link = document.createElement("a");
    link.href = article.link;
    link.textContent = "Read more";

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(link);

    newsContainer.appendChild(articleDiv);
  });
}

fetchNews()
  .then((articles) => {
    renderArticles(articles);
  })
  .catch((error) => console.error(error));
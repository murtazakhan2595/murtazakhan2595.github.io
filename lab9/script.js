// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}


// db4d2433cf454ee7a531eb34ba71a837;

var apiUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=db4d2433cf454ee7a531eb34ba71a837";

async function fetchNews() {
  console.log("fetching news ...")
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles.filter((article) => !isRemovedArticle(article));
    // return data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

function isRemovedArticle(article) {
  return (
    article.source.name === "[Removed]" ||
    !article.title ||
    !article.description
  );
}
// Example usage
fetchNews()
  .then((articles) => {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = ""; 
    articles.forEach((article) => {
      console.log(article)
      const articleDiv = document.createElement("div");
      articleDiv.classList.add("article");

      const title = document.createElement("h2");
      title.textContent = article.title;

      const description = document.createElement("p");
      description.textContent = article.description;

      const image = document.createElement("img");
      image.src = article.urlToImage;
      image.alt = article.title;

      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = "Read more";

      articleDiv.appendChild(title);
      articleDiv.appendChild(image);
      articleDiv.appendChild(description);
      articleDiv.appendChild(link);

      newsContainer.appendChild(articleDiv);
    });



  })
  .catch((error) => console.error(error));

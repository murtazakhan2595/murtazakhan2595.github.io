async function fetchRecipes() {
  // Retrieve recipes from local storage
  const storedRecipes = JSON.parse(localStorage.getItem("recipes"));

  // If there are stored recipes, update the global recipes array
  if (storedRecipes) {
    recipes = storedRecipes;
  }

  console.log("fetchRecipes", recipes);
  renderRecipes(recipes); // Render the fetched recipes
}

function renderRecipes(recipes) {
  const recipesList = document.getElementById("recipes");
  const searchInput = document.getElementById("searchInput");
  const searchQuery = searchInput.value.toLowerCase(); // Convert search query to lowercase for case-insensitive search
  recipesList.innerHTML = ""; // Clear existing content

    recipes.forEach((recipe) => {
      // Filter recipes based on search query
      if (recipe.title.toLowerCase().includes(searchQuery)) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
              <h3>${recipe.title}</h3>
              <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
              <p><strong>Instructions:</strong> ${recipe.instructions}</p>
              <button onclick="editRecipe(${recipe.id})">Edit</button>
              <button onclick="deleteRecipe(${recipe.id})">Delete</button>
            `;
        recipesList.appendChild(listItem);
      }
    });
}



// Function to add a new recipe via the backend API
async function addRecipe(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;

  console.log("addRecipe");
  console.log(title, ingredients, instructions);

  // Validate required fields
  if (
    title.trim() === "" ||
    ingredients.trim() === "" ||
    instructions.trim() === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  // Create new recipe object
  const recipe = {
    title,
    ingredients,
    instructions,
  };

  // Generate a unique ID for the new recipe
  const id = recipes.length > 0 ? recipes[recipes.length - 1].id + 1 : 1;
  recipe.id = id;
  recipes.push(recipe);
  console.log("recipes", recipes);
  // Save the updated recipes array to local storage
  localStorage.setItem("recipes", JSON.stringify(recipes));
  // Optionally, you can navigate back to the render page or update the UI
  window.location.href = 'index.html';
  // renderRecipes(recipes);
}

document.addEventListener("DOMContentLoaded", function () {
  const pageId = document.body.id;
  console.log("DOMContentLoaded", pageId);

  if (pageId === "createFormPage") {
    // Code specific to index.html
    // For example, you could check for the existence of specific elements
    const addRecipeForm = document.getElementById("addRecipeForm");
    if (addRecipeForm) {
      addRecipeForm.addEventListener("submit", addRecipe);
    }
  } else {
    // Call fetchRecipes when the page loads
    fetchRecipes();
  }
  // Add event listener for search input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    fetchRecipes(); // Re-render recipes on input change (search)
  });
});


function editRecipe(id) {
  // Find the recipe with the given ID
  const recipeToEdit = recipes.find((recipe) => recipe.id === id);

  // Save the recipe details in localStorage to access in the edit page
  localStorage.setItem("editRecipe", JSON.stringify(recipeToEdit));

  // Redirect the user to the edit page
  window.location.href = "edit.html";
}

function deleteRecipe(id){
  // Filter out the recipe with the given ID
  recipes = recipes.filter((recipe) => recipe.id !== id);

  // Save the updated recipes array to local storage
  localStorage.setItem("recipes", JSON.stringify(recipes));

  // Re-render the recipes
  renderRecipes(recipes);

}



let recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: "Spaghetti, eggs, pancetta, Parmesan cheese, black pepper",
    instructions:
      "1. Cook spaghetti according to package instructions. 2. In a separate pan, fry pancetta until crispy. 3. Beat eggs and mix in grated Parmesan cheese. 4. Drain spaghetti and toss with egg mixture and pancetta. 5. Serve with freshly ground black pepper.",
  },
  {
    id: 2,
    title: "Chocolate Chip Cookies",
    ingredients:
      "Butter, sugar, brown sugar, eggs, vanilla extract, flour, baking soda, salt, chocolate chips",
    instructions:
      "1. Preheat oven to 375°F (190°C). 2. Cream together butter, sugar, and brown sugar. 3. Beat in eggs and vanilla. 4. Combine flour, baking soda, and salt; gradually stir into the creamed mixture. 5. Stir in chocolate chips. 6. Drop by rounded spoonfuls onto ungreased cookie sheets. 7. Bake for 8 to 10 minutes or until lightly golden brown. 8. Let cookies cool on baking sheet for 5 minutes before transferring to wire racks to cool completely.",
  },
];

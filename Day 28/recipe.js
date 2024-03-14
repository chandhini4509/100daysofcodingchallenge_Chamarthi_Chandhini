document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultsSection = document.getElementById('results');

    searchBtn.addEventListener('click', function () {
      const query = searchInput.value.trim();
      if (query !== '') {
        searchRecipes(query);
      }
    });
  
   
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query !== '') {
          searchRecipes(query);
        }
      }
    });

    function searchRecipes(query) {
      // Fetch recipes from API based on query
    
      const apiKey = '79ae989522314b88a8b6609e6ac911bd';
      
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?querynumber=10&apiKey=${apiKey}`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          displayResults(data.results);
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
    }
  
    
    function displayResults(results) {
      resultsSection.innerHTML = ''; 
      if (results.length === 0) {
        resultsSection.innerHTML = '<p>No recipes found.</p>';
      } else {
        results.forEach(recipe => {
          const recipeCard = document.createElement('div');
          recipeCard.classList.add('recipe-card');
          recipeCard.innerHTML = `
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <img src="${recipe.image}" alt="${recipe.title}">
            <a href="${recipe.url}" target="_blank">View Recipe</a>
          `;
          resultsSection.appendChild(recipeCard);
        });
      }
    }
  });
  
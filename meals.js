const searchFood = () => {

    const searchfield=document.getElementById('search-field');
    const searchText = searchfield.value;
//console.log(searchText);

    searchfield.value =" ";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    //consol.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));



}

const displaySearchResult = meals => {
    //console.log(meals);
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
        </div>`;

        searchResult.appendChild(div);
    });
}
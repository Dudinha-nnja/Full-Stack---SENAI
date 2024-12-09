fetch('www.thecocktaildb.com/api/json/v1/1/search.php?f=a').then((response)=>{
return response.json()
}).then((data) => {
    console.log(data)
    listaDrinks = data.drinks

    listDrinks.forEach(drink => {
        document.querySelector('#resultados').innerHTML += `
        <img src="${drink.strDrinkThumb}">
        <h3>${drink.strDrink}</h3>
        `
    });

   
})
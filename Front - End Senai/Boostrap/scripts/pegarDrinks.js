async function buscaAlfabetica(letra) {
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpa os resultados anteriores

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letra}`);
        const data = await response.json();

        if (data.drinks) {
            data.drinks.forEach(drink => {
                const drinkElement = document.createElement('div');
                drinkElement.classList.add('drink-card');
                drinkElement.innerHTML = `
                    <h3>${drink.strDrink}</h3>
                    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" style="width: 100px; height: 100px; border-radius: 10px;">
                    <p>${drink.strInstructions}</p>
                `;
                resultados.appendChild(drinkElement);
            });
        } else {
            resultados.innerHTML = '<p>Nenhum drink encontrado com a letra "${letra}".</p>';
        }
    } catch (error) {
        console.error(`Erro ao buscar drinks com a letra ${letra}:`, error);
        resultados.innerHTML = '<p>Ocorreu um erro ao buscar os drinks. Tente novamente mais tarde.</p>';
    }
}


async function drinkAleatorio() {
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpa os resultados anteriores

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const data = await response.json();

        if (data.drinks) {
            data.drinks.forEach(drink => {
                const drinkElement = document.createElement('div');
                drinkElement.classList.add('drink-card');
                drinkElement.innerHTML = `
                    <h3>${drink.strDrink}</h3>
                    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" style="width: 100px; height: 100px; border-radius: 10px;">
                    <p>${drink.strInstructions}</p>
                `;
                resultados.appendChild(drinkElement);
            });
        } else {
            resultados.innerHTML = '<p>Nenhum drink encontrado.</p>';
        }
    } catch (error) {
        console.error('Erro ao buscar drink aleatório:', error);
        resultados.innerHTML = '<p>Ocorreu um erro ao buscar o drink aleatório. Tente novamente mais tarde.</p>';
    }
}


document.querySelector('#buscarBnt').addEventListener('click',buscaEspecifica)
function buscaEspecifica(){
    termo = document.querySelector('#pesquisar').value 

    document.querySelector('#resultados').innerHTML = ""
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita${termo}`).then((response)=>{
        return response.json()
        }).then((data) => {
            console.log(data)
            listaDrinks = data.drinks
        
            listaDrinks.forEach(drink => {
                document.querySelector('#resultados').innerHTML += `
                <img src="${drink.strDrinkThumb}">
                <h3>${drink.strDrink}</h3>
                `
            });
        })
}
async function buscaEspecifica() {
    const query = document.getElementById('pesquisar').value.trim();
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = ''; // Limpa os resultados anteriores

    if (!query) {
        resultados.innerHTML = '<p>Por favor, insira o nome de um drink.</p>';
        return;
    }

    try {
        // Fazendo a requisição para a API
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();

        if (data.drinks) {
            // Exibindo os resultados
            data.drinks.forEach(drink => {
                const drinkElement = document.createElement('div');
                drinkElement.classList.add('drink-card');
                drinkElement.innerHTML = `
                    <h3>${drink.strDrink}</h3>
                    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" style="width: 100px; height: 100px; border-radius: 10px;">
                    <p>${drink.strInstructions}</p>
                `;
                resultados.appendChild(drinkElement);
            });
        } else {
            resultados.innerHTML = '<p>Nenhum drink encontrado.</p>';
        }
    } catch (error) {
        console.error('Erro ao buscar drinks:', error);
        resultados.innerHTML = '<p>Ocorreu um erro ao buscar os drinks. Tente novamente mais tarde.</p>';
    }
}

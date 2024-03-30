// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список
// //     під час відображення.
function allRecipes(){
    let url = new URL('https://dummyjson.com/recipes')
    fetch(url)
        .then(res => res.json())
        .then(json =>{
            const {recipes} = json;
            const divRecipe = document.getElementById('recipes')
            for (const recipe of recipes) {
                const {ingredients, instructions} = recipe;
                const divRec = document.createElement('div');
                const name = document.createElement('h2');
                const titleIng = document.createElement('h3');
                const titleInstr =document.createElement('h3');
                const ulIng = document.createElement('ul');
                const ulInst = document.createElement('ul');

                name.innerText = recipe.name;
                titleIng.innerText = 'ingredients'
                titleInstr.innerText = 'instructions'

                divRecipe.appendChild(divRec)
                divRec.append(name, titleIng, ulIng, titleInstr, ulInst
                );

                for (const ingredient of ingredients) {
                    const li = document.createElement('li');
                    li.innerText = ingredient;
                    ulIng.appendChild(li);
                }
                for (const instruction of instructions) {
                    const li = document.createElement('li');
                    li.innerText = instruction;
                    ulInst.appendChild(li);
                }
            }
            
        })

}
allRecipes()
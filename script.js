const resultsDiv = document.getElementById("results")

async function fetchFuncionarios(){ 
    resultsDiv.innerHTML = "<p>Carregando...</p>"

    try {
        const response = await fetch('../Dados/data.json')
        const data = await response.json()

        if(data.error){
            resultsDiv.innerHTML = "<p> Erro ao buscar!</p>"
            return
        }
        resultsDiv.innerHTML = ''

        data.forEach(funcionarios => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${funcionarios.imagem}" alt="${funcionarios.nome}"
                <h2>${funcionarios.nome}</h2>
                <h4>${funcionarios.descricao}</h4>
                <p>${funcionarios.funcao}</p>
            `
            resultsDiv.appendChild(card)
            
            });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Erro ao buscar produtos!</p>"
    }
}
        

fetchFuncionarios()

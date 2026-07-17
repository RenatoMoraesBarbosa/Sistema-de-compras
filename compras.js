const produtos = [

    {
        nome: "Arroz",
        preco: 25,
        estoque: 5
    },

    {
        nome: "Feijão",
        preco: 10,
        estoque: 3
    },

    {
        nome: "Macarrão",
        preco: 8,
        estoque: 4
    },

    {
        nome: "Refrigerante",
        preco: 9,
        estoque: 2
    }

];

const valor_compra = [];

const botao = document.getElementById("mostrar");

botao.addEventListener("click", function() {
    const lista = document.getElementById("lista");
    lista.innerText = "";

    produtos.forEach((item) => {
        const div = document.createElement("div");

        const nome = document.createElement("h2");
        nome.innerText = item.nome;

        const preco = document.createElement("p");
        preco.innerText = `Preço: ${item.preco}`;

        const estoque = document.createElement("p");
        estoque.innerText = `Estoque: ${item.estoque}`;

        const comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        comprar.className = "comprar";

        const separador = document.createElement("p");
        separador.innerText = "------";

        div.appendChild(nome);
        div.appendChild(preco);
        div.appendChild(estoque);
        div.appendChild(comprar);
        div.appendChild(separador);

        lista.appendChild(div);

        const carrinho = document.getElementById("carrinho");

        comprar.addEventListener("click", function() {

            if (item.estoque > 0) {

<<<<<<< Updated upstream
                item.estoque--;
                estoque.innerText = `Estoque: ${item.estoque}`;
=======
            const item_carrinho = document.createElement("div");

            const texto = document.createElement("span");
            texto.innerText = `Produto: ${item.nome} - R$ ${item.preco}`;

            const remover = document.createElement("button");
            remover.innerText = "Remover";

            item_carrinho.appendChild(texto);
            item_carrinho.appendChild(remover);

            carrinho.appendChild(item_carrinho);

            remover.addEventListener("click", function() {
                item.estoque++;
                estoque.innerText = `Estoque: ${item.estoque}`;

                const indicePreco = valor_compra.indexOf(item.preco);
                
                if (indicePreco !== -1) {
                    valor_compra.splice(indicePreco, 1);
                }

                item_carrinho.remove();
            })
>>>>>>> Stashed changes

                const item_carrinho = document.createElement("div");

                const texto = document.createElement("span");
                texto.innerText = `Produto: ${item.nome} - R$ ${item.preco}`;

                const remover = document.createElement("button");
                remover.innerText = "Remover";

                item_carrinho.appendChild(texto);
                item_carrinho.appendChild(remover);

                carrinho.appendChild(item_carrinho);

                remover.addEventListener("click", function() {

                    item.estoque++;
                    estoque.innerText = `Estoque: ${item.estoque}`;

                    const indicePreco = valor_compra.indexOf(item.preco);

                    if (indicePreco !== -1) {
                        valor_compra.splice(indicePreco, 1);
                    }

                    item_carrinho.remove();

                });

                valor_compra.push(item.preco);

            } else {

                alert("Produto sem estoque!");

            }

        });

    });

});

const pagamento = document.getElementById("pagamento");

pagamento.addEventListener("click", function() {

    let soma = 0;

    const total = document.getElementById("total");

    for (let i = 0; i < valor_compra.length; i++) {
        soma += valor_compra[i];
    }

    total.innerText = `O valor da compra é: ${soma}`;

});

let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })

}
function listarPorCategoria(escolha) 
{ for (let i = 0; i < produtos.length; i++) 
    { 
        if (produtos[i].categoria == escolha) 
        {
             console.log(produtos[i]); 
        } 
    }
 } 
 let escolha = 'Escolar';
  listarPorCategoria(escolar);

  function listarPorValor(minValor, maxValor) {
    for (let i = 0; i < produtos.length; i++) {
      if (produtos[i].valor < minValor && produtos[i].valor > maxValor) {
        continue;
      } else if (produtos[i].valor >= minValor && produtos[i].valor <= maxValor) {
        console.log(produtos[i]);
      }
    }
  }
  
  listarPorValor(1, 1000);



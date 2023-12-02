import {
    desenharProdutoCarrinhoSimples,
    lerLocalStorage,
    apagarDoLocalStorage,
    salvarLocalStorage,
   } from "./src/utilidades";
   import {
    atualizarPrecoCarrinho,
    } from "./src/menuCarrinho";
  
  function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
      desenharProdutoCarrinhoSimples(
        idProduto,
        "container-produtos-checkout",
        idsProdutoCarrinhoComQuantidade[idProduto]
      );
  
    }
    atualizarPrecoCarrinho();
  
  }
  
  
  function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
      return;
    }
  
    const dataAtual = new Date();
    const pedidoFeito = {
      dataPedido: dataAtual,
      pedido: idsProdutoCarrinhoComQuantidade,
      
      
      
    };
    const historicoDePedidos = lerLocalStorage("historico") ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
  
    salvarLocalStorage("historico", historicoDePedidosAtualizado);
    apagarDoLocalStorage("carrinho");
  
    window.location.href = "./pedidos.html";
  }
  
  desenharProdutosCheckout();
  
  
  document.addEventListener("submit", (evt) => finalizarCompra(evt));
  
import{l as t,d,s as n,a as s}from"./utilidades-50d25114.js";import{b as c}from"./menuCarrinho-889c4e4c.js";function u(){const o=t("carrinho")??{};for(const a in o)d(a,"container-produtos-checkout",o[a]);c()}function h(o){o.preventDefault();const a=t("carrinho")??{};if(Object.keys(a).length===0)return;const r={dataPedido:new Date,pedido:a},i=t("historico")??[],e=[r,...i];n("historico",e),s("carrinho"),window.location.href="./pedidos.html"}u();document.addEventListener("submit",o=>h(o));

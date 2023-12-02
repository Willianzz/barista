(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const n=[{id:"1",nome:"Café Mocha",preco:7,imagem:"cafe-1.jpg",bebida:!1},{id:"2",nome:"Café Cappuccino",preco:7,imagem:"cafe-2.jpg",bebida:!1},{id:"3",nome:"Café Expresso",preco:7,imagem:"cafe-3.jpg",bebida:!1},{id:"4",nome:"Café Macchiato",preco:7,imagem:"cafe-4.jpg",bebida:!1},{id:"5",nome:"Café com Leite",preco:7,imagem:"cafe-5.jpg",bebida:!1},{id:"6",nome:"Café Grande",preco:7,imagem:"cafe-6.jpg",bebida:!1},{id:"27",nome:"Café com Chantilly",preco:7,imagem:"cafe-7.jpg",bebida:!1},{id:"7",nome:"Pão Doce",preco:5,imagem:"salgaldo-1.jpg",bebida:!0},{id:"8",nome:"Pão Recheado",preco:5,imagem:"salgaldo-2.jpg",bebida:!0},{id:"9",nome:"Coxinha de Frango",preco:5,imagem:"salgaldo-3.jpg",bebida:!0},{id:"10",nome:"Beirute",preco:5,imagem:"salgaldo-4.jpg",bebida:!0},{id:"11",nome:"Pão Cremoso",preco:5,imagem:"salgaldo-6.jpg",bebida:!0},{id:"13",nome:"Pão de Queijo ",preco:8,imagem:"salgaldo-7.jpg",bebida:!0},{id:"14",nome:"Pão de Queijo Recheado",preco:9,imagem:"salgaldo-8.jpg",bebida:!0},{id:"15",nome:"Lanche X-Salada",preco:5,imagem:"salgaldo-9.jpg",bebida:!0},{id:"16",nome:"Pão de Frios",preco:7,imagem:"salgaldo-10.jpg",bebida:!0},{id:"17",nome:"Cupcake com Gotas de Chocolate",preco:5,imagem:"salgaldo-11.jpg",bebida:!0},{id:"18",nome:"Croissant Salgado",preco:8,imagem:"salgaldo-12.jpg",bebida:!0},{id:"19",nome:"Esfiha de Carne",preco:8,imagem:"salgaldo-13.jpg",bebida:!0},{id:"33",nome:"Sanduíche Natural",preco:7,imagem:"salgaldo-14.jpg",bebida:!0},{id:"35",nome:"Coxinha de Frango com Catupiry",preco:7,imagem:"salgaldo-15.jpg",bebida:!0},{id:"36",nome:"Misto Quente",preco:7,imagem:"salgaldo-16.jpg",bebida:!0},{id:"37",nome:"Baguete Recheada",preco:5,imagem:"salgaldo-17.jpg",bebida:!0},{id:"20",nome:"Fanta Laranja",preco:7,imagem:"refri-1.jpg",bebida:!1},{id:"21",nome:"Schweppers",preco:7,imagem:"refri-2.jpg",bebida:!1},{id:"22",nome:"Guaraná Antarctica",preco:7,imagem:"refri-3.jpg",bebida:!1},{id:"23",nome:"Coca Cola",preco:7,imagem:"refri-4.jpg",bebida:!1},{id:"38",nome:"Fanta Uva",preco:7,imagem:"refri-5.jpg",bebida:!1},{id:"39",nome:"Guaraná Sprite",preco:7,imagem:"refri-6.jpg",bebida:!1},{id:"40",nome:"Sucos Naturais",preco:7,imagem:"refri-7.jpg",bebida:!1},{id:"28",nome:"Rosca Recheada",preco:7,imagem:"doce-1.jpg",bebida:!0},{id:"24",nome:"Cupcake Recheados",preco:8,imagem:"doce-2.jpg",bebida:!0},{id:"25",nome:"Bolo  de Abacaxi Pedaço",preco:8,imagem:"doce-5.jpg",bebida:!0},{id:"26",nome:"Bolo de Coco Recheado Pedaço",preco:8,imagem:"doce-6.jpg",bebida:!0},{id:"29",nome:"Bolo de Chocolate Pedaço",preco:8,imagem:"doce-7.jpg",bebida:!0},{id:"30",nome:"Carolina Doce de Leite",preco:8,imagem:"doce-8.jpg",bebida:!0},{id:"31",nome:"Sonho Doce de Leite",preco:8,imagem:"doce-9.jpg",bebida:!0},{id:"32",nome:"Torta de Morango",preco:9,imagem:"doce-10.jpg",bebida:!0}];function s(o,r){localStorage.setItem(o,JSON.stringify(r))}function l(o){return JSON.parse(localStorage.getItem(o))}function g(o){localStorage.removeItem(o)}function p(o,r,t){const i=n.find(c=>c.id===o),e=document.getElementById(r),a=document.createElement("article"),d=["flex","bg-stone-200","rounded-lg","p-1","relative","mb-2","w-96"];for(const c of d)a.classList.add(c);const m=`
      <img
        src="/barista/img/${i.imagem}"
        alt="Carrinho: ${i.nome}"
        class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">
          ${i.nome}
        </p>
        <p class="text-green-700 text-lg">$${i.preco}</p>
      </div>
      <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
          <p id='quantidade-${i.id}' class='ml-2'>${t}</p>
      </div>`;a.innerHTML=m,e.appendChild(a)}export{g as a,n as c,p as d,l,s};

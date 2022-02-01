console.log ("\nExercício 4 - categoria eletrodomestico")

var produtos =  [
      { produto: "geladeira", categoria: "eletrodomestico", valor: 1432.67 },
      { produto: "fogao", categoria: "eletrodomestico", valor: 852.11 },
      { produto: "microondas", categoria: "eletrodomestico", valor: 933.42 },
      { produto: "liquidificador", categoria: "eletrodomestico", valor: 187.24 },
      { produto: "xiaomi", categoria: "smartphone", valor: 1375.66 },
      { produto: "iphone", categoria: "smartphone", valor: 8432.92 },
      { produto: "samsung", categoria: "smartphone", valor: 4221.44 },
      { produto: "lg", categoria: "smartphone", valor: 1224.88 },
      { produto: "sofa", categoria: "moveis", valor: 3745.61 },
      { produto: "mesa", categoria: "moveis", valor: 3111.82 },
      { produto: "cadeira", categoria: "moveis", valor: 329.41 }
  ]
  
var categoriaeletrodomestico = "", desconto;

for(var i = 0; i < produtos.length; i++){
    if(produtos[i].categoria === "eletrodomestico"){
        if(produtos[i].valor > 1000){               
        desconto = (produtos[i].valor - produtos[i].valor * 0.1);
        categoriaeletrodomestico = (categoriaeletrodomestico + "\n" + produtos[i].produto +
         ": $ "+ desconto.toFixed(2));
    }
        if(produtos[i].valor > 500 && produtos[i].valor < 1000){               
        desconto = (produtos[i].valor - produtos[i].valor * 0.07);
        categoriaeletrodomestico = (categoriaeletrodomestico + "\n" + produtos[i].produto +
         ": $ "+ desconto.toFixed(2));
    }           
        if(produtos[i].valor < 500){
        desconto = (produtos[i].valor - produtos[i].valor * 0.05);
        categoriaeletrodomestico = (categoriaeletrodomestico + "\n" + produtos[i].produto +
         ": $ "+ desconto.toFixed(2));
    }
}    
    }
    console.log(categoriaeletrodomestico);

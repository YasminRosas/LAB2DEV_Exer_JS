console.log ("Exercício 5 - média das categoria")

var produtos = [
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
  
  var categoriaeletrodomestico = 0,quanteletro = 0,mediaeletrodomestico,
        categoriasmartphone = 0, quantsmart = 0,mediasmartphone,
        categoriamoveis = 0, quantmoveis = 0, mediamoveis;
          
  for (var i = 0; i < produtos.length; i++) {

              if(produtos[i].categoria === "eletrodomestico"){
                categoriaeletrodomestico = produtos[i].valor + categoriaeletrodomestico;
                quanteletro++;
               mediaeletrodomestico = categoriaeletrodomestico / quanteletro;
                }
              if(produtos[i].categoria === "smartphone"){
                categoriasmartphone = produtos[i].valor + categoriasmartphone;
                quantsmart++;
               mediasmartphone = categoriasmartphone / quantsmart;
              
                }   
                if(produtos[i].categoria === "moveis"){
                    categoriamoveis = produtos[i].valor + categoriamoveis;
                    quantmoveis++;
                   mediamoveis = categoriamoveis / quantmoveis;
                    }  
                } 
                console.log("Eletrodoméstico: $ " + mediaeletrodomestico.toFixed(2) + "\n" + 
                "Smartphone: $ " + mediasmartphone.toFixed(2) + "\n" + "Móveis: $ " + mediamoveis.toFixed(2));
  
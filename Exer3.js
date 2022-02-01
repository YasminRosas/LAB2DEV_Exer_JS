   
   /*Tentei usar function e o filter, porém estava retornando apenas a categoria,
    e Math.max não estava retornando o valor, então estruturei com os if que foi
    a meneira que deu certo
   */
   console.log ("Exercício 3 - Produto mais caro de cada categoria")

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

var valoreletrodomestico = 0, produtoEletro, 
valorsmart = 0, produtoSmart, valormoveis = 0, produtoMov;
    
for (var i = 0; i < produtos.length; i++) {
                /*Eletrodoméstico*/
            if(produtos[i].categoria === "eletrodomestico" && valoreletrodomestico === 0){
            valoreletrodomestico = produtos[i].valor;
            produtoEletro = produtos[i].produto;
            } if(produtos[i].categoria === "eletrodomestico" ){  
                if ( valoreletrodomestico < produtos[i].valor){
                    valoreletrodomestico = produtos[i].valor
                 produtoEletro = produtos[i].produto;
                 }}
                 /*Smarthphone*/
            if(produtos[i].categoria === "smartphone" && valorsmart === 0){  
            valorsmart = produtos[i].valor;
            produtoSmart = produtos[i].produto;
            }  if(produtos[i].categoria === "smartphone" ){  
               if ( valorsmart < produtos[i].valor){
                valorsmart = produtos[i].valor
                produtoSmart = produtos[i].produto;
                }}
                /*Móveis*/
           if(produtos[i].categoria === "moveis" && valormoveis === 0){
            valormoveis = produtos[i].valor;
            produtoMov = produtos[i].produto;
            }  if(produtos[i].categoria === "moveis" ){  
                if ( valormoveis < produtos[i].valor){
                valormoveis = produtos[i].valor
                produtoMov = produtos[i].produto;
                 }}
        }
            console.log(produtoEletro + "\n" + produtoSmart + "\n" + produtoMov);
        

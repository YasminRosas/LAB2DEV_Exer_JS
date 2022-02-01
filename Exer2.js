console.log("Exercício 2 - Horas, Minutos e Segundos");

function Relogio(){
    var data = new Date(), 
        horas = data.getHours(),
        minutos = data.getMinutes(),
        segundos = data.getSeconds();
        
        if(horas < 10){
            horas = "0" + horas;
        }
        if(minutos < 10){
            minutos = "0" + minutos;
        }
        if(segundos < 10){
            segundos = "0" + segundos;
        }
        
       console.log(horas + ":" + minutos + ":" + segundos);
}
     timer = setInterval(Relogio,1000);
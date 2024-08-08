function calcularCustoViage(distancia, eficiencia, precoGasolina, velMedia){
    let tempoViagem = distancia / velMedia;
    let consumoCombus = distancia / eficiencia;
    let custoTotal = consumoCombus * precoGasolina;
    console.log(tempoViagem)
    console.log(consumoCombus)
    console.log(custoTotal)
    return custoTotal;
    
    
}

calcularCustoViage(250, 20, 4.60, 75, );





/*function somaNumeros(numero1, numero2){
    let soma =  numero1 + numero2
    console.log(soma)
}

somaNumeros(2, 3);*/
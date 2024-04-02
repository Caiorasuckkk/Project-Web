//tratamento de eventos
document.querySelector("#comodos").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)




function calcular(){
    
    // DOM - Document Object Model
    const qtdeDeQuartos = document.querySelector("#comodos").value
    let valor = qtdeDeQuartos * 10000
    
    const tipo = document.querySelector("#tipo").value   
    if(tipo == 2)  valor += 20000
    if(tipo == 3)  valor += 30000
    if(tipo == 4)  valor += 40000
    if(tipo == 5)  valor += 50000   
    if(tipo == 6)  valor += 60000
    if(tipo == 7)  valor += 20000
    

    
    


   
    
    document.querySelector("#valor").innerText = "R$ " + valor.toFixed(2)
    
}
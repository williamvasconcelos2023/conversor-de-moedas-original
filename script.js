
const button = document.querySelector(".meu-button")
const select1 = document.querySelector(".select-1")
const select2 = document.querySelector(".select-2")




function valorParaConverter(){
    
const input = document.querySelector(".meu-input").value
const myValorConverter = document.querySelector(".valor-para-converter")
const myValorConvertido = document.querySelector(".valor-convertido")

const dolarToday = 4.92
const euroToday = 5.27
const realToday = 1
const libraToday = 6.1
const bitcoinToday = 181.96028


if(select1.value == "real" && select2.value == "real"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("pt-BR",{
    style: "currency",
    currency: "BRL" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"

}).format(input)

}


if(select1.value == "real" && select2.value == "dolar"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("pt-BR",{
    style: "currency",
    currency: "BRL" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"

}).format(input / dolarToday)

}



if(select1.value == "real" && select2.value == "euro"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("pt-BR",{
    style: "currency",
    currency: "BRL" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"

}).format(input / euroToday)

}


if(select1.value == "real" && select2.value == "libra"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("pt-BR",{
    style: "currency",
    currency: "BRL" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"

}).format(input / libraToday)

}


if(select1.value == "real" && select2.value == "bitcoin"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("pt-BR",{
    style: "currency",
    currency: "BRL" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"

}).format( input / bitcoinToday)

}



// CONVERSÃO REAL----------------------------------------------------------------------------


if(select1.value == "dolar" && select2.value == "dolar"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-US",{
    style: "currency",
    currency: "USD" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"

}).format(input)

}


if(select1.value == "dolar" && select2.value == "real"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-US",{
    style: "currency",
    currency: "USD" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

}).format(input * dolarToday)

}


if(select1.value == "dolar" && select2.value == "euro"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-US",{
    style: "currency",
    currency: "USD" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"

}).format(input * dolarToday / euroToday)

}



if(select1.value == "dolar" && select2.value == "libra"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-US",{
    style: "currency",
    currency: "USD" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"

}).format(input * dolarToday / libraToday)

}



if(select1.value == "dolar" && select2.value == "bitcoin"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-US",{
    style: "currency",
    currency: "USD" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"

}).format(input * dolarToday / bitcoinToday)

}



// CONVERSÃO EURO-----------------------------------------------------------------------------





if(select1.value == "euro" && select2.value == "euro"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "EUR" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"

}).format(input)

}





if(select1.value == "euro" && select2.value == "real"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "EUR" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

}).format(input * euroToday)

}



if(select1.value == "euro" && select2.value == "dolar"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "EUR" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"

}).format(input * euroToday / dolarToday)

}



if(select1.value == "euro" && select2.value == "libra"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "EUR" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"

}).format(input * euroToday / libraToday)

}



if(select1.value == "euro" && select2.value == "bitcoin"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "EUR" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"

}).format(input * euroToday / bitcoinToday)

}



//CONVERSÃO LIBRA----------------------------------------------



if(select1.value == "libra" && select2.value == "libra"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-GB",{
    style: "currency",
    currency: "GBP" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"

}).format(input)

}



if(select1.value == "libra" && select2.value == "real"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-GB",{
    style: "currency",
    currency: "GBP" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

}).format(input * euroToday)

}





if(select1.value == "libra" && select2.value == "dolar"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-GB",{
    style: "currency",
    currency: "GBP" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"

}).format(input * libraToday / dolarToday)

}


if(select1.value == "libra" && select2.value == "euro"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-GB",{
    style: "currency",
    currency: "GBP" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"

}).format(input * libraToday / euroToday)

}




if(select1.value == "libra" && select2.value == "bitcoin"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("en-GB",{
    style: "currency",
    currency: "GBP" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"

}).format(input * libraToday / bitcoinToday)

}



//CONVERSÃO BITCOIN--------------------------------------------------------------

if(select1.value == "bitcoin" && select2.value == "bitcoin"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "BTC" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"

}).format(input)

}





if(select1.value == "bitcoin" && select2.value == "real"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "BTC" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

}).format(input * bitcoinToday / realToday)

}


if(select1.value == "bitcoin" && select2.value == "dolar"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "BTC" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"

}).format(input * dolarToday / bitcoinToday)

}



if(select1.value == "bitcoin" && select2.value == "euro"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "BTC" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"

}).format(input * euroToday / bitcoinToday)

}





if(select1.value == "bitcoin" && select2.value == "libra"){
    const valorprimeiro = myValorConverter
    const valorsegundo = myValorConvertido

    valorprimeiro.innerHTML = new Intl.NumberFormat ("de-DE",{
    style: "currency",
    currency: "BTC" 

}).format(input)
    
    valorsegundo.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"

}).format(input * libraToday / bitcoinToday)

}
}







function nomesELogosCima(){


const myImgCima = document.querySelector(".minha-imagem-cima")
const myNomeCima = document.querySelector(".meu-nome-cima")


if(select1.value == "real"){
    myImgCima.src="./img/real.png"
    myNomeCima.innerHTML = "Real Brasileiro"   
}

if(select1.value == "dolar"){
    myImgCima.src="./img/usd.png"
    myNomeCima.innerHTML = "Dolar Americano"   
}

if(select1.value == "euro"){
    myImgCima.src="./img/euro.png"
    myNomeCima.innerHTML = "Euro"   
}


if(select1.value == "libra"){
    myImgCima.src="./img/libra.png"
    myNomeCima.innerHTML = "Libra Esterlina"   
}


if(select1.value == "bitcoin"){
    myImgCima.src="./img/bitcoin.png"
    myNomeCima.innerHTML = "Bitcoin"   
}




valorParaConverter()



}

function nomesELogosBaixo(){

const mynomebaixo = document.querySelector(".meu-nome-baixo")
const myimgbaixo = document.querySelector(".minha-imagem-baixo")




    if(select2.value == "real"){
        myimgbaixo.src="./img/real.png"
        mynomebaixo.innerHTML = "Real Brasileiro"   
    }

    if(select2.value == "dolar"){
        myimgbaixo.src="./img/usd.png"
        mynomebaixo.innerHTML = "Dolar Americano"   
    }



    if(select2.value == "euro"){
        myimgbaixo.src="./img/euro.png"
        mynomebaixo.innerHTML = "Euro"   
    }


    if(select2.value == "libra"){
        myimgbaixo.src="./img/libra.png"
        mynomebaixo.innerHTML = "Libra Esterlina"   
    }

    
    if(select2.value == "bitcoin"){
        myimgbaixo.src="./img/bitcoin.png"
        mynomebaixo.innerHTML = "Bitcoin"   
    }


    valorParaConverter()

}




button.addEventListener("click",valorParaConverter)
select1.addEventListener("change",nomesELogosCima)
select2.addEventListener("change",nomesELogosBaixo)
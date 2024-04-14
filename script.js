const convertButton = document.querySelector(".convert-button") // Criando variável / função... pode ser através do ONCLICK
const currencySelect = document.querySelector(".currency-select") // Select 2 (Outras Moedas)


function convertValues(){                 //  Função 
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const realToday = 1
    const dolarToday = 5.12
    const euroToday = 5.46
    const libraToday = 6.38
    const bitcoinToday = 327.43479


    if(currencySelect.value == "real2"){ // Mudar texto "real2" a partir input
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { 
            style: "currency",
            currency: "BRL"       
        }).format(inputCurrencyValue / realToday) 
    }
    if(currencySelect.value == "dolar"){ // Select estiver "dolar" ele entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"       
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){ // Select estiver "euro" ele entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"       
        }).format(inputCurrencyValue / euroToday)
    }
    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        }).format(inputCurrencyValue / libraToday)
    }
    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'BTC',
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { // Mudar texto "Real" a partir input
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency(){ // troca de select, muda imagem e nome
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".img-dolar")

    if(currencySelect.value == "real2"){
        currencyName.innerHTML = "Real"
        currencyImg.src = "./Assets/brasil 2.png"
    }
    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./Assets/estados-unidos (1) 1.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./Assets/libra 1.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/bitcoin 1.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency) // Change - troca (Toda vez que tiver troca, ele irá avisar)
convertButton.addEventListener("click", convertValues) // Ouvinte de Eventos, no caso o "Click" da function acima

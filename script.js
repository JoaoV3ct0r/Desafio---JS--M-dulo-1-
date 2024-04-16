const convertButton = document.querySelector(".convert-button") // Criando variável / função... pode ser através do ONCLICK
const currencySelect = document.querySelector(".currency-select") // outras moedas
const currencySelect2 = document.querySelector(".currency-select2") // outras moedas


function convertValues() {               //  Função 
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

    const realToday = 1
    const dolarToday = 5.12
    const euroToday = 5.46
    const libraToday = 6.38
    const bitcoinToday = 327434.79

    if (currencySelect.value == "real") {
        document.querySelector(".input-currency").placeholder = "R$ 1.000,00"
    }
    if (currencySelect.value == "dolar") {
        document.querySelector(".input-currency").placeholder = "$ 1.000,00"
    }
    if (currencySelect.value == "euro") {
        document.querySelector(".input-currency").placeholder = "1.000,00 €"
    }
    if (currencySelect.value == "libra") {
        document.querySelector(".input-currency").placeholder = "£ 1.000,00"
    }
    if (currencySelect.value == "bitcoin") {
        document.querySelector(".input-currency").placeholder = "1.000,00 BTC"
    }


    //////////////////////////////////////// REAL
    if (currencySelect.value == "real" && currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue / realToday)
    }

    if (currencySelect.value == "real" && currencySelect2.value == "dolar2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "real" && currencySelect2.value == "euro2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "real" && currencySelect2.value == "libra2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "real" && currencySelect2.value == "bitcoin2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday)
    }


    /////////////////////////////////// DOLAR
    if (currencySelect.value == "dolar" && currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currencySelect.value == "dolar" && currencySelect2.value == "dolar2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "dolar" && currencySelect2.value == "euro2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue * (dolarToday / euroToday))
    }

    if (currencySelect.value == "dolar" && currencySelect2.value == "libra2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue * (dolarToday / libraToday))
    }

    if (currencySelect.value == "dolar" && currencySelect2.value == "bitcoin2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue * (dolarToday / bitcoinToday))
    }




/////////////////////////////////// EURO
       if (currencySelect.value == "euro" && currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySelect.value == "euro" && currencySelect2.value == "dolar2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue * (dolarToday / euroToday))
    }

    if (currencySelect.value == "euro" && currencySelect2.value == "euro2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "euro" && currencySelect2.value == "libra2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue * (euroToday / libraToday))
    }

    if (currencySelect.value == "euro" && currencySelect2.value == "bitcoin2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue * (euroToday / bitcoinToday))
    }



/////////////////////////////////// LIBRA
    if (currencySelect.value == "libra" && currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue * libraToday)
    }

    if (currencySelect.value == "libra" && currencySelect2.value == "dolar2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue * (dolarToday / libraToday))
    }

    if (currencySelect.value == "libra" && currencySelect2.value == "euro2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue * (euroToday / libraToday))
    }

    if (currencySelect.value == "libra" && currencySelect2.value == "libra2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "libra" && currencySelect2.value == "bitcoin2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue * (libraToday / bitcoinToday))
    }



/////////////////////////////////// BITCOIN
    if (currencySelect.value == "bitcoin" && currencySelect2.value == "real2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue * bitcoinToday)
    }

    if (currencySelect.value == "bitcoin" && currencySelect2.value == "dolar2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue * (bitcoinToday / dolarToday))
    }

    if (currencySelect.value == "bitcoin" && currencySelect2.value == "euro2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue * (bitcoinToday / euroToday))
    }

    if (currencySelect.value == "bitcoin" && currencySelect2.value == "libra2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue * (bitcoinToday / libraToday))
    }

    if (currencySelect.value == "bitcoin" && currencySelect2.value == "bitcoin2") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
    }

}



function changeCurrency() { // troca de select, muda imagem e nome
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".img-real")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./Assets/brasil 2.png"
    }
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./Assets/estados-unidos (1) 1.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./Assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./Assets/libra 1.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./Assets/bitcoin 1.png"
    }

    convertValues()
}

function changeCurrency2() { // troca de select, muda imagem e nome
    const currencyName2 = document.querySelector("#currency-name2")
    const currencyImg2 = document.querySelector(".img-dolar")

    if (currencySelect2.value == "real2") {
        currencyName2.innerHTML = "Real"
        currencyImg2.src = "./Assets/brasil 2.png"
    }
    if (currencySelect2.value == "dolar2") {
        currencyName2.innerHTML = "Dólar"
        currencyImg2.src = "./Assets/estados-unidos (1) 1.png"
    }
    if (currencySelect2.value == "euro2") {
        currencyName2.innerHTML = "Euro"
        currencyImg2.src = "./Assets/euro.png"
    }
    if (currencySelect2.value == "libra2") {
        currencyName2.innerHTML = "Libra"
        currencyImg2.src = "./Assets/libra 1.png"
    }
    if (currencySelect2.value == "bitcoin2") {
        currencyName2.innerHTML = "Bitcoin"
        currencyImg2.src = "./Assets/bitcoin 1.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency) // Change - troca (Toda vez que tiver troca, ele irá avisar)
currencySelect2.addEventListener("change", changeCurrency2) // Change - troca (Toda vez que tiver troca, ele irá avisar)
convertButton.addEventListener("click", convertValues) // Ouvinte de Eventos, no caso o "Click" da function acima
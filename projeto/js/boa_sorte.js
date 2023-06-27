function calcular_imc() {
    let form = document.querySelector('.form')
    let resultado = document.querySelector('.resultado')
    let classificacao = document.querySelector('.classificacao')

    let pessoas = []
    let nome = form.querySelector('.caixa_nome')
    let sobrenome = form.querySelector('.caixa_sobrenome')
    let peso = form.querySelector('#input_peso')
    let altura = form.querySelector('#input_altura')

    function recebeEventoForm(evento) {
        evento.preventDefault()

        let inputcaixa_peso = Number(peso.value)
        let inputcaixa_altura = Number(altura.value)

        if (isNaN(inputcaixa_peso) || isNaN(inputcaixa_altura) || inputcaixa_peso <= 0 || inputcaixa_altura <= 0) {
            alert('Por favor, preencha corretamente os campos de peso e altura.')
            return
        }

        let imc = getimc(inputcaixa_peso, inputcaixa_altura)
        let nivel = getnivel(imc)

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
            imc: imc,
            nivel: nivel
        })

        console.log(pessoas)
        resultado.innerHTML = '<p>' + "Nome: " + nome.value + " " + sobrenome.value + '</p>'
        informar_peso.innerHTML = '<p>Peso: ' + peso.value + ' kg</p>';
        informar_altura.innerHTML = '<p>Altura: ' + altura.value + ' m</p>';
        informar_imc.innerHTML = '<p>IMC: ' + imc + '</p>';

        classificacao.innerHTML = '<p>Classificacao: ' + nivel + '</p>'
    }

    form.addEventListener('submit', recebeEventoForm)

    function getimc(inputcaixa_peso, inputcaixa_altura) {
        let imc = inputcaixa_peso / (inputcaixa_altura ** 2)
        return imc.toFixed(2)
    }

    function getnivel(imc) {
        let nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"]

        if (imc >= 39.9) return nivel[5]
        if (imc >= 34.9) return nivel[4]
        if (imc >= 29.9) return nivel[3]
        if (imc >= 24.9) return nivel[2]
        if (imc >= 18.5) return nivel[1]
        if (imc < 18.5) return nivel[0]
    }
}

window.addEventListener('DOMContentLoaded', calcular_imc)

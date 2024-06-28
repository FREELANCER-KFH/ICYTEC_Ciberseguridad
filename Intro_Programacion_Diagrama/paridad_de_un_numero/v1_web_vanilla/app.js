const calcularParidad = () => {
    const numero = parseInt(document.getElementById('txtNumero').value)
    const resultado = document.getElementById('lblResultado')

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            resultado.textContent = "El número es par."
        } else {
            resultado.textContent = "El número es impar."
        }
    } else {
        resultado.textContent = "Por favor, ingrese un número entero válido."
    }
}

const btnCalculadora = document.getElementById('btnCalculadora')
btnCalculadora.addEventListener('click', calcularParidad)

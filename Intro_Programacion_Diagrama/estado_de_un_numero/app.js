const calcular = () => {
    const numero = parseInt(document.getElementById('txtNumero').value)
    const resultado = document.getElementById('lblResultado')

    if (!isNaN(numero)) {
        if (numero > 0) {
            resultado.textContent = "El número es positivo."
        } else if (numero < 0) {
            resultado.textContent = "El número es negativo."
        } else {
            resultado.textContent = "El número es cero."
        }
    } else {
        resultado.textContent = "Por favor, ingrese un número entero válido."
    }
}

const btnCalculadora = document.getElementById('btnCalculadora')
btnCalculadora.addEventListener('click', calcular)

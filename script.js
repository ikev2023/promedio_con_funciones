function promedio(num1, num2, num3, num4, num5) {
    let resul;
    resul = (num1 + num2 + num3 + num4 + num5) / 5;
    return resul;
}

function mostrar() {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let c = parseFloat(document.getElementById("n3").value);
    let d = parseFloat(document.getElementById("n4").value);
    let e = parseFloat(document.getElementById("n5").value);

    document.getElementById("resul").innerText = "El promedio es: " + promedio(a, b, c, d, e)
}
function nuevo() {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    document.getElementById("resul").innerText = ""
    document.getElementById("n1").focus()
}
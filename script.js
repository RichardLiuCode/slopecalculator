document.getElementById("calc").addEventListener("click", function () {
    let y2 = parseFloat(document.getElementById("y2").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let x1 = parseFloat(document.getElementById("x1").value);
    let result = (y2 - y1) / (x2 - x1);
    document.getElementById("display").value = result;
})
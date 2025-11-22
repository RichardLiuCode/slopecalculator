document.getElementById("calc").addEventListener("click", function () {
    let y2 = document.getElementById("y2").value;
    let y1 = document.getElementById("y1").value;
    let x2 = document.getElementById("x2").value;
    let x1 = document.getElementById("x1").value;
    let result = (y2 - y1) * (x2 - x1);
    document.getElementById("display").value = result;
})
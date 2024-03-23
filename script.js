function add(x) {
    document.getElementById("resultArea").innerHTML = document.getElementById("resultArea").innerHTML + x
}
function clean() {
    document.getElementById("resultArea").innerHTML =  ""
}
function back() {
    var result = document.getElementById("resultArea").innerHTML;
    document.getElementById("resultArea").innerHTML = result.substring(0, result.length -1)
}
function calcular() {
    var result = document.getElementById("resultArea").innerHTML;
    if (result) {
        document.getElementById("resultArea").innerHTML = eval(result);
    }else {
        document.getElementById("resultArea").innerHTML = "nada"
    }

}
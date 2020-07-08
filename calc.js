document.body.style.backgroundColor='purple';
"purple"
function dis(val) {
    document.getElementById('result').value += val;
}
function solve() {
    var a = document.getElementById('result').value;
    var b = eval(a);
    document.getElementById('result').value = b;
}
function clr() {
    document.getElementById('result').value = '';
}
function power() {
    a1 = document.getElementById('result').value;
    b1 = eval(Math.pow(a1, 2));
    document.getElementById('result').value = b1;
}















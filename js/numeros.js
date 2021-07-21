let one = document.getElementById("one"),
two = document.getElementById("two"),
three =document.getElementById("three"),
four = document.getElementById("four"),
five = document.getElementById("five"),
six = document.getElementById("six"),
seven = document.getElementById("seven"),
eight = document.getElementById("eight"),
nine = document.getElementById("nine"),
zero = document.getElementById("zero"),
plus = document.getElementById("plus"),
rest = document.getElementById("rest"),
product = document.getElementById("product"),
divide = document.getElementById("divide"),
operator = document.getElementById("operator"),
box1=document.getElementById("box1"),
clean=document.getElementById("clean"),
signo;
let r,va1,va2;
;

function v1(n){
n=1;
box1.value=box1.value+n;

}
function v2(n){
    n=2;
    box1.value+=n;
}
function v3(n){
    n=3;
    box1.value+=n;
}
function v4(n){
    n=4;
    box1.value+=n;
}
function v5(n){
    n=5;
    box1.value+=n;
}
function v6(n){
    n=6;
    box1.value+=n;
}
function v7(n){
    n=7;
    box1.value+=n;
}
function v8(n){
    n=8;
    box1.value+=n;
}
function v9(n){
    n=9;
    box1.value+=n;
}
function v0(n){
    n=0;
    box1.value+=n;
}

function plus_f(){
va1=box1.value;
va1=parseFloat(va1);
box1.value="";
signo="+";
}
function rest_f(){
    va1=box1.value;
    va1=parseFloat(va1);
    box1.value="";
    signo="-";
    }
    function product_f(){
        va1=box1.value;
        va1=parseFloat(va1);
        box1.value="";
        signo="*";
        }
        function divide_f(){
            va1=box1.value;
            va1=parseFloat(va1);
            box1.value="";
            signo="/";
            }
function operador(){
switch(signo){
    case "+":
        va2=box1.value;
        va2=parseFloat(va2);
        box1.value="";
        r=va1+va2;
        box1.value=r;
    break;
    case "-":
        va2=box1.value;
        va2=parseFloat(va2);
        box1.value="";
        r=va1-va2;
        box1.value=r;
    break;
    case "/":
        va2=box1.value;
        va2=parseFloat(va2);
        box1.value="";
        r=va1/va2;
        box1.value=r;
    break;
    case "*":
        va2=box1.value;
        va2=parseFloat(va2);
        box1.value="";
        r=va1*va2;
        box1.value=r;
    break;
}

}
function cleaner(){
    box1.value=" ";
}

one.addEventListener("click",v1);
two.addEventListener("click",v2);
three.addEventListener("click",v3);
four.addEventListener("click",v4);
five.addEventListener("click",v5);
six.addEventListener("click",v6);
seven.addEventListener("click",v7);
eight.addEventListener("click",v8);
nine.addEventListener("click",v9);
zero.addEventListener("click",v0);
plus.addEventListener("click",plus_f);
operator.addEventListener("click",operador);
rest.addEventListener("click",rest_f);
product.addEventListener("click",product_f);
divide.addEventListener("click",divide_f);
clean.addEventListener("click",cleaner);
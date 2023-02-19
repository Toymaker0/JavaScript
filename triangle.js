let a;
let b;
let c;

document.getElementById("button").onclick=function(){
a=document.getElementById("a").value;
b=document.getElementById("b").value;
c=Math.pow(a,2)+Math.pow(b,2);
c=Math.sqrt(c);
console.log(c);
document.getElementById('c').innerHTML =c;
}
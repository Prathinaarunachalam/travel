function mytrav(){
    window.alert("We have got your message successfully");
}

function onmover(){
    window.alert("onmouseover");
}

function onmdown(){
    window.alert("onmousedown");
}

function onmleave(){
    window.alert("onmouseleave");
}

function ondbcl(){
    window.alert("ondblclick");
}

const objs=()=>{
const obj = {
    name : "abc",
    rollno : 33,
    o1:teddy={
        name:"teddy",
        rollno:13,
    },
    o2:zara={
        name:"zara",
        rollno:32,
    }
};
window.alert(obj.o2.name);
}

function constructor(a,b){
    this.a=a;
    this.b=b;  
}

const o5 = new constructor(10,30);
let c = o5.a+o5.b
function trial(){
    window.alert(c);
}

function changecolor(){
    let input =document.getElementById('fname');
    input.style.backgroundColor='blue';
}

function changecolor1(){
    document.getElementById("trial").style.backgroundColor='black';
}

function changecolor2(){
    document.getElementById("trial").style.backgroundColor='white';
}
arr = [];
function func() {

let fn,ln,eu,pu,cp;
    
let fName =document.getElementById("signin1").value;
let lName =document.getElementById("signin2").value;
let email =document.getElementById("signin3").value;
let password =document.getElementById("signin4").value;
let ConfPassword = document.getElementById("signin5").value;

let x = /\d/;
let y = /\w+/;
let re1 = /\w+@\w{4,6}.[a-zA-Z]{2,3}/;
let z = /\d{5}/;

if (fName == "" || x.test(fName)) {
document.getElementById("sign1").innerHTML="error not numbers";
document.getElementById("sign1").style.color ="red";
document.getElementById("sign1").style.fontSize = "16px";
}
else if (y.test(fName)){
document.getElementById("sign1").innerHTML="";
fn=fName;
}



if(lName ==  "" || x.test(lName)) {

document.getElementById("sign2").innerHTML = "error not numbers";
document.getElementById("sign2").style.color ="red";
document.getElementById("sign2").style.fontSize = "16px";
}
else if (y.test(lName)){
document.getElementById("sign2").innerHTML=""
ln=lName
}



if(re1.test(email)) {
    
document.getElementById("sign3").innerHTML = ""
eu = email
}
else{
document.getElementById("sign3").innerHTML = "error not special charachters"
document.getElementById("sign3").style.color ="red"
document.getElementById("sign3").style.fontSize = "16px"
   
}



if (password.match(z)){
document.getElementById("sign4").innerHTML = "";
pu = password;
}

else {
document.getElementById("sign4").innerHTML = "please enter 5 numbers at least";
document.getElementById("sign4").style.color ="red";
document.getElementById("sign4").style.fontSize = "16px";
}

if(  password.value ===  ConfPassword.value ){
    cp = ConfPassword
}else{
document.getElementById("sign5").style.display = 'block'
document.getElementById("sign5").innerHTML = " password does not match"
}


let obj = {
    Firstname:fn,
    LastName:ln,
    Email:eu,
    Password:pu,
    note:[]
    }
    
   
 if((y.test(fName)) && (y.test(lName)) && (re1.test(email))
     && (password.match(z)) && (  password.value ===  ConfPassword.value )){

    arr.push(obj)

    localStorage.setItem("user", JSON.stringify(arr));
    window.location.replace("login.html");
}
event.preventDefault()
}


// 


function check() {

    let email2 =document.getElementById("Loginemail").value
    let password2 =document.getElementById("LoginPassword").value
    let re2 = /\w+@\w{4,6}.[a-zA-Z]{2,3}/
    let z2 = /\d{5}/
    let r = (JSON.parse (localStorage.user))
    
    if (re2.test(email2)){
    
    for(i=0 ; i<r.length ; i++){
    if (email2 == (r[i].Email)){
    document.getElementById("login1").innerHTML = ""
    document.getElementById("login1").style.color ="red"
    document.getElementById("login1").style.fontSize = "16px"
    }
    }
    
    }
    else{
    document.getElementById("login1").innerHTML = "please enter correct email"
    document.getElementById("login1").style.color ="red"
    document.getElementById("login1").style.fontSize = "16px"
    
    }
    if (email2.match(re2) != email2){
    document.getElementById("login1").innerHTML = "please enter correct email"
    document.getElementById("login1").style.color ="red"
    document.getElementById("login1").style.fontSize = "16px"
    }
    
    
    
    
    
    if (password2.match(z2)){
    
    for(i=0 ; i<r.length ; i++){
    if (password2 == (r[i].Password)){
    document.getElementById("login2").innerHTML = ""
    document.getElementById("login2").style.color ="red"
    document.getElementById("login2").style.fontSize = "16px"
    }
    }
    
    }
    else{
    document.getElementById("login2").innerHTML = "please enter correct password"
    document.getElementById("login2").style.color ="red"
    document.getElementById("login2").style.fontSize = "16px"
    
    }
    
    if (
    document.getElementById("login1").innerHTML == "" &&
    document.getElementById("login2").innerHTML == ""
    ){
   
    window.location.replace("main.html")
    }
    
    }
    onload = function(){
    let t = (JSON.parse (localStorage.user))
    for (i=0 ; i<t.length ; i++){
     arr.push(t[i])
    }
    
    }
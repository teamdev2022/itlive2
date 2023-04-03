let userName = document.getElementById("userName");
let password = document.getElementById("password");
let submit = document.getElementById("submit");


let dataPro ;

if(localStorage.userInfo != null){
    dataPro = JSON.parse(localStorage.userInfo);
}
else{
    dataPro = [];
}



submit.onclick = function(){

  let dataNew = {
    userName: userName.value,
    password: password.value,
  }  

//console.log("username " + userName.value,"password", password.value);
dataPro.push(dataNew);
localStorage.setItem('userInfo', JSON.stringify(dataPro) )
console.log(dataPro);

}


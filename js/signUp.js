//Attach Document Elements
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let email = document.getElementById("email");
let submit = document.getElementById("create");

//Identify variable to put our data in
let dataArray;

//Check if there is no data saved already
if(localStorage.userInfo != null){
    dataArray = JSON.parse(localStorage.userInfo);
}else{
    dataArray = [];}

//Registration button function
submit.onclick = function(){
    if(! (userName.value==='' || password.value==='' || email.value ==='')){

        let userFound = false;
        let emailFound = false;
        let userNameArray = [];
        let emailArray = [];
        //Attach usernames & emails to check if user input anyone that reserved already
        dataArray.forEach((element) =>{
            if(! userNameArray.includes(element.user_name)){
                userNameArray.push(element.user_name);
            }
            });

        dataArray.forEach((element) =>{
            if(! emailArray.includes(element.user_email)){
                emailArray.push(element.user_email);
            }
            });
        
        //Check users & emails situation
        userNameArray.forEach((element) =>{
            if(userNameArray.includes(userName.value)){
              userFound = true;
            }
          });

        emailArray.forEach((element) =>{
            if(emailArray.includes(email.value)){
                emailFound = true;
            }
        });

        //Insert data if its new data
        if(! userFound){
            if(! emailFound){
                let newObj ={
                user_name: userName.value,
                user_pass: password.value,
                user_email: email.value
            }
            dataArray.push(newObj);

            //Store Data
            localStorage.setItem('userInfo',JSON.stringify(dataArray));

            alert("Sign Up Seccessfully");
            userName.value='';
            password.value='';
            email.value='';
            window.open("index.html",trget = "_self")


            }else{
                alert("Email is already used, plaese try again with anotherone or go to Login page")}

        }else{
            alert("Username is already reserved, please try Anotherone or go to Login page");}

    }else{
        alert("Plaese Sure to Fill All Information");}

}


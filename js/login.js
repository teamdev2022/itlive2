//Attach Document Elements
let userInformation = document.getElementById("userName");
let password = document.getElementById("password");
let submit = document.getElementById("submit");

//Identify variable to put our data in
let dataArray;

//Registration button function
submit.onclick =function(){
    if(userInformation.value != '' && password.value != '' ){
        //Check if there is no data recieved
        if(localStorage.userInfo != null){
            dataArray = JSON.parse(localStorage.userInfo);
            let userFound = true;
            let emailFound = true;
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
                if(!userNameArray.includes(userInformation.value) ){
                    userFound = false;
                }
            });
            emailArray.forEach((element) =>{
                if(! emailArray.includes(userInformation.value) ){
                    emailFound = false;
                }
            });
            
            //login operation
            if(userFound || emailFound){
            for (let index = 0; index < dataArray.length; index++) {
                if((userInformation.value === dataArray[index].user_name)||
                    (userInformation.value === dataArray[index].user_email)){
                    if(password.value === dataArray[index].user_pass){
                        alert('Login Successfully');
                        userInformation.value = '';
                        password.value = '';
                        window.open("index.html",target="_self")
                } else{
                    alert("enter correct password....");
                }
                
            }
            
        } 
    }else{
        alert("User not found, plaese try again");
    }
    }
    else{
        alert("Data is Empty!, no users stored already... try to sign up first");
    }

}else{
    alert("Plaese Sure to Fill All Information");
}
}

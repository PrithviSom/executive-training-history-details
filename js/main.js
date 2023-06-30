const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
    
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

var attempt = 3;
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "prithvi" && password == "btech2020"){
        alert("Login Successfully");
        window.location = "crud.html";
        return false;
    }
    else
    {
        attempt --;
        alert("Your have left "+attempt+"attempt:");
        if(attempt ==0){
            document.getElementById("username").disabled=true;
            document.getElementById("password").disabled=true;
            document.getElementById("submit").disabled=true;
            return false;
        }
    }
}
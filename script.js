const sb = document.getElementById('submitbutton')
const nameerror = document.getElementById('nameerror');
const emailerror = document.getElementById('emailerror');
const passerror = document.getElementById('passerror');

sb.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validatename() && validateemail() && validatepass()){
        alert("Form Submitted SucessFully");
    }
    form.clear();
});

function validatename(){
    let name = document.getElementById('name').value;
    if(name.length==0) {
        nameerror.innerHTML = "Name Is Required"
        nameerror.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML = "Write your full name"
        nameerror.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameerror.innerHTML = ""
    nameerror.previousElementSibling.classList.add("fa-check")
    return true;
}
function validateemail(){
    let email = document.getElementById('email').value;
    if(email.length==0) {
        emailerror.innerHTML = "email Is Required"
        emailerror.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailerror.innerHTML = "Enter email"
        emailerror.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    emailerror.innerHTML = ""
    emailerror.previousElementSibling.classList.add("fa-check")
    return true;
}
function validatepass(){
    let pass = document.getElementById('password').value;
    if(pass.length==0) {
        passerror.innerHTML = "pass Is Required"
        passerror.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    if(!pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passerror.innerHTML = "write pass acoo pass guideline"
        passerror.previousElementSibling.classList.add("fa-xmark")
        return false;
    }
    passerror.innerHTML = ""
    passerror.previousElementSibling.classList.add("fa-check")
    return true;
}


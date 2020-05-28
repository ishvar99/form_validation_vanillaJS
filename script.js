const form =document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

function checkRequired(inputArr){
    inputArr.forEach((input)=>{
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required!`)
        }
        else{
            showSuccess(input);
        }
    })
}

function checkValidEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value).toLowerCase())){
        showSuccess(input);
    }
    else{
        showError(input,'Email is not valid!');
    }
}

function getFieldName(input){
    if(input.id==='password2'){
        return 'Password confirmation';
    }
    return `${input.id.charAt(0).toUpperCase()+input.id.slice(1)}`;
}

function showError(input,message){
    const formControl= input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success'
}

function checkLength(input,min,max){
    if(input.value.length<min)
    {
        showError(input,`${getFieldName(input)} must be at least ${min} characters!`);
    }
    else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters!`)
    }
    else{
        showSuccess(input);
    }
}
function comparePasswords(password,password2){
    if(password.value!==password2.value){
        showError(password2,"passwords don't match")
    }
    else{
        showSuccess(input);
    }
}
form.addEventListener('submit',(e)=>{
   e.preventDefault();
   checkRequired([username,email,password,password2]);
   checkLength(username,3,15);
   checkValidEmail(email);
   checkLength(password,6,25);
   comparePasswords(password,password2);
})
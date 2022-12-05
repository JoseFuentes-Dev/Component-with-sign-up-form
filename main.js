const form = document.querySelector('.form');
const namtxt = document.querySelector('.textnam');
const lasttxt = document.querySelector('.textlast');
const mailtxt =document.querySelector('.textmail');
const pastxt =document.querySelector('.textpas');

let  inputs = document.querySelectorAll('.nam');
let inputs_array = [inputs];
form.addEventListener("submit",e=>{
    e.preventDefault();
    namtxt.innerHTML ="";
    lasttxt.innerHTML ="";
    mailtxt.innerHTML ="";
    pastxt.innerHTML="";
    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    inputs_array.forEach((e,i,arreglo) => {
    if(inputs[0].value==0){
         namtxt.innerHTML = "First Name cannot be empty"
         document.querySelector('.err1').style.opacity='1';
    }else{
        document.querySelector('.err1').style.opacity='0';
    }
    if(inputs[1].value==0){
        lasttxt.innerHTML = "First Name cannot be empty"
        document.querySelector('.err2').style.opacity='1';
    }
    else{
        document.querySelector('.err2').style.opacity='0';
    }
    if(!regexEmail.test(inputs[2].value)){
        mailtxt.innerHTML = "Looks like this is not an email"
        document.querySelector('#email').placeholder="email@example/com";
        document.querySelector('.err3').style.opacity='1';
    }else{
        document.querySelector('.err3').style.opacity='0';
    }
    if(inputs[3].value==0){
        pastxt.innerHTML= "Password cannot be empty"
        document.querySelector('.err4').style.opacity='1';
    } else{
        document.querySelector('.err4').style.opacity='0';
    }   
    });
});

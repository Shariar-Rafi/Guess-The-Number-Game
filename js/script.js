let box01 = document.querySelector(".box01");
let input01 = document.querySelector(".input01");
let error01 = document.querySelector(".error01");
let btn01 = document.querySelector(".btn01");
// =====================================================================
let box02 = document.querySelector(".box02");
let input02 = document.querySelector(".input02");
let error02 = document.querySelector(".error02");
let btn02 = document.querySelector(".btn02");
let heading02 = document.querySelector(".heading02");
// =====================================================================
let box03 = document.querySelector(".box03");
let input03 = document.querySelector(".input03");
let error03 = document.querySelector(".error03");
let btn03 = document.querySelector(".btn03");
let heading03 = document.querySelector(".heading03");
// =====================================================================
let box04 = document.querySelector(".box04");
let input04 = document.querySelector(".input04");
let error04 = document.querySelector(".error04");
let btn04 = document.querySelector(".btn04");
let heading04 = document.querySelector(".heading04");
let chanceLeft = document.querySelector(".chance");
// =====================================================================
let box05 = document.querySelector(".box05");
let input05 = document.querySelector(".input05");
let error05 = document.querySelector(".error05");
let btn05 = document.querySelector(".btn05");
let heading05 = document.querySelector(".heading05");
let banner5 = document.querySelector(".banner5");
let win = document.querySelector(".win");
// =====================================================================
let chance = 5;


btn01.addEventListener("click",function (){
    if(input01.value == ""){
        error01.innerHTML="please enter your name correctly!";
        input01.style.border = "1px solid rgb(255, 142, 206)";
    }
    else{
        error01.innerHTML= "" ;
        box01.style.display = "none";
        box02.style.display = "flex";
        heading02.innerHTML= input01.value
    }
});


btn02.addEventListener("click",function (){
    if(input02.value == ""){
        error02.innerHTML="please enter a number between 0 to 9 !";
        input02.style.border = "1px solid rgb(255, 142, 206)";
        
    } else if(input02.value < 0 || input02.value > 9){
        error02.innerHTML="please enter a number between 0 to 9 !";
        input02.style.border = "1px solid rgb(255, 142, 206)";
    }
    else{
        error02.innerHTML= "";
        box02.style.display = "none";
        box03.style.display = "flex";
    }
});

btn03.addEventListener("click",function (){
    if(input03.value == ""){
        error03.innerHTML="please enter your name correctly!";
        input03.style.border = "1px solid rgb(255, 142, 206)";
    }
    else{
        error03.innerHTML= "" ;
        box03.style.display = "none";
        box04.style.display = "flex";
        heading04.innerHTML= input03.value
    }
});


btn04.addEventListener("click",function (){
    if(input04.value == ""){
        error04.innerHTML="please enter a number between 0 to 9 !";
        input04.style.border = "1px solid rgb(255, 142, 206)";
    } else if(input04.value < 0 || input04.value > 9){
        error04.innerHTML="please enter a number between 0 to 9 !";
        input04.style.border = "1px solid rgb(255, 142, 206)";
    }
    else if(input04.value == input02.value){
        error04.innerHTML= "" ;
        box04.style.display = "none";
        box05.style.display = "flex";
        heading05.innerHTML= `Congratulations!<br>${input03.value} wins`

    }
    else{
        chance --;
        error04.innerHTML= "" ;
        chanceLeft.innerHTML = `Chance left : ${chance}` ;
        if(chance == 0){
            error04.innerHTML= "" ;
            box04.style.display = "none";
            box05.style.display = "flex";
            heading05.innerHTML= `Congratulations!<br> ${input01.value} wins`;
            win.innerHTML= `${input01.value} entered ${input02.value} as input`;
        }
        
    }
});

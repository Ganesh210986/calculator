
let display= document.querySelector(".display");
function addvalue(value){
    display.value+=value;
}
function calc()
{
    try{
        let expression= display.value;
        let result= eval(expression);
        display.value= result;
        updateHistory(expression,result);
    }
    catch(error){
        display.value="math error";
    }
}
function del(){
display.value="";
}


function updateHistory(expression,result){
    let ul=document.getElementById('lists');
    let list=document.createElement('li');
    ul.appendChild(list);
    list.innerHTML=`${expression}=${result}`;
    let delbtn=document.createElement('button');
    delbtn.classList.add('delbtn');
    delbtn.innerHTML="delete";
    delbtn.addEventListener("click",()=>{
        ul.removeChild(list);
        ul.removeChild(delbtn);
    });
    list.appendChild(delbtn);
}






let display= document.querySelector(".display");
function addvalue(value){
    display.value+=value;
}
function calc()
{
    try{
        display.value= eval(display.value);
    }
    catch(error){
        display.value="math error";
    }
}
function del(){
display.value="";
}


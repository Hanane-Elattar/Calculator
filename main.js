//calcul

const test = document.getElementById("test");

function display(input){
    test.value += input;
}

function Del(){
    test.value = test.value.slice(0 , -1);
}

function Cl(){
    test.value = "";
}
function calculate(){
    try{
        test.value = eval(test.value);
    }
    catch(error){
        test.value = "Error";
    }
}



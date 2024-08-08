function pressKey(keyValue){
    const screenElement= document.getElementById("input");
    screenElement.value += keyValue;
}
function calculate(){
    const screenElement = document.getElementById("input");
    screenElement.value = eval(screenElement.value);
}

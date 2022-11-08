function init(){
function IOFunction(){
            var input= document.getElementById('entryinput').value;
            var output= document.getElementById('textoutput');
            output.innerHTML= input;
            alert("Skyler Martin: " + input);
        }
        var vbutton= document.getElementById('entrybutton');
            vbutton.addEventListener('click', makealert);
}
window.addEventListener('load', init);
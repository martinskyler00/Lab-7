function init(){
function IOFunction(){
            var input= document.getElementById('entryinput');
            var output= document.getElementById('textoutput');
            output.innerHTML= input;
            alert("Skyler Martin: " + input);
        }
        var vbutton= document.getElementById('entrybutton');
            GamepadButton.addEventListener('click', IOFunction);
}
window.addEventListener('load', init);

console.log('HOLIII')
function init(){
    var showinfo = document.getElementById("boton");
    if(showinfo.addEventListener){
        showinfo.addEventListener("click", function(){
        enviar();
        })
    }
    else if(showinfo.attachEvent){
        showinfo.attachEvent("onclick", function(){
            enviar();
        })
    }
}


function enviar(){
console.log("Marlon come pedo");
var usuario ={"Persona":[
    {"nombre":document.getElementById('Firstname').value,
    "apellido":document.getElementById('Lastname').value,
    "direccion":document.getElementById('Direccion').value,
    "dui":document.getElementById('Dui').value,
    "edad":document.getElementById('Edad').value,
    "email":document.getElementById('email').value,
    "telefono":document.getElementById('number').value,
    "tiempo":form.dias.options[form.dias.selectedindex].value,
    "cantidad_personas":form.n.options[form.n.selectedindex].value,
    "precio":document.getElementById('precio').value
    }
]}
console.log(usuario);
}


if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}
   
function init(){
    var showinfo = document.getElementById("enviar");
    if(showinfo.addEventListener){
        showinfo.addEventListener("click", enviar, false);
    }
    else if(showinfo.attachEvent){
        showinfo.attachEvent("onclick", enviar);
    }
}


function enviar(){
var usuario ={"Persona":[
    {"nombre":formVenta.Firstname.value,
    "apellido":formVenta.Lastname.value,
    "direccion":formVenta.Direccion.value,
    "dui":formVenta.Dui.value,
    "edad":formVenta.Edad.value,
    "email":formVenta.email.value,
    "telefono":formVenta.number.value,
    "tiempo":formVenta.dias.value,
    "cantidad_personas":formVenta.n.value,
    "precio": 50
    }
]}
var myWindow = window.open("", "_self");
myWindow.document.write("<p>"+JSON.stringify(usuario)+"</p>");
}


if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}
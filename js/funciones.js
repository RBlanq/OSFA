

$(document).ready(function() {
    $("#Tabla").hide();
$("#error").hide();
$("#correcto").hide();
    $("#boton").click(function(){
        var verificado = false
var id=$("#ID").val(),pro=$("#Programa").val(),cant=$("#CantidadE").val();
var lar=pro.length;

        if(id>0 && cant>0 && lar>0){
        verificado=true;

        }
       
if(verificado==false){
$("#error").slideDown();
$('#ID'). attr("disabled", true);
$('#Programa'). attr("disabled", true);
$('#CantidadE'). attr("disabled", true);
}

            if(verificado==true){
                $("#correcto").slideDown()
               
                setTimeout(function() {$("#correcto").slideUp();},850);


            
                $("#Tabla").fadeIn();
        var fila = '<tbody><tr><th >'+$("#ID").val()+'</th><td>'+$("#Programa").val()+'</td><td>'+$("#CantidadE").val()+'</td></tr></tbody>';
        $("#Tabla").append(fila);

$("#ID").val("");
$("#Programa").val("");
$("#CantidadE").val("");
       }
        })
        

$("#acepto").click(function(){
    $("#error").slideUp();
    $('#ID'). attr("disabled", false);
    $('#Programa'). attr("disabled", false);
    $('#CantidadE'). attr("disabled", false);

})


    })



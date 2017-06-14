$(document).ready(function() {
   
   $("#nadpis").fadeIn(1500);
   $("#motto").fadeIn(2500);
   $("#arrow").fadeIn(3500);
});




$("#para").click(function() {
$("#para").hide();

});

$("#motto").click(function() {
    alert("jdi do pici ty zasrana mrdko vole doufam ze skapes na nějakou píčovinu , fuj na tebe");
});

$("a[href*=\\#scroll]").on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

$("a[href*=\\#charita]").on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

$("a[href*=\\#graphs]").on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});


$("#show").click(function() {
    $
}); 


var content = document.getElementById("content");
var button = document.getElementById("show-more");
 
 button.onclick = function(){
  
   if(content.className == "open"){
     content.className = "";
      button.innerHTML = "Zobrazit více";
   } 
   else  {
   content.className = "open";
   button.innerHTML = "Sbalit";
   }
 }
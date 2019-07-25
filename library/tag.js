$(document).ready(function(){
    $("#fn").click(function(){
      $("#txtbox").append("{firstname}")   // add first name through button click dynamicaly
    });
    $("#ln").click(function(){
        $("#txtbox").append("{lastname}")   // add last name through button click dynamicaly
    });
    $("#comp").click(function(){
        $("#txtbox").append("{Company}")   // add company name through button click dynamicaly
    }); 
    $("#pos").click(function(){
        $("#txtbox").append("{Position}")   // add position name through button click dynamicaly
    });
    $("#toggle").click(function(){
        $("#uploadDiv").toggle();
    });
});

function toggleBtn() {
    var x = document.getElementById("uploadDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
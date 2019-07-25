$(document).ready(function () {
    $("#selectAll").click(function (e) { 
        e.preventDefault();
        $(".checkbox").prop('checked', true);
    });


    $("#deselectAll").click(function (e) { 
        e.preventDefault();
        $(".checkbox").prop('checked', false);
    });

});
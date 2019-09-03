$(document).ready( function (){

    function reset () {
        $("#toggleCSS").attr("href", "alertify.js-0.3.11/themes/alertify.default.css");
        alertify.set({
            labels : {
                ok     : "OK",
                cancel : "Cancel"
            },
            delay : 5000,
            buttonReverse : false,
            buttonFocus   : "ok"
        });
    }


    // ==============================
    // Ajax
    $("#ajax").on("click", function () {
        reset();
        alertify.confirm("Confirm?", function (e) {
            if (e) {
                alertify.alert("Successful AJAX after OK");
            } else {
                alertify.alert("Successful AJAX after Cancel");
            }
        });
    });

    $("#sticker").sticky({topSpacing:0});

});


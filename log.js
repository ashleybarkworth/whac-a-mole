$(function () {
    var textFile = null;
    mouseData = "";
    keyData = "";

    $(document).mousemove(function(e) {
        mouseData += $.now() + ",";
        mouseData += e.pageX + ",";
        mouseData += e.pageY + ",";
        mouseData += "mousemove\n";
    });

    $(document).click(function(e) {
        mouseData += $.now() + ",";
        mouseData += e.pageX + ",";
        mouseData += e.pageY + ",";
        mouseData += "mouseclick\n";
    });

    $("#textStuff").keydown(function(e) {
        keyData += $.now() + ",";
        keyData += e.keyCode + ",";
        keyData += "keydown\n";
    });

    $("#textStuff").keyup(function(e) {
        keyData += $.now() + ",";
        keyData += e.keyCode + ",";
        keyData += "keyup\n";
    });

});
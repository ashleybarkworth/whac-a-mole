$(function () {
    var textFile = null;
    mouseData = "";
    keyData = "";
    // A map to remember keys that are held down
    var keysdown = {};

    $(document).mousemove(function(e) {
        mouseData += e.timeStamp + ",";
        mouseData += e.pageX + ",";
        mouseData += e.pageY + ",";
        mouseData += "mousemove\n";
    });

    $(document).click(function(e) {
        mouseData += e.timeStamp + ",";
        mouseData += e.pageX + ",";
        mouseData += e.pageY + ",";
        mouseData += "mouseclick\n";
    });

    $("#textStuff").keydown(function(e) {
        if (keysdown[e.keyCode]) {
          // Ignore it
          return;
        }

        // Remember it's down
        keysdown[e.keyCode] = true;

        keyData += e.timeStamp + ",";
        keyData += e.key + ",";
        keyData += "keydown\n";
    });

    $("#textStuff").keyup(function(e) {
        keyData += e.timeStamp + ",";
        keyData += e.key + ",";
        keyData += "keyup\n";
        delete keysdown[e.keyCode];
    });

});
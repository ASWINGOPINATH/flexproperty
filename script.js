function myFunction() {
    var x = document.getElementById("myDIV");
    var y = x.getElementsByTagName("DIV");
    var i = 0;
    for (i; i < y.length; i++) {
        y[i].style.msFlex = "1"; // IE10
        y[i].style.WebkitFlex = "1"; // Safari 6.1+
        y[i].style.flex = "1";
    }
}
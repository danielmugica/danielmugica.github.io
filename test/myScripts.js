var text = "";
var i;
for (i = 2; i < 257; i=i*2) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

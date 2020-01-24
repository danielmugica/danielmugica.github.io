function myLoop() {
var start = document.getElementById("start").value;
var end = document.getElementById("end").value;
var count = document.getElementById("counter").value;
  start = Number(start);
  end = Number(end);
  count = Number(count);
for ( var i = start; i <= end; i = i + count)
  {
    document.write('<p>' + i + '</p>')
  }
}

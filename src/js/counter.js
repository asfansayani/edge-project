var count = 0;
var countMinus = 0;
  function increment() {
    count++;
    document.getElementById("counter").innerHTML = count;
  }
  
  function decreament() {
    count-- ;
    document.getElementById("counter").innerHTML = count;
  }
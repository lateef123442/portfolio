function generateNumbers() {
  
 /* alert("First 100 even numbers:");
  for (var i = 1; i <= 100; i++) {
    var evenNumber = i*2;
    alert(evenNumber);
  }
*/
// let evennumber=[];
var evnum='';
for (let i = 2; i <=200; i+=2) {
  // evennumber.push(i);
  evnum=evnum+","+i;
}
// alert(evennumber.join(","));
alert(evnum);

  alert("First 100 odd numbers:");
  var oddnum='';
  for (var i = 1; i <= 200; i+=2) {
   // var oddNumber = i * 2 + 1;
   oddnum=oddnum+","+i;
  }
  alert(oddnum);
}
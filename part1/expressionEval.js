var x =  5;
console.log(x);  // repl
//&&  ||  ! == === & |

console.log('Testing AND with true and true');
console.log(true && true);
var isRaining = false;
var amIGoingOutside = false;
var doINeedAnUmbrella = isRaining && amIGoingOutside;
console.log('Do I need an Umbrella today?');
console.log(doINeedAnUmbrella);

console.log('5 && 7');
console.log(5 && 7);

console.log('Testing NOT/Negation (!) with !true');
console.log(!true);

console.log('Testing OR with true or false');
console.log(true || false);
var isTodayShabbat = true;
var isTodayYomTov = false;
var isTodayYomKippur =false;
var amIAllowedToUseElectricity = !(isTodayYomTov || isTodayShabbat || isTodayYomKippur);
console.log('Am I allowed to Use Electricity today?');
console.log(amIAllowedToUseElectricity);
//Remember!! console.log() prints something out to the screen!!

console.log("hello")

for (var i = 5; i < 120; i += 10) {
    console.log("current value " + i);
}

for (var j = 4096; j >= 1; j = j / 2) {
    console.log("current value " + j);
}

var presidents = [ "George Washington", "John Adams", "Thomas Jefferson", "George Walker Bush", "Barack Hussein Obama"]
for (var d = 0; d < presidents.length; d++) {
    console.log("President #" + (d + 1) + " was " + presidents[d]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var varietyofAnt in antSpecies) {
  console.log(varietyofAnt);
}

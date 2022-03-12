//Reading JSON file
var fs = require('fs');
var object = JSON.parse(fs.readFileSync('tellimused.json', 'utf8'));




//Siin saad võtta objekti ning anda kõik vajalikud parameetrid, kas lisada v ära võtta, ehk ka lisata staatuse!
object.Ingmar2 = {appearance: "ilus3","atomic_mass":8,"boil":9603, status: "out"};

//Writing results to JSON file
fs.writeFileSync('tellimused.json', JSON.stringify(object));

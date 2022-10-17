const objet = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi! I'm ${objet.fullName} and I'm from ${objet.campus}`,
    e : "oO",
    T : "U "
}));
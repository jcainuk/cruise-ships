
function Ship(startingPort){
    this.startingPort = startingPort;
    this.currentPort = startingPort;
};

Ship.prototype.setSail = function () {
   
    this.startingPort = "";
    
};

function Port(name){

    this.name = name;
}


module.exports = {
Ship,
Port
 };
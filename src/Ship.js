
function Ship(port){
    
    this.currentPort = port;
};

Ship.prototype.setSail = function () {
   
    this.currentPort = "";
    
};

function Port(name){

    this.name = name;
}


module.exports = Ship;


function Ship(port){
    
    this.currentPort = port;
};

Ship.prototype.setSail = function () {
   
    this.currentPort = "";
    
};




module.exports = Ship;

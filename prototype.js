function Duck(name, color){
    this.name = name;
    this.color = color;

    this.speek = function(){
        console.log(this.name + ' have ' + this.color + ' and speak quak quak');
    }
};

var Donal = new Duck('Donal', 'yealow');
var DuckDuck = new Duck('DuckDuck', 'black');

Donal.speek();
DuckDuck.speek();

Duck.prototype.height = 2.5;
Duck.prototype.walk = function(khoangcach){
    console.log(Donal.name + ' walk for ' + khoangcach + ' meters');
};

console.log(DuckDuck.name + ' height is ' + DuckDuck.height);

Donal.walk(5.6);
DuckDuck.walk(3);
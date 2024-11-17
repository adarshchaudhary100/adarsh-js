function multuplyby5(num){
    return num*5;
}
multuplyby5.power=2;

// console.log(multuplyby5(3));
// console.log(multuplyby5.power);
// console.log(multuplyby5.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score;
}
createUser.prototype.increment=function(){
    this.score++;
}
createUser.prototype.printme=function(){
    console.log(`score is ${this.score}`);
}

const chai=new createUser("Akul",25);
const cofee=new createUser("Adarsh",250);

chai.printme();
chai.increment();
class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`UserName is ${this.username}`)
    }
    static createId(){
         return `1234`;
    }
}

const don=new user("akul");
// console.log(don.createId());

class teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const iphone= new teacher("papa", "i@aga.com")
console.log(iphone.createId());
// iphone.logMe();


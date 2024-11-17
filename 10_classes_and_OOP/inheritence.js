class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        // this.username=username
        super(username);
        this.email=email;
        this.password=password;
    }

    addcourse(){
         console.log(`New course was added by ${this.username}`);
    }
}

const coffee= new Teacher('Akul','akul@fb.com',121);
coffee.addcourse();

const coldCoffee=new user('student');
coldCoffee.logMe();

console.log(coldCoffee instanceof user)
console.log(coffee instanceof Teacher)
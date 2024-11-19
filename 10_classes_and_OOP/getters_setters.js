class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return this.__ppassword.toUpperCase();
    }
    set password(value){
        this.__ppassword=value;
    }
}

const adarsh=new user("akul@ai.com","gjhm");
console.log(adarsh.password);

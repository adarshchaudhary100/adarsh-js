const user={
    _email:'h@akul.com',
    password:"ada",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}

// const akka=new user
console.log(user.email);
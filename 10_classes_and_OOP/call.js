function setusername(username){
    this.username=username;
    // console.log(username)
}

function createUser(username,email,password){
    setusername.call(this,username),
    this.email=email,
    this.password=password
}

const chai=new createUser('akul','akul@gmail.com', 'adadd')

console.log(chai);
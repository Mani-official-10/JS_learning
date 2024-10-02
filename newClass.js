class user{
    constructor (username , email , password){
    this.username = username
    this.email = email
    this.password = password
}

encryptPassword(){
    return `${this.password}abc`
}

changeUserName (){
    return `${this.username.toUpperCase()}`
}

}

const chai = new user("Manish" , "mani@google.com" , "123")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());


//behind the scene

const newUser = function(username , email , password){
    this.username = username
    this.email = email
    this.password = password
}

newUser.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}
newUser.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new newUser("Manish" , "mani@google.com" , "123")

console.log(tea.encryptPassword());
console.log(tea.changeUserName());
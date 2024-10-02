const setUser = function(username){
    this.username = username
}

const createUser = function(username , email , password){
    setUser.call(this , username)

    this.email = email
    this.password = password
}

const chai = new createUser ("Manish", "Mani@fb.com" , "mani@123");
console.log(chai);

class user{
    constructor(username , email , password){
        this.username = username
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const app = new user ("manish" , "m@manishAI.com" , "vamika");

console.log(app);
console.log(app.password);


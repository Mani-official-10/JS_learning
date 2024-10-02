class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        console.log(this.username);
        
        
    }
}

class teacher extends user {
    constructor (username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`Course add by the user ${this.username}`);
        
    }
}

const chai = new teacher("Manish", "mani@fb.com", "1234");

chai.addCourse();
chai.logMe();

const masalChaai = new user("masalChaai");

masalChaai.logMe()
// masalChaai.addCourse()
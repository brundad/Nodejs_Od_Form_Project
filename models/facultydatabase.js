
let data=[
    {username:"ambika",password:"abcd"},
    {username:"saranya",password:"problem"},
    {username:"hema",password:"stepup"},
];

class Faculty{
    constructor(n){
        this.n = n;
    }
    save(){
        data.push(this.n);
    }
    static fetchAll(){
        return data;
    }
}
module.exports = Faculty;
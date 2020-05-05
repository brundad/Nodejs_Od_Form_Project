
let data=[
    {username:"brunda",password:"balaji"},
    {username:"balaji",password:"1003"}
];

class Student{
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

module.exports = Student;

let data=[
    {username:"kanamma",password:"12345"},
    {username:"gevitha",password:"0987"}
];

class Hod{
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
module.exports = Hod;
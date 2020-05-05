const StudData = require('../models/studentdatabase');
const fs=require("fs");

exports.loginsuccess = (req,res,next) => {

    console.log(req.body);
    let tempusername=req.body.username;
    let temppassword=req.body.password;
    let flag=false;
    let data = StudData.fetchAll();

    for(let val of data)
    {
        // console.log(val.username+" == "+tempusername);
        if(val.username==tempusername && val.password==temppassword){

            flag = true;
            console.log("successfully loged in");
            lg=tempusername;
            return res.render("result.ejs",{docTitle: "Student Dashboard",Users: val});
        }
    }
    
    if(flag == false ){
        return res.status(301).redirect(301,'/signupstu');
    }
}

exports.signupsuccess = (req,res,next)=>{

    console.log(req.body);
    
    let tempusername=req.body.username;
    let temppassword=req.body.password;
    let tempdepartment=req.body.department;
    let tempyear=req.body.year;
    let tempregno=req.body.regno;
    let tempemail=req.body.email;


    let newuser={
        username:tempusername,
        password:temppassword,
        depatrment:tempdepartment,
        year:tempyear,
        regno:empregno,
        email:tempemail,
        requests: []
    }
    
    let flag=false;
    let tempdata = StudData.fetchAll();

    for(let val of tempdata){
        if(val.username==tempusername )
        {
            flag=true;
            break;
        }
    }

    if(flag==false){
        console.log(flag);
        let student = new StudData(newuser);
        student.save();
        let filename=tempusername+".txt";
        let filedata="name :"+tempusername+"\npassword:"+temppassword+" ";
        fs.writeFileSync(filename,filedata);
        return res.redirect(301,'/logstu');
    }
    else{
        return res.status(301).redirect(301,'/student');
    }
}

exports.request = (req,res,next) => {

    let tempusername=req.body.user;
    
    console.log(req.body);
    let data = StudData.fetchAll();
    let reqobj = {

        dateto: req.body.dateto,
        datefr: req.body.datefr,
        purpose: req.body.purpose,
        place: req.body.place,
        link: req.body.link
    }
    
    for(let val of data)
    {
        // console.log(val.username+" == "+tempusername);
        if(val.username==tempusername){

            console.log("successfully loged in");
            lg=tempusername;
            return res.render("result.ejs",{docTitle: "Student Dashboard",Users: val});
        }
    }
}
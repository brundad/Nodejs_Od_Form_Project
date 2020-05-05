const FacuData = require('../models/facultydatabase');
const fs=require("fs");
exports.facultyloginsuccess=(req,res,next)=>{
   
    console.log(req.body);
    let tempusername=req.body.username;
    let temppassword=req.body.password;
    let flag=false;
    let data = FacuData.fetchAll();
    for(let val of data)
    {
        console.log(val.username+" == "+tempusername);
        if(val.username==tempusername && val.password==temppassword){

            flag = true;
            console.log("successfully loged in");
            lg=tempusername;
            return res.render('advisorfolder.ejs');
        }
    }
    
    if(flag == false ){
        return res.status(301).redirect(301,'/logfac');
    }
    
}
exports.facultysignupsuccess=(req,res,next)=>{

    console.log(req.body);
    
    let tempusername=req.body.username;
    let temppassword=req.body.password;

    let newuser={
        username:tempusername,
        password:temppassword
    }
    let flag=false;
    let tempdata = FacuData.fetchAll();
    for(let val of tempdata){
        if(val.username==tempusername )
        {
            flag=true;
            break;
        }
    }
    if(flag==false){
        console.log(flag);
        let faculty = new FacuData(newuser);
        faculty.save();
        let filename=tempusername+".txt";
        let filedata="name :"+tempusername+"\npassword:"+temppassword+" ";
        fs.writeFileSync(filename,filedata);
        return res.render("facultydashboard.ejs",{docTitle: "Faculty Dashboard",Users:FacuData.fetchAll()});
    }
    else{
        return res.status(301).redirect(301,'/staff');
    }
}
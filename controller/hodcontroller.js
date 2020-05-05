const HodData = require('../models/hoddatabase');
const fs=require("fs");



exports.hodloginsuccess=(req,res,next)=>{
    console.log(req.body);
    let tempusername=req.body.username;
    let temppassword=req.body.password;
    let flag=false;
    let data = HodData.fetchAll();
    for(let val of data)
    {
        console.log(val.username+" == "+tempusername);
        if(val.username==tempusername && val.password==temppassword){

            flag = true;
            console.log("successfully loged in");
            lg=tempusername;
            return res.render('details.ejs');
        }
    }
    
    if(flag == false ){
        return res.status(301).redirect(301,'/staff.html');
    }
    
}
exports.hodsignupsuccess=(req,res,next)=>{

    console.log(req.body);
    
    let tempusername=req.body.username;
    let temppassword=req.body.password;

    let newuser={
        username:tempusername,
        password:temppassword
    }
    
    let flag=false;
    let tempdata = HodData.fetchAll();
    for(let val of tempdata){
        if(val.username==tempusername )
        {
            flag=true;
            break;
        }
    }

    if(flag==false){
        console.log(flag);
        let hod = new HodData(newuser);
        hod.save();
        let filename=tempusername+".txt";
        let filedata="name :"+tempusername+"\npassword:"+temppassword+" ";
        fs.writeFileSync(filename,filedata);
        return res.render("facultydashboard.ejs",{docTitle: "Faculty Dashboard",Users:HodData.fetchAll() });
    }
    else{
        return res.status(301).redirect(301,'/staff');
    }
}
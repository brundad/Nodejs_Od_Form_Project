
const fs=require("fs");
let lg;
const express1=require('express');
const bparser1=require('body-parser');
const studentcontroller = require("./controller/studentcontroller");
const facultycontroller = require("./controller/facultycontroller");
const hodcontroller = require("./controller/hodcontroller");
const path=require('path');
const router=express1.Router();

router.use(bparser1.urlencoded({extended:true}));
router.get("/form",(req,res,next) =>res.sendFile(path.join(__dirname,"views","home.html")));
router.get("/signupstu",(req,res,next) =>res.sendFile(path.join(__dirname,"views","signstu.html")));
router.get("/signupfac",(req,res,next) =>res.sendFile(path.join(__dirname,"views","signadvi.html")));
router.get("/logstu",(req,res,next) =>res.sendFile(path.join(__dirname,"views","loginstu.html")));
router.get("/logfac",(req,res,next) =>res.sendFile(path.join(__dirname,"views","loginadvi.html")));
router.get("/student",(req,res,next) =>res.sendFile(path.join(__dirname,"views","student.html")));
router.get("/faculty",(req,res,next) =>res.sendFile(path.join(__dirname,"views","faculty.html")));
router.get("/staff",(req,res,next) =>res.sendFile(path.join(__dirname,"views","staff.html")));
router.get("/loginhod",(req,res,next) =>res.sendFile(path.join(__dirname,"views","loginhod.html")));
router.get("/signhod",(req,res,next) =>res.sendFile(path.join(__dirname,"views","signhod.html")));
router.get("/approved",(req,res,next) =>res.sendFile(path.join(__dirname,"views","approved.html")));
router.get("/waiting",(req,res,next) =>res.sendFile(path.join(__dirname,"views","waiting.html")));
router.get("/canceled",(req,res,next) =>res.sendFile(path.join(__dirname,"views","canceled.html")));
router.get("/status",(req,res,next) =>res.sendFile(path.join(__dirname,"views","status.html")));



router.get("/applying",(req,res,next) =>res.render("applica.ejs"));
router.get("/result",(req,res,next) =>res.render("result.ejs"));
router.get("/admin",(req,res,next) =>res.render("admin.html"));
router.get("/folder",(req,res,next) =>res.render("advisorfolder.ejs"));
router.get("/details",(req,res,next) =>res.render("details.ejs"));
router.get("/facultydashboard",(req,res,next) =>res.render("facultydashboard.ejs"));
router.post('/request' , studentcontroller.request);



router.post("/stuloginsuccess", studentcontroller.loginsuccess);
router.post("/stusignupsuccess", studentcontroller.signupsuccess);

router.post("/facultyloginsuccess",facultycontroller.facultyloginsuccess);
router.post("/facultysignupsuccess",facultycontroller.facultysignupsuccess);

router.post("/hodloginsuccess",hodcontroller.hodloginsuccess);
router.post("/hodsignupsuccess",hodcontroller.hodsignupsuccess);


module.exports = router;
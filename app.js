const express=require('express');
const bparser=require('body-parser');
const router=require('./router');
const app=express();

app.set("view engin" , "ejs");
app.set("views" , "views");

app.use(
    bparser.urlencoded({extended:true})
);
app.use(router);
app.listen(3000);






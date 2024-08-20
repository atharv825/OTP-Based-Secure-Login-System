const mongoose = require("mongoose");

const DB = "mongodb+srv://atharvbajaj2001:afByDO6IFaKTg1Md@cluster0.chxdj.mongodb.net/loginwithotp?retryWrites=true&w=majority&appName=Cluster0";
mongoose.set('strictQuery', false);
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connected"))
.catch((error)=>{
    console.log("error",error);
})
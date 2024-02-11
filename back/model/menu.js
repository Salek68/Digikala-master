import mongoose from "mongoose";
const menu = mongoose.Schema({
  name : {
        type:String,
        require:true
    },
    img : {
        type:String,
        require:true
    }
    ,
    alt : {
        type:String,
        require:true
    }
    ,
    enabel : {
        type:Number,
        require:true
    }
 
})
export default mongoose.model("menu",menu);
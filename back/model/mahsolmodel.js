import mongoose from "mongoose";
const mahsolat = mongoose.Schema({
    mahsolname : {
        type:String,
        require:true
    },
    gheymat : {
        type:Number,
        require:true
    }
    ,
    mojodi : {
        type:Number,
        require:true
    }
    ,
    tozihat : {
        type:String,
        require:true
    }
    ,
    moshakhasat : {
        type:String,
        require:true
    }
})
export default mongoose.model("mahsolat",mahsolat);
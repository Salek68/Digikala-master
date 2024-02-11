import mahsolmodel from "../model/mahsolmodel.js";
export const getallmahsol = async(req,res)=>{
    try{
const mahsolat = await mahsolmodel.find();
res.json(mahsolat);
    }
    catch(Error){
res.status(500).json({message : Error.message})
    }
}
export const savemahsol = async (req,res)=>{
    const mahsolat = new mahsolmodel(req.body);
    try{
const insertuser = await mahsolat.save();
res.json({message : "add ok"})
    }catch(Error){
        res.status(400).json({message : Error.message})
    }
}
export const getmasolbyid = async(req,res)=>{
    try{
const mahsolat = await mahsolmodel.findById(req.params.id);

res.json(mahsolat);
    }
    catch(Error){
res.status(500).json({message : Error.message})
    }
}
